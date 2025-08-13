import type { Field } from "payload";

const OurFarm: Field = {
  name: "ourFarm",
  type: "group",
  label: "Our Farm",
  fields: [
    {
      name: "title",
      type: "text",
      label: "Title",
      required: true,
      localized: true,
    },
    {
      name: "desc",
      type: "textarea",
      label: "Content",
      required: false,
      localized: true,
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
      label: "Image of Farm",
      hasMany: true,
      required: true,
      maxRows: 2,
    },
  ],
};

export default OurFarm;
