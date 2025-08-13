import type { Field } from "payload";

const Results: Field = {
  name: "results",
  type: "array",
  fields: [
    {
      name: "result",
      type: "text",
      required: true,
    },
  ],
};

export default Results;
