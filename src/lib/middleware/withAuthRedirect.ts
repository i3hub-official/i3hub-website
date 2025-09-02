import { NextRequest, NextResponse } from "next/server";
import { isAuthPath } from "@/lib/utils/auth-paths";

const SESSION_COOKIE = "session-token";

export function withAuthRedirect(request: NextRequest): NextResponse {
  const pathname = request.nextUrl.pathname;

  if (!isAuthPath(pathname)) {
    return NextResponse.next();
  }

  const token = request.cookies.get(SESSION_COOKIE)?.value;

  if (!token) {
    return NextResponse.next(); // no cookie → allow signin/signup
  }

  // token exists → redirect to dashboard
  return NextResponse.redirect(new URL("/agent/profile", request.url));
}
