import type { Field } from "payload";

const Services: Field = {
  name: "services",
  type: "group",
  label: "Services",
  fields: [
    {
      name: "titleService",
      type: "text",
      label: "Title",
      required: true,
      localized: true,
    },
    {
      name: "descService",
      type: "textarea",
      label: "Description",
      required: false,
      localized: true,
    },
    {
      name: "listService",
      type: "array",
      label: "List of Services",
      fields: [
        {
          name: "name",
          type: "text",
          label: "Service name",
          required: true,
          localized: true,
        },
        {
          name: "desc",
          type: "textarea",
          label: "Service description",
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

export default Services;
