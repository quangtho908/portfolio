import {NextRequest, NextResponse} from "next/server";
import {db} from "@/utils/firestore/config";
import _ from "lodash";

export async function GET(
  req: NextRequest
) {
  try {
    const searchParams = req.nextUrl.searchParams
    const folderId = searchParams.get("folderId");
    const folder = await db.doc(`/folders/${folderId}`).get()
    const projects = await db.collection("projects")
      .where("folder", "==", folder.ref)
      .get()

    return new NextResponse(JSON.stringify({projects: projects.docs.map((doc) => ({
        id: doc.id,
        ..._.omit(doc.data(), "folder"),
      }))}), {status: 200})

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return new NextResponse(JSON.stringify({message: "Server error try it later", docs: []}), {status: 500});
  }
}