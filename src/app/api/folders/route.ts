import {NextResponse} from "next/server";
import {db} from "@/utils/firestore/config";
export async function GET() {
  try {
    const folders = await db.collection("folders").get()
    return new NextResponse(JSON.stringify({folders: folders.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }))}), {status: 200})

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return new NextResponse(JSON.stringify({message: "Server error try it later", folders: []}), {status: 500});
  }
}