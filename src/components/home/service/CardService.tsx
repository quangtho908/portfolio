import Image from "next/image";

type Props = {
  title: string;
  description: string;
  icon: string;
};

export default function CardService({ title, description, icon }: Props) {
  return (
    <div className="group flex flex-col items-center rounded-2xl border border-gray-700/50 bg-black/20 p-8 backdrop-blur-sm transition-all duration-500 hover:bg-black/30">
      {/* Circular Progress Background */}
      <div className="relative w-fit">
        <div className="absolute top-0 left-0 h-20 w-20 opacity-30">
          <svg
            className="h-full w-full -rotate-90 transform"
            viewBox="0 0 100 100"
          >
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="#374151"
              strokeWidth="2"
            />
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="#F35B22"
              strokeWidth="2"
              strokeDasharray="283"
              strokeDashoffset="70"
              className="group-hover:strokeDashoffset-0 transition-all duration-1000"
            />
          </svg>
        </div>

        {/* Icon */}
        <div className="relative z-10 mb-8">
          <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-white">
            <Image src={icon} alt={"stevdev service"} width={35} height={35} />
          </div>
        </div>
      </div>

      <h3 className="mb-4 text-center text-2xl font-bold text-white">
        {title}
      </h3>
      <p className="mb-8 text-center leading-relaxed text-gray-300">
        {description}
      </p>

      {/* <AppButton title={'Read more'} icon={<ArrowRight size={20}/>}/> */}
    </div>
  );
}
