import type { GlobalConfig } from "payload";

import { anyone } from "../access/anyone";
import { authenticated } from "../access/authenticated";
import groups from "../group";

const Contact: GlobalConfig = {
  slug: "contact",
  access: {
    read: anyone,
    update: authenticated,
  },
  admin: {
    group: groups.systems,
  },
  fields: [
    {
      name: "companyName",
      type: "text",
      label: "Company Name",
    },
    {
      name: "email",
      type: "email",
      label: "Contact Email",
    },
    {
      name: "phone",
      type: "text",
      label: "Contact Phone",
    },
    {
      name: "address",
      type: "text",
      label: "Contact Address",
      localized: true,
    },
    {
      name: "mapEmbedCode",
      type: "textarea",
      label: "Map Embed Code",
    },
  ],
};

export default Contact;
