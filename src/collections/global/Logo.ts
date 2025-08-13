import type { GlobalConfig } from "payload";

import { anyone } from "../access/anyone";
import { authenticated } from "../access/authenticated";
import groups from "../group";

const Logo: GlobalConfig = {
  slug: "logo",
  label: "Logo",
  access: {
    read: anyone,
    update: authenticated,
  },
  admin: {
    group: groups.systems,
  },
  fields: [
    {
      type: "tabs",
      tabs: [
        {
          label: "Logo",
          fields: [
            {
              name: "darkLogo",
              label: "Dark Logo",
              type: "upload",
              relationTo: "media",
              required: true,
            },
            {
              name: "lightLogo",
              label: "Light Logo",
              type: "upload",
              relationTo: "media",
              required: true,
            },
          ],
        },
        {
          label: "Brand Label",
          fields: [
            {
              name: "darkLabel",
              label: "Dark Label",
              type: "upload",
              relationTo: "media",
              required: true,
            },
            {
              name: "lightLabel",
              label: "Light Label",
              type: "upload",
              relationTo: "media",
              required: true,
            },
          ],
        },
      ],
    },
  ],
};

export default Logo;
