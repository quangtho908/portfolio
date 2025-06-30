'use client'

import CardProject from "@/component/projects/CardProject";
import {useProjectStore} from "@/store/projects/projectsStore";
import _ from "lodash";
import DataLoading from "@/component/common/DataLoading";

export default function ListProject() {

  const {projects, loading} = useProjectStore()

  return (
    <section className="w-full max-w-7xl mx-auto p-6 min-h-screen relative">
      {loading && <DataLoading />}
      {!loading &&
        _.isEmpty(projects) ?
          (<div className="text-center text-xl">Have not project on this domain</div>) :
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {projects.map((project) => (
              <CardProject project={project} key={project.id}/>
            ))}
          </div>
      }
    </section>

  )
}