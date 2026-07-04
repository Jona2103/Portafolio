import { NextResponse, type NextRequest } from "next/server";

/**
 * CSP con nonce por request (patrón oficial Next App Router).
 *
 * El CSP estático anterior usaba `script-src 'self'`, lo que bloqueaba los
 * scripts inline de arranque/hidratación de Next → la app nunca hidrataba y
 * nada interactivo (carrusel, toggle de idioma) funcionaba.
 *
 * Producción: nonce + 'strict-dynamic' (estricto, sin 'unsafe-inline').
 * Desarrollo: se permite 'unsafe-eval'/'unsafe-inline' porque el HMR de Next
 * inyecta scripts que no llevan nonce.
 */
export function middleware(request: NextRequest) {
  const isDev = process.env.NODE_ENV !== "production";
  const nonce = Buffer.from(crypto.randomUUID()).toString("base64");

  const scriptSrc = isDev
    ? "'self' 'unsafe-inline' 'unsafe-eval'"
    : `'self' 'nonce-${nonce}' 'strict-dynamic'`;

  const csp = [
    "default-src 'self'",
    `script-src ${scriptSrc}`,
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data: https://images.unsplash.com",
    "font-src 'self' data:",
    `connect-src 'self'${isDev ? " ws: http:" : ""}`,
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "frame-ancestors 'none'",
    "upgrade-insecure-requests",
  ].join("; ");

  // Next lee el nonce del header CSP en los request headers y lo aplica a sus
  // <script>. Por eso lo seteamos en la request, no solo en la response.
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-nonce", nonce);
  requestHeaders.set("Content-Security-Policy", csp);

  const response = NextResponse.next({ request: { headers: requestHeaders } });
  response.headers.set("Content-Security-Policy", csp);
  return response;
}

export const config = {
  matcher: [
    // Todo excepto assets estáticos (no necesitan CSP dinámico).
    {
      source: "/((?!_next/static|_next/image|favicon.ico|icon.svg).*)",
      missing: [
        { type: "header", key: "next-router-prefetch" },
        { type: "header", key: "purpose", value: "prefetch" },
      ],
    },
  ],
};
