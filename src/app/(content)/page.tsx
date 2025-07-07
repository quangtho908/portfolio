import Hero from "@/component/home/Hero";
import Services from "@/component/home/Services";
import WhyChooseUs from "@/component/home/WhyChooseUs";
import Projects from "@/component/home/Projects";

export default async function Home() {
  let projects: Project[] = [];
  try {
    const req = await fetch(`${process.env.NEXT_SERVER_HOST}/api/posts?${new URLSearchParams({
      limit: "6"
    })}`);

    const data = await req.json();
    projects = data.projects || [];
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    projects = []
  }


  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <Projects projects={projects || []} />
      </main>
    </div>
  );
}
