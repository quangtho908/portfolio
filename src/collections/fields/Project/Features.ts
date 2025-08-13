import type { Field } from "payload";

const Features: Field = {
  name: "features",
  type: "array",
  fields: [
    {
      name: "feature",
      type: "text",
      required: true,
    },
  ],
};

export default Features;
