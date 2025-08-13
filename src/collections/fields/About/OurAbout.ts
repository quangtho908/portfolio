import type { Field } from "payload";

const OurAbout: Field = {
  name: "aboutUs",
  type: "group",
  label: "About Us",
  fields: [
    {
      name: "titleOurAbout",
      type: "text",
      label: "Title",
      required: true,
      localized: true,
    },
    {
      name: "descOurAbout",
      type: "textarea",
      label: "Content",
      required: false,
      localized: true,
    },
    {
      name: "slideOurAbout",
      type: "array",
      label: "Slides",
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
          required: true,
          localized: true,
        },
        {
          name: "image",
          type: "upload",
          relationTo: "media",
          label: "Add image",
          required: true,
        },
      ],
    },
  ],
};

export default OurAbout;
