import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.10.*"],
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              
              // scripts
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://challenges.cloudflare.com https://www.googletagmanager.com https://www.google-analytics.com",

              // network calls
              "connect-src 'self' https://www.google-analytics.com https://challenges.cloudflare.com",

              // frames (turnstile)
              "frame-src 'self' https://challenges.cloudflare.com",

              // images
              "img-src 'self' data: blob: https:",

              // styles
              "style-src 'self' 'unsafe-inline'",

              // fonts
              "font-src 'self' data:",

              // optional
              "object-src 'none'",
            ].join("; "),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
