import Image from "next/image";

interface ImageWithCaptionProps {
  src: string;
  alt: string;
  caption?: string;
  size?: "default" | "full";
}

export function ImageWithCaption({
  src,
  alt,
  caption,
  size = "default"
}: ImageWithCaptionProps) {
  return (
    <figure className={`my-8 ${size === "full" ? "w-full" : "max-w-3xl mx-auto"}`}>
      <div className="aspect-video relative rounded-lg overflow-hidden bg-gray-100">
        <Image src={src} alt={alt} fill className="object-cover" />
      </div>
      {caption && (
        <figcaption className="mt-3 text-sm text-gray-600 text-center">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
