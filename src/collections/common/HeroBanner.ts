import type { Field } from "payload";

const HeroBanner: Field = {
  name: "heroBanner",
  type: "group",
  fields: [
    {
      name: "title",
      type: "text",
      label: "Banner Title",
      required: true,
      localized: true,
    },
    {
      name: "description",
      type: "textarea",
      label: "Description",
      required: false,
      localized: true,
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
      label: "Banner Image",
    },
  ],
};

export default HeroBanner;
