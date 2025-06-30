import ListFolders from "@/component/projects/ListFolders";
import ListProject from "@/component/projects/ListProject";

export default async function ProjectsPage () {

  const res = await fetch(`${process.env.NEXT_SERVER_HOST}/api/folders`)
  const {folders} = await res.json();

  return (
    <div>
      <ListFolders folders={folders} />
      <ListProject />
    </div>
  )
}