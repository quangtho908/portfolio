import type { Field } from "payload";

const HistoryOfStory: Field = {
  name: "historyOfStory",
  type: "group",
  label: "History of Story",
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
      name: "album",
      type: "array",
      label: "Album",
      maxRows: 2,
      fields: [
        {
          name: "image",
          type: "upload",
          relationTo: "media",
          label: "Gallery",
          hasMany: true,
          required: true,
        },
        {
          type: "row",
          fields: [
            {
              name: "numberCounter",
              type: "number",
              label: "Number",
              required: true,
              admin: {
                width: "50%",
              },
            },
            {
              name: "titleCounter",
              type: "text",
              label: "Title",
              required: true,
              localized: true,
              admin: {
                width: "50%",
              },
            },
          ],
        },
      ],
    },
  ],
};

export default HistoryOfStory;
