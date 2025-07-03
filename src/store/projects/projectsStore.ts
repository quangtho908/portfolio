import {create} from "zustand/index";

type ProjectStore = {
  projects: Project[];
  loading: boolean;
  hasMore: boolean;
  filterProjects: (params: {[key: string]: string}) => Promise<void>;
  clearProjects: () => void;
};

export const useProjectStore = create<ProjectStore>((set) => ({
  projects: [],
  loading: false,
  hasMore: true,
  filterProjects: async (params: {[key: string]: string}) => {
    // const searchParams = new URLSearchParams(params);
    set({loading: true})
    const res = await fetch(`/api/posts?${new URLSearchParams(params)}`);
    const {projects} = await res.json();
    console.log(projects);
    // const size= parseInt(params["size"] || "20");
    // if(_.isEmpty(params["page"]) || params["page"] === "1") {
    //   set({projects, hasMore: projects.length === size});
    //   return;
    // }
    set({projects: projects || [], loading: false});
  },
  clearProjects: () => set({projects: [], hasMore: true}),
}))