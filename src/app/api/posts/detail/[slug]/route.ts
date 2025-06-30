import {NextRequest, NextResponse} from "next/server";
export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const {slug} = await params
    const apiKey = process.env.CLICKUP_API_KEY;
    const workspaceId = process.env.CLICKUP_WORKSPACE_ID;
    if(!apiKey || !workspaceId || !slug) {
      throw new Error("Server error try it later")
    }

    const res = await fetch(`https://api.clickup.com/api/v3/workspaces/${workspaceId}/docs/${slug}/pages`, {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: apiKey
      }
    })

    if(!res.ok) throw new Error("Server error try it later");

    const data = await res.json();
    return new NextResponse(JSON.stringify(data), {status: 200})

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return new NextResponse(JSON.stringify({message: "Server error try it later"}), {status: 500});
  }
}