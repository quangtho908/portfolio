import type { Field } from "payload";

import Editor from "@/collections/common/Editor";

const StoryOfPensionHohenau: Field = {
  name: "storyOfPensionHohenau",
  type: "group",
  label: "Story of Pension Hohenau",
  fields: [
    {
      name: "title",
      label: "Title",
      type: "text",
      required: true,
      localized: true,
    },
    {
      name: "content",
      type: "richText",
      label: "Content",
      required: false,
      localized: true,
      editor: Editor,
    },
    {
      name: "numberCounter",
      label: "Number Counter",
      type: "number",
      required: true,
    },
    {
      name: "gallery",
      type: "upload",
      relationTo: "media",
      label: "Gallery image",
      hasMany: true,
    },
  ],
};

export default StoryOfPensionHohenau;
