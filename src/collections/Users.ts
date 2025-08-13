import type { CollectionConfig } from "payload";

import { authenticated } from "@/collections/access/authenticated";
import groups from "@/collections/group";

const Users: CollectionConfig = {
  slug: "users",
  access: {
    admin: authenticated,
    create: authenticated,
    delete: authenticated,
    read: authenticated,
    update: authenticated,
  },
  admin: {
    useAsTitle: "name",
    defaultColumns: ["id", "email", "name"],
    group: groups.systems,
  },
  auth: true,
  fields: [
    {
      name: "name",
      type: "text",
    },
  ],
  timestamps: true,
};

export default Users;
