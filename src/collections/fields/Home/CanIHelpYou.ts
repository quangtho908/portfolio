import type { Field } from "payload";

const CanIHelpYou: Field = {
  name: "canIHelpYou",
  type: "group",
  label: "Can I Help You",
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
      label: "Description",
      required: false,
      localized: true,
    },
    {
      name: "utilities",
      type: "array",
      label: "List of Utilities",
      fields: [
        {
          name: "name",
          type: "text",
          required: true,
          localized: true,
        },
        {
          name: "desc",
          type: "textarea",
          required: false,
          localized: true,
        },
        {
          name: "icon",
          type: "upload",
          relationTo: "media",
          label: "Add icon",
          required: true,
        },
      ],
    },
  ],
};

export default CanIHelpYou;
