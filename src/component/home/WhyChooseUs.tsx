import {BriefcaseIcon, Compass, Monitor} from "lucide-react";

const values = [
  {
    title: "Proven Expertise",
    description: "Leverage years of experience and deep technical knowledge to deliver results that matter.",
    icon: <BriefcaseIcon size={35} className="text-tapa-50" />,
  },
  {
    title: "Customized Strategies",
    description: "Every business is unique — that's why my solutions are carefully crafted to fit your goals and challenges.",
    icon: <Compass size={35} className="text-tapa-50" />
  },
  {
    title: "Impactful Design & Development",
    description: "LCreate unforgettable digital experiences that captivate your audience and elevate your brand.",
    icon: <Monitor size={35} className="text-tapa-50" />
  }
]

export default function WhyChooseUs() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            <span className="text-international-orange-500">What I can help you?</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-4xl mx-auto leading-relaxed">
            Unlock your brand’s full potential with tailored strategies and creative solutions.
            From boosting your online presence to building powerful digital experiences, I’m here
            to help you achieve lasting growth and measurable impact.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-12">
          {values.map((value) => (
            <div key={value.title} className="text-center group">
              {/* Icon Circle */}
              <div className="relative mx-auto mb-8 w-24 h-24">
                {/* Outer ring */}
                <div className="absolute inset-0 rounded-full border-4 opacity-20 border-tapa-500"></div>
                {/* Inner circle */}
                <div
                  className="absolute bg-international-orange-500 inset-2 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                >
                  {value.icon}
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-4 text-tapa-500">
                {value.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom border line */}
        <div className="mt-16 pt-8 border-t border-gray-300"></div>
      </div>
    </section>
  )
}