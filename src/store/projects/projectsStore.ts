import { create } from "zustand/index";

import type { Project } from "@/payload-types";

type ProjectStore = {
  projects: Project[];
  loading: boolean;
  hasMore: boolean;
  filterProjects: (params: { [key: string]: string }) => Promise<void>;
  clearProjects: () => void;
};

export const useProjectStore = create<ProjectStore>((set) => ({
  projects: [],
  loading: false,
  hasMore: true,
  filterProjects: async (params: { [key: string]: string }) => {
    // const searchParams = new URLSearchParams(params);
    set({ loading: true });
    const res = await fetch(`/api/projects?${new URLSearchParams(params)}`);
    const { docs } = await res.json();
    set({ projects: docs || [], loading: false });
  },
  clearProjects: () => set({ projects: [], hasMore: true }),
}));
