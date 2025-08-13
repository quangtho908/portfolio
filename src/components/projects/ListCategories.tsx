"use client";

import { useEffect, useRef, useState } from "react";

import AppButton from "@/components/common/AppButton";
import { useLanguage } from "@/context/LanguageContext";
import type { Category } from "@/payload-types";
import { useProjectStore } from "@/store/projects/projectsStore";
import type { PayLoadData } from "@/utils/payloadUtil";

type Props = {
  categories: PayLoadData<Category[]> | undefined;
};

export default function ListCategories({ categories }: Props) {
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [currentCategory, setCurrentCategory] = useState<null | number>(null);
  const { language } = useLanguage();
  const { filterProjects } = useProjectStore();

  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  // Scroll functions
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  useEffect(() => {
    checkScrollButtons();
    filterProjects({ locale: language });
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", checkScrollButtons);
      window.addEventListener("resize", checkScrollButtons);
    }
  }, [language]);

  return (
    <div className="mx-auto w-full max-w-7xl p-6">
      <div className="relative">
        {/* Scroll Left Button */}
        {canScrollLeft && (
          <button
            onClick={scrollLeft}
            className="absolute top-0 bottom-0 left-0 z-10 my-auto h-fit w-fit cursor-pointer rounded-full bg-white p-2 shadow-lg transition-colors hover:bg-gray-50"
          >
            <svg
              className="h-5 w-5 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
        )}

        {/* Scrollable Tabs Container */}
        <div
          ref={scrollContainerRef}
          className="scrollbar-hide flex gap-4 overflow-x-auto"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <AppButton
            title={"All"}
            pattern={!currentCategory ? "fill" : "outline"}
            onClick={() => {
              filterProjects({});
              setCurrentCategory(null);
            }}
          />
          {(categories?.[language] || []).map((category) => (
            <AppButton
              title={category.name}
              key={category.id}
              onClick={() => {
                filterProjects({
                  "where[category][equals]": category.id.toString(),
                });
                setCurrentCategory(category.id);
              }}
              pattern={currentCategory === category.id ? "fill" : "outline"}
            />
          ))}
        </div>

        {/* Scroll Right Button */}
        {canScrollRight && (
          <button
            onClick={scrollRight}
            className="absolute top-0 right-0 bottom-0 z-10 my-auto h-fit w-fit cursor-pointer rounded-full bg-white p-2 shadow-lg transition-colors hover:bg-gray-50"
          >
            <svg
              className="h-5 w-5 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}
