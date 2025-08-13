"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";

import AppButton from "@/components/common/AppButton";
import type { Project } from "@/payload-types";
import getImageUrl from "@/utils/getImageUrl";

type Props = {
  project: Project;
};

export default function CardProject({ project }: Props) {
  return (
    <div
      key={project.id}
      className="group transform cursor-pointer rounded-2xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
    >
      <div className="relative h-46 w-full">
        <Image
          src={getImageUrl(project.featuredImage || undefined)}
          alt={project.slug}
          style={{ objectFit: "cover" }}
          fill
          className="rounded-t-2xl"
        />
      </div>

      <div className="flex flex-col gap-4 p-5">
        <h3 className="text-lg font-bold">{project.name}</h3>
        <AppButton
          onClick={() => {
            window.location.href = `/${project.slug}`;
          }}
          title={"Details"}
          icon={<ArrowRight size={20} />}
        />
      </div>
    </div>
  );
}
