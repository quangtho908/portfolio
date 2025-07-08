'use client'
import {useEffect, useState} from "react";
import {ChevronLeft, ChevronRight} from "lucide-react";
import AppButton from "@/component/common/AppButton";
import IconButton from "@/component/common/IconButton";
import CardProject from "@/component/projects/CardProject";

type Props = {
  projects: Project[];
}

export default function Projects({projects}: Props) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getItemsPerSlide = () => {
    if (windowWidth < 768) return 1; // md breakpoint
    if (windowWidth < 1024) return 2; // lg breakpoint
    return 3;
  };

  const itemsPerSlide = getItemsPerSlide();
  const totalSlides = Math.ceil(projects.length / itemsPerSlide);


  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const getCurrentProjects = () => {
    const start = currentSlide * itemsPerSlide;
    return projects.slice(start, start + itemsPerSlide);
  };
  return (
    <section id="projects" className="min-h-screen bg-gradient-to-br from-tapa-50 to-tapa-100 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-tapa-800 mb-6">
            Some Projects
          </h2>
          <p className="text-lg text-tapa-600 max-w-4xl mx-auto leading-relaxed mb-8">
            Witness the brilliance of our previous projects. Our portfolio showcases the successful collaborations
            we&#39;ve had with diverse clients across various industries. Let our work speak for itself.
          </p>
          <AppButton onClick={() =>  window.location.href = "/projects"} title={"View all projects"} />
        </div>

        {/* Projects Carousel */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {getCurrentProjects().map((project) => (
              <CardProject project={project} key={project.id} />
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center items-center space-x-4">
            <IconButton icon={<ChevronLeft className="w-5 h-5"/>} onClick={prevSlide} disabled={currentSlide === 0} />

            {/* Slide Indicators */}
            <div className="flex space-x-2">
              {Array.from({length: totalSlides}).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`cursor-pointer w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index
                      ? 'bg-international-orange-500 scale-125'
                      : 'bg-tapa-300 hover:bg-tapa-400'
                  }`}
                />
              ))}
            </div>

            <IconButton icon={<ChevronRight className="w-5 h-5"/>} onClick={nextSlide} disabled={currentSlide === totalSlides - 1} />
          </div>
        </div>
      </div>
    </section>
  )
}