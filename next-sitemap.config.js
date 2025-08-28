import path from "node:path";

/** @type {import('next-sitemap').IConfig} */
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  siteUrl: process.env.NEXT_PUBLIC_DOMAIN
    ? `${process.env.NEXT_PUBLIC_BASE_URL}`
    : "https://quangtho.id.vn/",
  generateRobotsTxt: true,
  trailingSlash: true,
  generateIndexSitemap: false,
  outDir: path.join(`${process.cwd()}/public`),
  // Wherever are your pages stored
  pagesDirectory: path.join(`${process.cwd()}/src/app`),
};
