import type { Field } from "payload";

import Editor from "@/collections/common/Editor";

const Description: Field = {
  name: "description",
  label: "Description",
  type: "richText",
  localized: true,
  required: true,
  editor: Editor,
};

export default Description;
