import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
type Props = {
  params: Promise<{ slug: string }>
}

export default async function DetailProject({ params }: Props) {
  const {slug} = await params;
  const res = await fetch(`${process.env.NEXT_SERVER_HOST}/api/posts/detail/${slug}`);
  const data = await res.json();
  console.log(data)

  return (
    <div className="max-w-7xl mx-auto py-6 px-4">
      <Markdown remarkPlugins={[remarkGfm]} rehypePlugins={[remarkRehype]}>{data[0].content}</Markdown>
    </div>
  )
}