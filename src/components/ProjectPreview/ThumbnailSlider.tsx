"use client";

import Image from "next/image";
import { useRef, useState } from "react";

type Props = {
  images: string[];
  goToSlideAction: (index: number) => void;
  currentSlide: number;
};

export default function ThumbnailSlider({
  images,
  goToSlideAction,
  currentSlide,
}: Props) {
  // Thêm vào component của bạn
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleStart = (clientX: number) => {
    setIsDragging(true);
    setStartX(clientX - sliderRef.current!.offsetLeft);
    setScrollLeft(sliderRef.current!.scrollLeft);
  };

  const handleMove = (clientX: number) => {
    if (!isDragging) return;
    const x = clientX - sliderRef.current!.offsetLeft;
    const walk = (x - startX) * 1.5;
    sliderRef.current!.scrollLeft = scrollLeft - walk;
  };

  const handleEnd = () => setIsDragging(false);

  return (
    <div className="mt-4">
      <div
        ref={sliderRef}
        className="flex cursor-grab gap-2 overflow-x-auto px-4 select-none active:cursor-grabbing sm:px-0"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          WebkitOverflowScrolling: "touch",
        }}
        onMouseDown={(e) => handleStart(e.pageX)}
        onMouseMove={(e) => handleMove(e.pageX)}
        onMouseUp={handleEnd}
        onMouseLeave={handleEnd}
        onTouchStart={(e) => handleStart(e.touches[0].pageX)}
        onTouchMove={(e) => handleMove(e.touches[0].pageX)}
        onTouchEnd={handleEnd}
      >
        {images.map((image, index) => (
          <button
            key={index}
            onClick={(e) => {
              if (isDragging) {
                e.preventDefault();
                return;
              }
              goToSlideAction(index);
            }}
            className={`relative h-12 w-20 flex-shrink-0 cursor-pointer overflow-hidden rounded-lg transition-all duration-300 ${
              currentSlide === index
                ? "border-primary-500 border-2 opacity-100"
                : "opacity-60 hover:opacity-80"
            }`}
          >
            <Image
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className="pointer-events-none h-full w-full object-cover"
              fill
              draggable={false}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </button>
        ))}
      </div>
    </div>
  );
}
