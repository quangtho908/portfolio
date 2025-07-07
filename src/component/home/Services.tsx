import CardService from "@/component/home/service/CardService";
import {Brush, ChartLine, Laptop, Puzzle, Workflow, Wrench} from "lucide-react";

const servicesData = [
  {
    name: "Web Development",
    description: `We deliver custom web development solutions tailored to your business needs. 
    Using modern technologies, we build fully scalable, high-performance websites or web apps 
    with unique designs and advanced features.`,
    direction: '',
    icon: <Laptop size={35} className="text-international-orange-400" />
  },
  {
    name: "Website by CMS & Builders",
    description: `We build fast, cost-effective websites using popular CMS platforms 
    like WordPress and landing page builders like Ladipage. Perfect for businesses 
    that want to launch quickly without compromising on design or functionality.`,
    direction: '',
    icon: <Puzzle size={35} className="text-international-orange-400" />
  },
  {
    name: "Automation & Plugin Development",
    description: `We build custom automation workflows using tools like n8n and Directus, 
    and develop tailor-made WordPress plugins to fit your exact needs. Perfect for businesses 
    looking to optimize processes, connect systems, and extend functionality easily.`,
    direction: '',
    icon: <Workflow size={35} className="text-international-orange-400" />
  },
  {
    name: "Maintenance & Support",
    description: `We keep your website secure, fast, and up to date with regular maintenance, 
    performance optimization, and technical support.`,
    direction: '',
    icon: <Wrench size={35} className="text-international-orange-400" />
  },
  {
    name: "UI/UX Design",
    description: `We design intuitive, user-centered interfaces that make your product stand out. 
    From wireframes to high-fidelity prototypes, we create seamless and engaging experiences.`,
    direction: '',
    icon: <Brush size={35} className="text-international-orange-400" />
  },
  {
    name: "Digital Strategy & Consulting",
    description: `We help you plan and execute a digital strategy that aligns with your business 
    goals and accelerates growth.`,
    direction: '',
    icon: <ChartLine size={35} className="text-international-orange-400" />

  }
]

export default function Services() {
  return (
    <section id={"services"} className="py-16 lg:py-24 relative overflow-hidden"
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
            <CardService title={service.name} description={service.description} icon={service.icon} key={service.name} />
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