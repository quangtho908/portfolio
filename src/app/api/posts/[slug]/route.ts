import {NextRequest, NextResponse} from "next/server";
import {db} from "@/utils/firestore/config";
import _ from "lodash";
export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const {slug} = await params
    if(!slug) {
      throw new Error("Server error try it later")
    }

    const project = await db.collection("projects")
      .where("slug", "==", slug)
      .limit(1)
      .get()

    return new NextResponse(JSON.stringify({project: _.omit(project.docs.at(0)?.data(), "folder") || {}}), {status: 200})

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return new NextResponse(JSON.stringify({message: "Server error try it later"}), {status: 500});
  }
}