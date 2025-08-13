import * as fs from "node:fs";
import path from "node:path";

import { postgresAdapter } from "@payloadcms/db-postgres";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { s3Storage } from "@payloadcms/storage-s3";
import { en } from "@payloadcms/translations/languages/en";
import { vi } from "@payloadcms/translations/languages/vi";
import { buildConfig } from "payload";

import Category from "@/collections/Category";
import globals from "@/collections/global/index";
import Media from "@/collections/Media";
import Project from "@/collections/Project";
import Users from "@/collections/Users";

export default buildConfig({
  i18n: {
    fallbackLanguage: "en",
    supportedLanguages: { en, vi },
  },
  localization: {
    locales: ["en", "vi"],
    defaultLocale: "en",
  },
  // If you'd like to use Rich Text, pass your editor here
  editor: lexicalEditor(),
  globals,
  collections: [Media, Users, Project, Category],
  secret: process.env.PAYLOAD_SECRET || "",
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI,
      ssl: {
        rejectUnauthorized: false,
        ca: fs.readFileSync(path.resolve(process.cwd(), "ca.pem")).toString(),
      },
    },
  }),
  typescript: {
    outputFile: path.resolve(process.cwd(), "src/payload-types.ts"),
  },
  admin: {
    meta: {
      titleSuffix: "- Pensin Hohenau",
      icons: [
        {
          rel: "icon",
          url: "/icons/favicon.ico",
        },
      ],
    },
    importMap: {
      baseDir: path.resolve(process.cwd(), "src"),
    },
    avatar: {
      Component: "/components/admin/header/Avatar.tsx",
    },
    components: {
      Nav: {
        path: "/components/admin/nav/Nav.tsx",
      },
      graphics: {
        Logo: "/components/admin/common/Logo.tsx",
        Icon: "/components/admin/header/BrandLabel.tsx",
      },
    },
  },
  plugins: [
    s3Storage({
      collections: {
        media: true,
      },
      bucket: process.env.S3_BUCKET || "stevdev",
      config: {
        credentials: {
          accessKeyId: process.env.S3_ACCESS_KEY_ID || "",
          secretAccessKey: process.env.S3_SECRET_ACCESS_KEY || "",
        },
        region: process.env.S3_REGION,
        endpoint: process.env.S3_ENDPOINT,
      },
    }),
  ],
});
