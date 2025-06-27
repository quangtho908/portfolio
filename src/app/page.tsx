import Hero from "@/component/home/Hero";
import Services from "@/component/home/Services";
import WhyChooseUs from "@/component/home/WhyChooseUs";
import Projects from "@/component/home/Projects";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <Projects />
      </main>
    </div>
  );
}
