import {NextRequest, NextResponse} from "next/server";
import {db} from "@/utils/firestore/config";
import _ from "lodash";

export async function GET(
  req: NextRequest
) {
  try {
    const searchParams = req.nextUrl.searchParams
    const limit = parseInt(searchParams.get("limit") || "20");
    const folderId = searchParams.get("folderId");
    let query = db.collection("projects").limit(limit);
    if(folderId) {
      const folder = db.doc(`/folders/${folderId}`)
      query = query.where("folder", "==", folder);
    }
    const projects = await query
      .get()
    return new NextResponse(JSON.stringify({projects: projects.docs.map((doc) => ({
        id: doc.id,
        ..._.omit(doc.data(), "folder"),
      }))}), {status: 200})

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return new NextResponse(JSON.stringify({message: "Server error try it later", projects: []}), {status: 500});
  }
}