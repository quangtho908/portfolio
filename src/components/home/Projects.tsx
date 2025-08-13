"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

import AppButton from "@/components/common/AppButton";
import IconButton from "@/components/common/IconButton";
import CardProject from "@/components/projects/CardProject";
import { useLanguage } from "@/context/LanguageContext";
import type { Home, Project } from "@/payload-types";
import type { PayLoadData } from "@/utils/payloadUtil";

type Props = {
  data: PayLoadData<Home> | undefined;
};

export default function Projects({ data }: Props) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);
  const { language } = useLanguage();
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getItemsPerSlide = () => {
    if (windowWidth < 768) return 1; // md breakpoint
    if (windowWidth < 1024) return 2; // lg breakpoint
    return 3;
  };

  const itemsPerSlide = getItemsPerSlide();
  const totalSlides = Math.ceil(
    (((data?.[language].projects || []) as Project[]).length || 0) /
      itemsPerSlide
  );

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const getCurrentProjects = () => {
    const start = currentSlide * itemsPerSlide;
    return (
      data?.[language].projects.projects?.slice(start, start + itemsPerSlide) ||
      []
    );
  };
  return (
    <section
      id="projects"
      className="from-tapa-50 to-tapa-100 min-h-screen bg-gradient-to-br px-4 py-16"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="mb-16 flex flex-col items-center text-center">
          <h2 className="text-tapa-800 mb-6 text-3xl font-bold lg:text-4xl">
            {data?.[language].projects.title}
          </h2>
          <p className="text-tapa-600 mx-auto mb-8 max-w-4xl text-lg leading-relaxed">
            {data?.[language].projects.desc}
          </p>
          <AppButton
            onClick={() => {
              window.location.href = "/projects";
            }}
            title={"View all projects"}
          />
        </div>

        {/* Projects Carousel */}
        <div className="relative">
          <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {getCurrentProjects().map(({ project, id }) => (
              <CardProject project={project as Project} key={id} />
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center justify-center space-x-4">
            <IconButton
              icon={<ChevronLeft className="h-5 w-5" />}
              onClick={prevSlide}
              disabled={currentSlide === 0}
            />

            {/* Slide Indicators */}
            <div className="flex space-x-2">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-3 w-3 cursor-pointer rounded-full transition-all duration-300 ${
                    currentSlide === index
                      ? "bg-primary-500 scale-125"
                      : "bg-tapa-300 hover:bg-tapa-400"
                  }`}
                />
              ))}
            </div>

            <IconButton
              icon={<ChevronRight className="h-5 w-5" />}
              onClick={nextSlide}
              disabled={currentSlide === totalSlides - 1}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
