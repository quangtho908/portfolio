import type { CollectionConfig } from "payload";

import { anyone } from "@/collections/access/anyone";
import { authenticated } from "@/collections/access/authenticated";
import groups from "@/collections/group";

const Category: CollectionConfig = {
  slug: "categories",
  access: {
    admin: authenticated,
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  admin: {
    group: groups.business,
    useAsTitle: "name",
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
      localized: true,
    },
  ],
};

export default Category;
