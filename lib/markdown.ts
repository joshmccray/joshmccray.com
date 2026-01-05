import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';

const contentDirectory = path.join(process.cwd(), 'content');

export interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  readingTime: string;
  coverImage?: string;
  tags?: string[];
}

export interface CaseStudy {
  slug: string;
  title: string;
  date: string;
  client: string;
  role: string;
  excerpt: string;
  content: string;
  readingTime: string;
  coverImage?: string;
  tags?: string[];
  liveUrl?: string;
  quickStats?: {
    company: string;
    role: string;
    timeline?: string;
    team?: string;
    problem: string;
    solution: string;
  };
  results?: {
    metrics?: Array<{
      label: string;
      value: string;
      description?: string;
    }>;
    impact?: string;
    status?: string;
  };
}

export function getContentByType(type: 'blog' | 'case-studies') {
  const typeDirectory = path.join(contentDirectory, type);

  if (!fs.existsSync(typeDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(typeDirectory);
  const allContent = fileNames
    .filter((fileName) => fileName.endsWith('.md') || fileName.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.(md|mdx)$/, '');
      const fullPath = path.join(typeDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);
      const { text: readingTimeText } = readingTime(content);

      return {
        slug,
        content,
        readingTime: readingTimeText,
        ...data,
      };
    });

  return allContent.sort((a: any, b: any) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllBlogPosts(): Post[] {
  return getContentByType('blog') as Post[];
}

export function getAllCaseStudies(): CaseStudy[] {
  return getContentByType('case-studies') as CaseStudy[];
}

export function getContentBySlug(
  type: 'blog' | 'case-studies',
  slug: string
): (Post | CaseStudy) | null {
  const typeDirectory = path.join(contentDirectory, type);

  try {
    const fullPath = path.join(
      typeDirectory,
      `${slug}.${fs.existsSync(path.join(typeDirectory, `${slug}.mdx`)) ? 'mdx' : 'md'}`
    );
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    const { text: readingTimeText } = readingTime(content);

    return {
      slug,
      content,
      readingTime: readingTimeText,
      ...data,
    } as Post | CaseStudy;
  } catch {
    return null;
  }
}

export function getBlogPost(slug: string): Post | null {
  return getContentBySlug('blog', slug) as Post | null;
}

export function getCaseStudy(slug: string): CaseStudy | null {
  return getContentBySlug('case-studies', slug) as CaseStudy | null;
}
