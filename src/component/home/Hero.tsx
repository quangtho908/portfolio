import AppButton from "@/component/common/AppButton";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="px-6 pt-16 lg:pt-24">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8 py-12 flex flex-col items-center md:items-start">
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-center md:text-left">
            <span className='text-international-orange-500'>Digital Solutions</span>{' '}
            <span className='text-tapa-500'>That Drive Success</span>
          </h1>

          <p className="text-md md:text-lg leading-relaxed text-tapa-500 text-center md:text-left">
            We believe in the transformative power of digital solutions. Our team of
            experts is dedicated to helping businesses like yours thrive in the fast-
            paced digital landscape. From captivating web design to data-driven
            marketing strategies, we are committed to delivering results that exceed
            expectations.
          </p>

          <div className="flex flex-wrap gap-4 items-center justify-center">
            <AppButton title={"My projects"} />
            <AppButton title={"Contact me"} pattern={"outline"} />
          </div>
        </div>

        {/* Right Illustration */}
        <div className="relative self-end">
          <div className="relative w-full h-96 lg:h-[500px]">
            {/* Main 3D blocks */}
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Central platform */}
              <Image fill src={'/assets/images/hero_section_image.png'} alt={"Professional design & dev website, application"} />
            </div>

            {/* Background decorative elements */}
            <div className="absolute top-8 right-4 w-6 h-6 bg-blue-200 rounded-full opacity-60 animate-ping"></div>
            <div
              className="absolute bottom-12 left-4 w-4 h-4 bg-orange-200 rounded-full opacity-60 animate-ping animation-delay-1000"></div>
            <div className="absolute top-32 left-8 w-8 h-8 bg-yellow-200 rounded-full opacity-40 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}