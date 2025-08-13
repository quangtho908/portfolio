"use client";

import { BriefcaseIcon, Compass, Monitor } from "lucide-react";
import Image from "next/image";

import { useLanguage } from "@/context/LanguageContext";
import type { Home } from "@/payload-types";
import getImageUrl from "@/utils/getImageUrl";
import type { PayLoadData } from "@/utils/payloadUtil";

const values = [
  {
    title: "Proven Expertise",
    description:
      "Leverage years of experience and deep technical knowledge to deliver results that matter.",
    icon: <BriefcaseIcon size={35} className="text-tapa-50" />,
  },
  {
    title: "Customized Strategies",
    description:
      "Every business is unique — that's why my solutions are carefully crafted to fit your goals and challenges.",
    icon: <Compass size={35} className="text-tapa-50" />,
  },
  {
    title: "Impactful Design & Development",
    description:
      "LCreate unforgettable digital experiences that captivate your audience and elevate your brand.",
    icon: <Monitor size={35} className="text-tapa-50" />,
  },
];

export default function WhyChooseUs({
  data,
}: {
  data: PayLoadData<Home> | undefined;
}) {
  const { language } = useLanguage();
  return (
    <section className="bg-gray-50 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-3xl font-bold lg:text-4xl">
            <span className="text-primary-500">
              {data?.[language].canIHelpYou.title}
            </span>
          </h2>
          <p className="mx-auto max-w-4xl text-lg leading-relaxed text-gray-600">
            {data?.[language].canIHelpYou.desc}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-12 md:grid-cols-3">
          {(data?.[language].canIHelpYou.utilities || []).map((utility) => (
            <div key={utility.name} className="group text-center">
              {/* Icon Circle */}
              <div className="relative mx-auto mb-8 h-24 w-24">
                {/* Outer ring */}
                <div className="border-tapa-500 absolute inset-0 rounded-full border-4 opacity-20"></div>
                {/* Inner circle */}
                <div className="bg-primary-500 absolute inset-2 flex items-center justify-center rounded-full transition-all duration-300 group-hover:scale-110">
                  <Image
                    src={getImageUrl(utility.icon)}
                    alt={"stevdev service"}
                    width={35}
                    height={35}
                  />
                </div>
              </div>

              <h3 className="text-tapa-500 mb-4 text-2xl font-bold">
                {utility.name}
              </h3>
              <p className="leading-relaxed text-gray-600">{utility.desc}</p>
            </div>
          ))}
        </div>

        {/* Bottom border line */}
        <div className="mt-16 border-t border-gray-300 pt-8"></div>
      </div>
    </section>
  );
}
