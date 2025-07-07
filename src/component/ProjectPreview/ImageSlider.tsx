'use client'

import {useState} from "react";
import Image from "next/image";
import {ChevronLeft, ChevronRight} from "lucide-react";
import IconButton from "@/component/common/IconButton";
import ThumbnailSlider from "@/component/ProjectPreview/ThumbnailSlider";

type Props = {
  project: Project
}

export default function ImageSlider({project}: Props) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % project.images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };
  return (
    <div className="relative mb-8">
      <div className="relative h-96 bg-gray-100 rounded-xl overflow-hidden">
        {/* Current Image */}
        <div className="relative w-full h-full">
          <Image
            src={project.images[currentSlide]}
            alt={`${project.name} - Image ${currentSlide + 1}`}
            className="w-full h-full object-cover transition-opacity duration-500"
            style={{objectFit: "contain"}}
            fill
          />
          {/*<div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>*/}
        </div>

        {/* Navigation Arrows */}

        <div
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-2 rounded-full transition-colors">
          <IconButton
            onClick={prevSlide}
            icon={<ChevronLeft className="w-6 h-6"/>}
          />
        </div>
        <div
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-2 rounded-full transition-colors">
          <IconButton
            onClick={nextSlide}
            icon={<ChevronRight className="w-6 h-6"/>}
          />
        </div>

        {/* Slide Counter */}
        <div
          className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
          {currentSlide + 1} / {project.images.length}
        </div>
      </div>

      {/* Thumbnails */}
      <ThumbnailSlider images={project.images} goToSlideAction={goToSlide} currentSlide={currentSlide} />
    </div>
  )
}