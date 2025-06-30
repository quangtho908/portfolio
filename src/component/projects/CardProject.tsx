import AppButton from "@/component/common/AppButton";
import {ArrowRight, Zap} from "lucide-react";

type Props = {
  project: Project;
}

export default function CardProject({project}: Props) {
  return (
    <div
      key={project.id}
      className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
    >
      {/* Icon */}
      <div
        className="w-16 h-16 bg-international-orange-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-international-orange-200 transition-colors duration-300">
        <Zap className="w-8 h-8 text-international-orange-500" />
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold text-tapa-800">
        {project.name}
      </h3>

      {/* CTA Button */}
      <AppButton className="mt-5" onClick={() => window.location.href = `/${project.id}`} title={"Details"} icon={<ArrowRight size={20}/>}/>
    </div>
  )
}