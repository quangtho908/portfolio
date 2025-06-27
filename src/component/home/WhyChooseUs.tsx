const values = [
  {
    title: "Expertise That Drives Results",
    description: "Our team of seasoned professionals brings years of experience and expertise to the table.",
  },
  {
    title: "Tailored Business Solutions",
    description: "We understand that every business is unique. That's why our solutions are customized.",
  },
  {
    title: "Cutting-Edge Web Design",
    description: "Leave a lasting impression on your audience with our top-notch web design services.",
  }
]

export default function WhyChooseUs() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-international-orange-500">What I can help you?</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-4xl mx-auto leading-relaxed">
            Offers a multitude of advantages. Experience increased brand visibility, improved customer engagement, and
            higher ROI. Our tailored solutions are designed to meet your unique business needs, ensuring lasting
            success.
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
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/>
                  </svg>
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