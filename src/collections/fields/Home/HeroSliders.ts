import type { Field } from "payload";

const HeroSliders: Field = {
  name: "heroSliders",
  type: "group",
  label: "",
  fields: [
    {
      name: "slide",
      type: "array",
      label: "Hero sliders",
      fields: [
        {
          name: "title",
          type: "text",
          label: "Title",
          required: true,
          localized: true,
        },
        {
          name: "subtitle",
          type: "text",
          label: "Subtitle",
          required: false,
          localized: true,
        },
        {
          name: "background",
          type: "upload",
          relationTo: "media",
          label: "Background Image",
          required: true,
        },
      ],
    },
  ],
};

export default HeroSliders;
