"use client";

import _ from "lodash";

import DataLoading from "@/components/common/DataLoading";
import CardProject from "@/components/projects/CardProject";
import { useProjectStore } from "@/store/projects/projectsStore";

export default function ListProject() {
  const { projects, loading } = useProjectStore();

  return (
    <section className="relative mx-auto min-h-screen w-full max-w-7xl p-6">
      {loading && <DataLoading />}
      {!loading && _.isEmpty(projects) ? (
        <div className="text-center text-xl">
          Have not project on this domain
        </div>
      ) : (
        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <CardProject project={project} key={project.id} />
          ))}
        </div>
      )}
    </section>
  );
}
