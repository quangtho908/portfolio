"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import IconButton from "@/components/common/IconButton";
import ThumbnailSlider from "@/components/ProjectPreview/ThumbnailSlider";

type Props = {
  images: string[];
};

export default function ImageSlider({ images }: Props) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };
  return (
    <div className="relative mb-8">
      <div className="relative h-96 overflow-hidden rounded-xl bg-gray-100">
        {/* Current Image */}
        <div className="relative h-full w-full">
          <Image
            src={images[currentSlide]}
            alt={`Image ${currentSlide + 1}`}
            className="h-full w-full object-cover transition-opacity duration-500"
            style={{ objectFit: "contain" }}
            fill
          />
          {/* <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div> */}
        </div>

        {/* Navigation Arrows */}

        <div className="absolute top-1/2 left-4 -translate-y-1/2 transform rounded-full bg-white/20 p-2 text-white backdrop-blur-sm transition-colors hover:bg-white/30">
          <IconButton
            onClick={prevSlide}
            icon={<ChevronLeft className="h-6 w-6" />}
          />
        </div>
        <div className="absolute top-1/2 right-4 -translate-y-1/2 transform rounded-full bg-white/20 p-2 text-white backdrop-blur-sm transition-colors hover:bg-white/30">
          <IconButton
            onClick={nextSlide}
            icon={<ChevronRight className="h-6 w-6" />}
          />
        </div>

        {/* Slide Counter */}
        <div className="absolute top-4 right-4 rounded-full bg-black/50 px-3 py-1 text-sm text-white backdrop-blur-sm">
          {currentSlide + 1} / {images.length}
        </div>
      </div>

      {/* Thumbnails */}
      <ThumbnailSlider
        images={images}
        goToSlideAction={goToSlide}
        currentSlide={currentSlide}
      />
    </div>
  );
}
