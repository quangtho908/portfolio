import ListFolders from "@/component/projects/ListFolders";
import ListProject from "@/component/projects/ListProject";
import {Metadata} from "next";

export const metadata: Metadata = {
  title: "STEVDEV | Projects",
  description: `We specialize in crafting modern, high-impact websites and custom 
  applications that help your business stand out and grow. From intuitive UI/UX 
  design to robust backend development, we deliver tailored digital experiences 
  that drive real results. Let us help you turn your ideas into powerful digital 
  products that exceed expectations.`,
}

export default async function ProjectsPage () {

  let folders = []
  try {
    const res = await fetch(`${process.env.NEXT_SERVER_HOST}/api/folders`)
    const data = await res.json();
    folders = data.folders
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {

  }

  return (
    <div>
      <ListFolders folders={folders} />
      <ListProject />
    </div>
  )
}