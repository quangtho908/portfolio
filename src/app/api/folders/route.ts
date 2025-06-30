import {NextResponse} from "next/server";
import clickup from "@api/clickup";

export async function GET() {
  try {
    const apiKey = process.env.CLICKUP_API_KEY;
    const spaceId = process.env.CLICKUP_SPACE_ID;
    if(!apiKey || !spaceId) {
      throw new Error("Server error try it later")
    }
    clickup.auth(apiKey);
    const { data } = await clickup.getFolders({
      archived: false,
      space_id: parseInt(spaceId),
    })

    return new NextResponse(JSON.stringify(data), {status: 200})

  } catch (error) {
    return new NextResponse(JSON.stringify({message: "Server error try it later"}), {status: 500});
  }
}