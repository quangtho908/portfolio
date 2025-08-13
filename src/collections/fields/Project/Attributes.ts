import type { Field } from "payload";

const Attributes: Field[] = [
  {
    name: "duration",
    type: "text",
  },
  {
    name: "role",
    type: "text",
  },
  {
    name: "techStacks",
    type: "array",
    fields: [
      {
        name: "stack",
        type: "text",
      },
    ],
  },
];

export default Attributes;
