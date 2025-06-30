import {NextResponse} from "next/server";

export async function GET() {
  try {
    const apiKey = process.env.CLICKUP_API_KEY;
    const spaceId = process.env.CLICKUP_SPACE_ID;
    if(!apiKey || !spaceId) {
      throw new Error("Server error try it later")
    }
    const res= await fetch(`https://api.clickup.com/api/v2/space/${spaceId}/folder`, {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: apiKey,
      }
    })
    if(!res.ok) throw new Error("Server error try it later");

    const {folders} = await res.json();

    return new NextResponse(JSON.stringify({folders}), {status: 200})

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return new NextResponse(JSON.stringify({message: "Server error try it later", folders: []}), {status: 500});
  }
}