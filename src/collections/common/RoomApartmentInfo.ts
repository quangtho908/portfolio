import type { Field } from "payload";

const RoomApartmentInfo: Field[] = [
  {
    name: "featuredImage",
    type: "upload",
    label: "Featured Image",
    relationTo: "media",
    required: true,
  },
  {
    type: "row",
    fields: [
      {
        name: "slug",
        label: "Slug",
        type: "text",
        required: true,
      },
      {
        name: "price",
        label: "Price",
        type: "text",
        localized: true,
        required: true,
      },
    ],
  },
  {
    type: "row",
    fields: [
      {
        name: "type",
        label: "Type",
        type: "text",
        localized: true,
      },
      {
        name: "name",
        label: "Name",
        type: "text",
        localized: true,
        required: true,
      },
    ],
  },
  {
    name: "attributes",
    label: "Attributes",
    type: "group",
    fields: [
      {
        type: "row",
        fields: [
          {
            name: "area",
            label: "Area",
            type: "text",
            localized: true,
          },
          {
            name: "numberOfPeoples",
            label: "Number of people",
            type: "text",
            localized: true,
          },
        ],
      },
    ],
  },
];

export default RoomApartmentInfo;
