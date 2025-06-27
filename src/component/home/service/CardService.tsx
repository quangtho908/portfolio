import AppButton from "@/component/common/AppButton";
import {ArrowRight} from "lucide-react";

type Props = {
  title: string;
  description: string;
}

export default function CardService({ title, description }: Props) {
  return (
    <div
      className="flex flex-col items-center group bg-black/20 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:bg-black/30 transition-all duration-500">
      {/* Circular Progress Background */}
      <div className="w-fit relative">
        <div className="absolute top-0 left-0 w-20 h-20 opacity-30">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" fill="none" stroke="#374151" strokeWidth="2"/>
            <circle cx="50" cy="50" r="45" fill="none" stroke="#F35B22" strokeWidth="2"
                    strokeDasharray="283" strokeDashoffset="70"
                    className="transition-all duration-1000 group-hover:strokeDashoffset-0"/>
          </svg>
        </div>

        {/* Icon */}
        <div className="relative z-10 mb-8">
          <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center mb-6">
            <svg className="w-8 h-8 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
          </div>
        </div>
      </div>

      <h3 className="text-2xl font-bold text-white mb-4 text-center">{title}</h3>
      <p className="text-gray-300 leading-relaxed mb-8 text-center">
        {description}
      </p>

      <AppButton title={'Read more'} icon={<ArrowRight size={20}/>}/>
    </div>
  )
}