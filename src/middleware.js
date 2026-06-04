import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
    // This runs on every matched request that passes `authorized`
    function middleware(req) {
        const requestHeaders = new Headers(req.headers);
        requestHeaders.set('hg-pathname', req.nextUrl.pathname);
        requestHeaders.set('hg-search-params', req.nextUrl.searchParams.toString() || 'no value');

        return NextResponse.next({
            request: { headers: requestHeaders },
        });
    },
    {
        callbacks: {
            // Decides whether to let the request through to the function above.
            // Return true = allowed (function runs). Return false = redirect to sign-in.
            authorized: ({ token, req }) => {
                const { pathname } = req.nextUrl;
                if (pathname.startsWith('/account')) {
                    return !!token;   // protected: require a session
                }
                return true;          // everything else: always allowed
            },
        },
    }
);

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};