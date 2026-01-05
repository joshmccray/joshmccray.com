import Image from "next/image";

interface ImageCompareProps {
  before: {
    src: string;
    label?: string;
  };
  after: {
    src: string;
    label?: string;
  };
}

export function ImageCompare({ before, after }: ImageCompareProps) {
  return (
    <div className="my-8 grid md:grid-cols-2 gap-4">
      <figure>
        {before.label && (
          <div className="text-sm font-medium text-gray-700 mb-2">
            {before.label}
          </div>
        )}
        <div className="aspect-video relative rounded-lg overflow-hidden bg-gray-100">
          <Image
            src={before.src}
            alt={before.label || "Before"}
            fill
            className="object-cover"
          />
        </div>
      </figure>
      <figure>
        {after.label && (
          <div className="text-sm font-medium text-gray-700 mb-2">
            {after.label}
          </div>
        )}
        <div className="aspect-video relative rounded-lg overflow-hidden bg-gray-100">
          <Image
            src={after.src}
            alt={after.label || "After"}
            fill
            className="object-cover"
          />
        </div>
      </figure>
    </div>
  );
}
