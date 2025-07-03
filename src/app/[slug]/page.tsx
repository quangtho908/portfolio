
import {redirect} from "next/navigation";
import PreviewFrame from "@/component/ProjectPreview/PreviewFrame";
type Props = {
  params: Promise<{ slug: string }>
}

export default async function DetailProject({ params }: Props) {
  const {slug} = await params;
  const res = await fetch(`${process.env.NEXT_SERVER_HOST}/api/posts/${slug}`);
  const {project} = await res.json();
  if(!res.ok) {
    redirect("/")
  }

  return (
    <div className="w-full mx-auto">

      <PreviewFrame project={project} />
    </div>
  )
}