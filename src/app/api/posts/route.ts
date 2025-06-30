import {NextRequest, NextResponse} from "next/server";
import clickup from "@api/clickup";

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
    clickup.auth(apiKey);

    const filterByFolder = !folderId ? {} : {
      parent_id: folderId,
      parent_type: 'FOLDER'
    }

    const { data } = await clickup.searchDocs({
      deleted: false,
      archived: false,
      ...filterByFolder,
      limit: 50,
      workspaceId: parseInt(workspaceId)
    })

    return new NextResponse(JSON.stringify(data), {status: 200})

  } catch (error) {
    return new NextResponse(JSON.stringify({message: "Server error try it later"}), {status: 500});
  }
}