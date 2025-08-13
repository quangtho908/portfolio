import type { Metadata } from "next";

import ListCategories from "@/components/projects/ListCategories";
import ListProject from "@/components/projects/ListProject";
import type { Category } from "@/payload-types";
import fetchCollectionData from "@/utils/collection_data";

export const metadata: Metadata = {
  title: "STEVDEV | Projects",
  description: `We specialize in crafting modern, high-impact websites and custom 
  applications that help your business stand out and grow. From intuitive UI/UX 
  design to robust backend development, we deliver tailored digital experiences 
  that drive real results. Let us help you turn your ideas into powerful digital 
  products that exceed expectations.`,
};

export const revalidate = 300;

export default async function ProjectsPage() {
  const categories = await fetchCollectionData<Category>("categories");

  return (
    <div>
      <ListCategories categories={categories} />
      <ListProject />
    </div>
  );
}
