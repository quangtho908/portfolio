"use client";

import CardService from "@/components/home/service/CardService";
import { useLanguage } from "@/context/LanguageContext";
import type { Home } from "@/payload-types";
import getImageUrl from "@/utils/getImageUrl";
import type { PayLoadData } from "@/utils/payloadUtil";

export default function Services({
  data,
}: {
  data: PayLoadData<Home> | undefined;
}) {
  const { language } = useLanguage();
  return (
    <section
      id={"services"}
      className="relative overflow-hidden py-16 lg:py-24"
      style={{
        background:
          "linear-gradient(135deg, #1a1a1a 0%, #2d1810 50%, #3d2415 100%)",
      }}
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-3xl font-bold lg:text-4xl">
            <span className="text-tapa-50">
              {data?.[language].services.titleService}
            </span>
          </h2>
          <p className="mx-auto max-w-4xl text-lg leading-relaxed text-gray-300">
            {data?.[language].services.descService}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {(data?.[language].services.listService || []).map((service) => (
            <CardService
              title={service.name}
              description={service.desc || ""}
              icon={getImageUrl(service.icon)}
              key={service.name}
            />
          ))}
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 right-0 h-96 w-96 opacity-10">
        <div
          className="h-full w-full rounded-full"
          style={{
            background: "radial-gradient(circle, #F35B22 0%, transparent 70%)",
          }}
        ></div>
      </div>
      <div className="absolute bottom-0 left-0 h-64 w-64 opacity-10">
        <div
          className="h-full w-full rounded-full"
          style={{
            background: "radial-gradient(circle, #F35B22 0%, transparent 70%)",
          }}
        ></div>
      </div>
    </section>
  );
}
