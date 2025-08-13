import type { Field } from "payload";

const CoreValues: Field = {
  name: "coreValues",
  type: "group",
  label: "Core Values",
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
      label: "Image of value",
      required: true,
    },
    {
      name: "Values",
      type: "array",
      label: "List Values",
      required: true,
      maxRows: 4,
      fields: [
        {
          name: "title",
          label: "Title",
          type: "text",
          required: true,
          localized: true,
        },
        {
          name: "desc",
          label: "Description",
          type: "textarea",
          required: true,
          localized: true,
        },
      ],
    },
  ],
};

export default CoreValues;
