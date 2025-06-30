import {NextRequest, NextResponse} from "next/server";

export async function GET(
  req: NextRequest
) {
  try {
    const searchParams = req.nextUrl.searchParams
    const apiKey = process.env.CLICKUP_API_KEY;
    const workspaceId = process.env.CLICKUP_WORKSPACE_ID;
    const folderId = searchParams.get("folderId");
    if(!apiKey || !workspaceId) {
      throw new Error("Server error try it later")
    }

    const commonFilter = new URLSearchParams({
      deleted: "false",
      archived: "false",
      limit: "50"
    })

    if(folderId) {
      commonFilter.set("parent_id", folderId);
      commonFilter.set("parent_type", "FOLDER");
    }

    const res = await fetch(
      `https://api.clickup.com/api/v3/workspaces/${workspaceId}/docs?${commonFilter}`, {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: apiKey,
      }
    })

    if(!res.ok) throw new Error("Server error try it later");

    const {docs} = await res.json();

    return new NextResponse(JSON.stringify({docs}), {status: 200})

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return new NextResponse(JSON.stringify({message: "Server error try it later", docs: []}), {status: 500});
  }
}