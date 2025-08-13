"use client";

import Image from "next/image";

import AppButton from "@/components/common/AppButton";
import { useLanguage } from "@/context/LanguageContext";
import type { Home } from "@/payload-types";
import type { PayLoadData } from "@/utils/payloadUtil";

export default function Hero({
  data,
}: {
  data: PayLoadData<Home> | undefined;
}) {
  const { language } = useLanguage();
  return (
    <section className="px-6 pt-16 lg:pt-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
        {/* Left Content */}
        <div className="flex flex-col items-center space-y-8 py-12 md:items-start">
          <h1 className="text-center text-3xl leading-tight font-bold md:text-left lg:text-4xl">
            <span className="text-primary-500">
              {data?.[language].heroBanner.title}
            </span>{" "}
          </h1>

          <p className="text-md text-tapa-500 text-center leading-relaxed md:text-left md:text-lg">
            {data?.[language].heroBanner.description}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <AppButton
              onClick={() => {
                window.location.href = "/projects";
              }}
              title={"My projects"}
            />
            <AppButton
              onClick={() => {
                window.location.href = "/contact";
              }}
              title={"Contact me"}
              pattern={"outline"}
            />
          </div>
        </div>

        {/* Right Illustration */}
        <div className="relative self-end">
          <div className="relative h-96 w-full lg:h-[500px]">
            {/* Main 3D blocks */}
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Central platform */}
              <Image
                fill
                src={"/assets/images/hero_section_image.png"}
                alt={"Professional design & dev website, application"}
              />
            </div>

            {/* Background decorative elements */}
            <div className="absolute top-8 right-4 h-6 w-6 animate-ping rounded-full bg-blue-200 opacity-60"></div>
            <div className="animation-delay-1000 absolute bottom-12 left-4 h-4 w-4 animate-ping rounded-full bg-orange-200 opacity-60"></div>
            <div className="absolute top-32 left-8 h-8 w-8 animate-pulse rounded-full bg-yellow-200 opacity-40"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
