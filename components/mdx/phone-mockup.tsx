interface PhoneMockupProps {
  src1: string;
  alt1: string;
  caption1?: string;
  src2?: string;
  alt2?: string;
  caption2?: string;
  bgColor?: string;
  caption?: string;
}

export function PhoneMockup({
  src1,
  alt1,
  caption1,
  src2,
  alt2,
  caption2,
  bgColor = "#0A1628",
  caption,
}: PhoneMockupProps) {
  const isSingle = !src2;
  const textColor = bgColor === "#0A1628" ? "text-gray-400" : "text-gray-600";

  return (
    <figure className="my-12 not-prose">
      {/* Full-bleed background */}
      <div
        className="relative left-1/2 -ml-[50vw] w-screen py-16 md:py-20"
        style={{ backgroundColor: bgColor }}
      >
        {/* Centered phone container */}
        <div
          className={`mx-auto px-8 flex flex-col items-center gap-8 md:flex-row md:justify-center md:gap-12 ${isSingle ? "max-w-sm" : "max-w-3xl"}`}
        >
          {/* Phone 1 */}
          <div className="flex flex-col items-center">
            <div className="w-[260px] md:w-[280px] rounded-[32px] border-[8px] border-black/80 shadow-2xl shadow-black/50 overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src1}
                alt={alt1}
                className="block w-full h-auto !m-0"
              />
            </div>
            {caption1 && (
              <p className={`mt-4 text-sm text-center font-light ${textColor}`}>
                {caption1}
              </p>
            )}
          </div>

          {/* Phone 2 (optional) */}
          {src2 && (
            <div className="flex flex-col items-center">
              <div className="w-[260px] md:w-[280px] rounded-[32px] border-[8px] border-black/80 shadow-2xl shadow-black/50 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={src2}
                  alt={alt2 || "Phone screen"}
                  className="block w-full h-auto !m-0"
                />
              </div>
              {caption2 && (
                <p className={`mt-4 text-sm text-center font-light ${textColor}`}>
                  {caption2}
                </p>
              )}
            </div>
          )}
        </div>

        {/* Shared caption */}
        {caption && (
          <p className={`mt-8 text-sm text-center font-light ${textColor}`}>
            {caption}
          </p>
        )}
      </div>
    </figure>
  );
}
