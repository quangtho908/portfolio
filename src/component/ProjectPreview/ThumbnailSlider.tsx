'use client'

import Image from "next/image";
import {useRef, useState} from "react";

type Props = {
  images: string[],
  goToSlideAction: (index: number) => void,
  currentSlide: number,
}

export default function ThumbnailSlider({ images, goToSlideAction, currentSlide }: Props) {
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
        className="flex gap-2 overflow-x-auto px-4 sm:px-0 cursor-grab active:cursor-grabbing select-none"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          WebkitOverflowScrolling: 'touch'
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
            className={`cursor-pointer relative w-20 h-12 flex-shrink-0 rounded-lg overflow-hidden transition-all duration-300 ${
              currentSlide === index
                ? 'border-2 border-international-orange-500 opacity-100'
                : 'opacity-60 hover:opacity-80'
            }`}
          >
            <Image
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className="w-full h-full object-cover pointer-events-none"
              fill
              draggable={false}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
          </button>
        ))}
      </div>
    </div>
  )
}