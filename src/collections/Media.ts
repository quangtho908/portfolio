import type { CollectionConfig } from "payload";

import { anyone } from "@/collections/access/anyone";
import { authenticated } from "@/collections/access/authenticated";
import groups from "@/collections/group";

const generateFileName = (originalName: string): string => {
  const extension = originalName.split(".").pop() || "jpg";
  const timestamp = Date.now();
  const randomString = Math.random().toString(36).substring(2, 8);
  return `img_${timestamp}_${randomString}.${extension}`;
};

const Media: CollectionConfig = {
  slug: "media",
  admin: {
    group: groups.systems,
  },
  upload: {
    disableLocalStorage: true,
    mimeTypes: ["image/*", "video/*"],
  },
  access: {
    read: anyone,
    create: authenticated,
    update: authenticated,
    delete: authenticated,
  },
  fields: [
    {
      name: "alt",
      type: "text",
    },
  ],
};

export default Media;
