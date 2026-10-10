import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Static export: the build produces a plain HTML/CSS/JS site in /out
     that can be hosted on any static host or shared hosting. */
  output: "export",
  /* GitHub Pages project site: https://<user>.github.io/<repo>/ — every
     asset and link is prefixed with this segment. Change if you rename
     the repository or move to a custom domain (then use ""). */
  basePath: "/nur-quran-website",
  /* Creates /privacy/index.html style output so every host serves the links. */
  trailingSlash: true,
  images: {
    /* No image optimizer in a static export — images are already optimized. */
    unoptimized: true,
  },
  reactStrictMode: true,
  poweredByHeader: false,
  outputFileTracingRoot: process.cwd(),
};

export default nextConfig;
