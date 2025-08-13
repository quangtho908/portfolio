import type { GlobalConfig } from "payload";

import { authenticated } from "@/collections/access/authenticated";
import groups from "@/collections/group";

const SMTP: GlobalConfig = {
  slug: "smtp",
  label: "SMTP MAIL",
  admin: {
    group: groups.systems,
  },
  access: {
    read: authenticated,
    update: authenticated,
  },
  fields: [
    {
      name: "user",
      label: "User",
      type: "text",
      required: true,
    },
    {
      name: "host",
      label: "Host",
      type: "text",
      required: true,
    },
    {
      name: "port",
      label: "Port",
      type: "number",
      required: true,
    },
    {
      name: "password",
      label: "Password",
      type: "text",
      required: true,
    },
    {
      name: "fromEmail",
      label: "From email",
      type: "email",
      required: true,
    },
    {
      name: "adminEmails",
      label: "Admin Emails",
      type: "array",
      required: true,
      fields: [
        {
          name: "email",
          type: "email",
        },
      ],
    },
  ],
};

export default SMTP;
