import {NextRequest, NextResponse} from "next/server";
import clickup from "@api/clickup";

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
    clickup.auth(apiKey);
    const { data } = await clickup.getDocPages({
      docId: slug,
      workspaceId: parseInt(workspaceId),
      content_format: "text/md"
    })

    return new NextResponse(JSON.stringify(data), {status: 200})

  } catch (error) {
    return new NextResponse(JSON.stringify({message: "Server error try it later"}), {status: 500});
  }
}