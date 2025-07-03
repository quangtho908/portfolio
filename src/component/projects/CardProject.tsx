'use client'
import AppButton from "@/component/common/AppButton";
import {ArrowRight} from "lucide-react";
import Image from "next/image";

type Props = {
  project: Project;
}

export default function CardProject({project}: Props) {
  return (
    <div
      key={project.id}
      className="cursor-pointer bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
    >
      <div className="w-full h-32 relative">
        <Image src={project.featured_image} alt={project.slug} objectFit="cover" fill className="rounded-t-2xl" />
      </div>

      <div className="p-5 flex flex-col gap-4">
        <h3 className="text-lg font-bold">{project.name}</h3>
        <AppButton onClick={() => window.open(`/${project.slug}`,'_blank')} title={"Details"} icon={<ArrowRight size={20}/>}/>

      </div>
    </div>
  )
}