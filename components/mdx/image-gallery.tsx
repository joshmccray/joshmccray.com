interface ImageGalleryProps {
  children: React.ReactNode;
}

export function ImageGallery({ children }: ImageGalleryProps) {
  return (
    <div className="my-8 overflow-x-auto -mx-4 px-4">
      <div className="flex md:grid md:grid-cols-3 gap-4 pb-4">
        {children}
      </div>
    </div>
  );
}
