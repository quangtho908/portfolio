import withPayload from "@payloadcms/next/withPayload";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "standalone",
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  images: {
    remotePatterns: [
      new URL("https://pub-cb95bc46a4884ce4bec883bda568a926.r2.dev/**"),
    ],
  },
};

export default withPayload(nextConfig);
