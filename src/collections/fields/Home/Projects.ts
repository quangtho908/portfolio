import type { Field } from "payload";

const Projects: Field = {
  name: "projects",
  type: "group",
  label: "Projects",
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
      label: "Description",
      required: false,
      localized: true,
    },
    {
      name: "projects",
      type: "array",
      label: "List of Projects",
      fields: [
        {
          name: "project",
          type: "relationship",
          relationTo: "projects",
        },
      ],
    },
  ],
};

export default Projects;
