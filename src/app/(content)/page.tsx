import Hero from "@/components/home/Hero";
import Projects from "@/components/home/Projects";
import Services from "@/components/home/Services";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import type { Home } from "@/payload-types";
import fetchGlobalData from "@/utils/global_data";

export const revalidate = 300;

export default async function HomePage() {
  const homePageData = await fetchGlobalData<Home>("home");

  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <main>
        <Hero data={homePageData} />
        <Services data={homePageData} />
        <Projects data={homePageData} />
        <WhyChooseUs data={homePageData} />
      </main>
    </div>
  );
}
