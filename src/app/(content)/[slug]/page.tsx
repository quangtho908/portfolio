import { redirect } from "next/navigation";

import ProjectDetail from "@/components/projects/ProjectDetail";
import type { Project } from "@/payload-types";
import { findCollectionBySlug } from "@/utils/find_collection";

export const dynamic = "force-dynamic";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function DetailProject({ params }: Props) {
  const { slug } = await params;
  const project = await findCollectionBySlug<Project>(slug, "projects");
  if (!project) {
    redirect("/");
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-6">
      <ProjectDetail project={project} />
    </div>
  );
}
