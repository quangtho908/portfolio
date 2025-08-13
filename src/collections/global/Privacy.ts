import type { GlobalConfig } from "payload";

import { anyone } from "@/collections/access/anyone";
import { authenticated } from "@/collections/access/authenticated";
import Editor from "@/collections/common/Editor";
import HeroBanner from "@/collections/common/HeroBanner";
import groups from "@/collections/group";

const Privacy: GlobalConfig = {
  slug: "privacy",
  access: {
    read: anyone,
    update: authenticated,
  },
  admin: {
    group: groups.pages,
  },

  fields: [
    {
      type: "tabs",
      tabs: [
        {
          label: "Hero Banner",
          fields: [HeroBanner],
        },
        {
          label: "Content",
          fields: [
            {
              name: "content",
              label: "Content",
              type: "richText",
              editor: Editor,
            },
          ],
        },
      ],
    },
  ],
};

export default Privacy;
