/** @type {import('next').NextConfig} */

// El Content-Security-Policy se define en middleware.ts (necesita un nonce por
// request para no bloquear los scripts inline de hidratación de Next).
const securityHeaders = [
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
];

const nextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  // Imágenes de preview: locales (/public) sin config; remotas solo desde
  // hosts permitidos por el CSP. Agrega más patrones si usas otro origen.
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
  // Ancla el tracing a esta carpeta (evita inferir un lockfile padre).
  outputFileTracingRoot: import.meta.dirname,
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
