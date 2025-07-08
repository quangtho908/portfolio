'use client'

import {useEffect, useRef, useState} from "react";
import {useProjectStore} from "@/store/projects/projectsStore";
import AppButton from "@/component/common/AppButton";

type Props = {
  folders: Folder[]
}

export default function ListFolders({folders}: Props) {
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [currentFolder, setCurrentFolder] = useState("")

  const {filterProjects} = useProjectStore();

  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  // Scroll functions
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    checkScrollButtons();
    filterProjects({folderId: currentFolder})
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', checkScrollButtons);
      window.addEventListener('resize', checkScrollButtons);
      return () => {
        scrollContainer.removeEventListener('scroll', checkScrollButtons);
        window.removeEventListener('resize', checkScrollButtons);
      };
    }
  }, []);

  return (
    <div className="w-full max-w-7xl mx-auto p-6">
      <div className="relative">
        {/* Scroll Left Button */}
        {canScrollLeft && (
          <button
            onClick={scrollLeft}
            className="cursor-pointer absolute left-0 top-0 bottom-0 my-auto w-fit h-fit z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors"
          >
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/>
            </svg>
          </button>
        )}

        {/* Scrollable Tabs Container */}
        <div
          ref={scrollContainerRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide"
          style={{scrollbarWidth: 'none', msOverflowStyle: 'none'}}
        >
          <AppButton
            title={"All"}
            pattern={!currentFolder ? "fill" : "outline"}
            onClick={() => {
              filterProjects({folderId: ""})
              setCurrentFolder("")
            }}
          />
          {folders.map((folder) => (
            <AppButton
              title={folder.name}
              key={folder.id}
              onClick={() => {
                filterProjects({folderId: folder.id})
                setCurrentFolder(folder.id)
              }}
              pattern={currentFolder === folder.id ? "fill" : "outline"}
            />
          ))}
        </div>

        {/* Scroll Right Button */}
        {canScrollRight && (
          <button
            onClick={scrollRight}
            className="cursor-pointer absolute right-0 top-0 bottom-0 my-auto w-fit h-fit z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors"
          >
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
            </svg>
          </button>
        )}
      </div>
    </div>
  )
}