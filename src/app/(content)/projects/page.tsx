import ListFolders from "@/component/projects/ListFolders";
import ListProject from "@/component/projects/ListProject";

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