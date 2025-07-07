import {ReactElement} from "react";

type Props = {
  title: string;
  description: string;
  icon: ReactElement
}

export default function CardService({ title, description, icon }: Props) {
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
            {icon}
          </div>
        </div>
      </div>

      <h3 className="text-2xl font-bold text-white mb-4 text-center">{title}</h3>
      <p className="text-gray-300 leading-relaxed mb-8 text-center">
        {description}
      </p>

      {/*<AppButton title={'Read more'} icon={<ArrowRight size={20}/>}/>*/}
    </div>
  )
}