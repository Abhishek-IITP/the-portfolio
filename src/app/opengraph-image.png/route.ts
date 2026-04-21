import { NextResponse } from "next/server";

export function GET(request: Request) {
  const { origin } = new URL(request.url);
  return NextResponse.redirect(`${origin}/preview.png`, 308);
}
