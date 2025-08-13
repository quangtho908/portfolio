import type { CollectionConfig } from "payload";

import { anyone } from "@/collections/access/anyone";
import { authenticated } from "@/collections/access/authenticated";
import {
  Attributes,
  Features,
  GeneralInfo,
  Results,
} from "@/collections/fields/Project";
import groups from "@/collections/group";

const Project: CollectionConfig = {
  slug: "projects",
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
      type: "tabs",
      tabs: [
        {
          label: "General Info",
          fields: GeneralInfo,
        },
        {
          label: "Features",
          fields: [Features],
        },
        {
          label: "Attributes",
          fields: Attributes,
        },
        {
          label: "Results",
          fields: [Results],
        },
      ],
    },
  ],
};

export default Project;
