import type { Field } from "payload";

const Amenities: Field = {
  name: "amenities",
  label: "Amenities",
  type: "array",
  fields: [
    {
      name: "name",
      label: "Name",
      type: "text",
      localized: true,
    },
  ],
};
export default Amenities;
