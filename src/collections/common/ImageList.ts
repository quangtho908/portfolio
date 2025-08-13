import type { Field } from "payload";

const ImageList: Field = {
  name: "images",
  label: "Images",
  type: "array",
  fields: [
    {
      name: "image",
      label: "Image",
      type: "upload",
      relationTo: "media",
    },
  ],
};

export default ImageList;
