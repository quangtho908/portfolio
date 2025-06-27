import CardService from "@/component/home/service/CardService";

const servicesData = [
  {
    name: "Web Development",
    description: `Our comprehensive range of services includes web design, mobile app development, SEO, social
            media marketing, and more. Whether you're a startup or an established enterprise, our experts will
            craft solutions that drive results.`,
    direction: ''
  },
  {
    name: "Automation Process",
    description: `Our comprehensive range of services includes web design, mobile app development, SEO, social
            media marketing, and more. Whether you're a startup or an established enterprise, our experts will
            craft solutions that drive results.`,
    direction: ''
  }
]

export default function Services() {
  return (
    <section className="py-16 lg:py-24 relative overflow-hidden"
             style={{
               background: 'linear-gradient(135deg, #1a1a1a 0%, #2d1810 50%, #3d2415 100%)'
             }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-tapa-500">Our </span>
            <span className="text-tapa-50">Services</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-4xl mx-auto leading-relaxed">
            Our comprehensive range of services includes web design, mobile app development, SEO, social
            media marketing, and more. Whether you&#39;re a startup or an established enterprise, our experts will
            craft solutions that drive results.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {servicesData.map((service) => (
            <CardService title={service.name} description={service.description} key={service.name} />
          ))}
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 opacity-10">
        <div className="w-full h-full rounded-full"
             style={{background: 'radial-gradient(circle, #F35B22 0%, transparent 70%)'}}></div>
      </div>
      <div className="absolute bottom-0 left-0 w-64 h-64 opacity-10">
        <div className="w-full h-full rounded-full"
             style={{background: 'radial-gradient(circle, #F35B22 0%, transparent 70%)'}}></div>
      </div>
    </section>
  )
}