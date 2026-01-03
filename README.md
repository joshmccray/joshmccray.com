# Josh McCray - Portfolio

A modern portfolio website built with Next.js, featuring product design case studies and blog posts.

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS
- **Content**: Markdown/MDX files
- **Language**: TypeScript
- **Deployment**: Vercel (recommended)

## Features

- Static site generation for optimal performance
- Markdown-based content management
- Case studies showcase
- Blog with reading time estimates
- Responsive design
- SEO optimized
- Type-safe with TypeScript

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, or pnpm

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── blog/              # Blog pages
│   ├── case-studies/      # Case study pages
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── navigation.tsx     # Navigation bar
│   └── footer.tsx         # Footer
├── content/               # Markdown content
│   ├── blog/             # Blog posts
│   └── case-studies/     # Case studies
├── lib/                   # Utility functions
│   └── markdown.ts       # Markdown processing
└── public/               # Static assets
```

## Adding Content

### Case Studies

Create a new `.md` file in `content/case-studies/`:

```markdown
---
title: "Your Project Title"
date: "2024-01-15"
client: "Client Name"
role: "Your Role"
excerpt: "Brief description of the project"
tags: ["Design", "UX", "Research"]
liveUrl: "https://example.com"
---

Your case study content here...
```

### Blog Posts

Create a new `.md` file in `content/blog/`:

```markdown
---
title: "Your Post Title"
date: "2024-01-15"
excerpt: "Brief description of the post"
tags: ["Design", "Development"]
---

Your blog post content here...
```

## Customization

### Update Personal Information

1. Edit `app/layout.tsx` to update site metadata
2. Edit `app/page.tsx` to update the hero section
3. Edit `components/footer.tsx` to update social links

### Styling

- Tailwind configuration: `tailwind.config.js`
- Global styles: `app/globals.css`

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will automatically detect Next.js and deploy

**That's it!** Vercel provides:
- Automatic deployments on every push
- Free SSL certificate
- Global CDN
- Zero configuration needed

### Deploy to Netlify

1. Push your code to GitHub
2. Visit [netlify.com](https://netlify.com)
3. Connect your repository
4. Build command: `npm run build`
5. Publish directory: `.next`

### Deploy to Other Platforms

This is a static Next.js site and can be deployed to any platform that supports Node.js:

- GitHub Pages (with GitHub Actions)
- Cloudflare Pages
- AWS Amplify
- Railway
- Render

## Build Commands

```bash
# Development
npm run dev

# Production build
npm run build

# Start production server
npm run start

# Lint code
npm run lint
```

## Performance

The site is optimized for performance:
- Static generation for instant page loads
- Automatic image optimization with Next.js Image
- Minimal JavaScript bundle
- Lazy loading of components

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.

## Support

For questions or issues, please open an issue on GitHub.
