import Image from "next/image";

interface FullBleedImageProps {
  src: string;
  alt?: string;
  bgColor: string;
  textColor: string;
}

export function FullBleedImage({
  src,
  alt,
  bgColor,
  textColor,
}: FullBleedImageProps) {
  return (
    <div className="my-12 not-prose">
      {/* Full-bleed background */}
      <div
        className="relative left-1/2 -ml-[50vw] w-screen py-12 md:py-16"
        style={{ backgroundColor: bgColor }}
      >
        {/* Constrained image container */}
        <div className="mx-auto max-w-4xl px-4">
          <Image
            src={src}
            alt={alt || ""}
            width={1200}
            height={800}
            className="rounded-lg w-full h-auto !m-0"
          />
          {alt && (
            <p
              className={`mt-4 text-sm text-center font-light ${textColor}`}
            >
              {alt}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
