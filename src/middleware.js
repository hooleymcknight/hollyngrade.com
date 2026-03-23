import { NextRequest, NextResponse } from "next/server";

export function middleware (request) {
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set('hg-pathname', request.nextUrl.pathname);

    return NextResponse.next({
        request: {
            headers: requestHeaders,
        }
    });
}