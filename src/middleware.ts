import { type NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const themePreference = request.cookies.get("theme");
  if (!themePreference) {
    request.cookies.set("theme", "dark");
  }
  response.headers.set("custom-header", "custom-value");
  return response;
}
