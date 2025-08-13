import type { Field } from "payload";

const Customer: Field = {
  name: "customer",
  label: "Customer",
  type: "group",
  fields: [
    {
      type: "row",
      fields: [
        {
          name: "firstName",
          type: "text",
          required: true,
          label: "First Name",
        },
        {
          name: "surname",
          type: "text",
          required: true,
          label: "Surname",
        },
      ],
    },
    {
      type: "row",
      fields: [
        {
          name: "email",
          type: "email",
          required: true,
          label: "Email",
        },
        {
          name: "phoneNumber",
          type: "text",
          required: true,
          label: "Phone Number",
        },
      ],
    },
    {
      type: "row",
      fields: [
        {
          name: "country",
          type: "text",
          label: "Country",
          required: true,
        },
        {
          name: "houseNumber",
          type: "text",
          label: "House Number",
        },
        {
          name: "street",
          type: "text",
          label: "Street",
        },
      ],
    },
    {
      type: "row",
      fields: [
        {
          name: "city",
          type: "text",
          label: "City",
        },
        {
          name: "postalCode",
          type: "text",
          label: "Postal Code",
        },
      ],
    },
  ],
};

export default Customer;
