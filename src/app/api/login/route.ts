import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { userId } = await request.json();

  if (!userId) {
    return NextResponse.json({ error: "Invalid user ID" }, { status: 400 });
  }

  return NextResponse.json({ id: userId });
}
