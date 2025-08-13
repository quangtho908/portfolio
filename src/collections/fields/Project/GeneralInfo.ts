import type { Field } from "payload";

const GeneralInfo: Field[] = [
  {
    name: "slug",
    type: "text",
    required: true,
  },
  {
    name: "url",
    type: "text",
  },
  {
    name: "category",
    type: "relationship",
    relationTo: "categories",
    required: true,
  },
  {
    name: "name",
    type: "text",
    localized: true,
    required: true,
  },
  {
    name: "description",
    type: "textarea",
    localized: true,
    required: true,
  },
  {
    name: "featuredImage",
    type: "upload",
    relationTo: "media",
  },
  {
    name: "images",
    type: "array",
    fields: [
      {
        name: "image",
        type: "upload",
        relationTo: "media",
      },
    ],
  },
];
export default GeneralInfo;
