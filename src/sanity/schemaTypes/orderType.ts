import { defineType, defineField } from "sanity";

export const order = defineType({
  name: "order",
  title: "Order",
  type: "document",
  fields: [
    // Products
    defineField({
      name: "products",
      title: "Products",
      type: "array",
      of: [
        defineField({
          name: "product",
          title: "Product",
          type: "object",
          fields: [
            defineField({
              name: "name",
              title: "Product Name",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "quantity",
              title: "Quantity",
              type: "number",
              validation: (Rule) => Rule.required().positive(),
            }),
            defineField({
              name: "totalAmount",
              title: "Total Amount",
              type: "number",
              validation: (Rule) => Rule.required().positive(),
            }),
          ],
        }),
      ],
    }),

    // Customer Details
    defineField({
      name: "customerDetails",
      title: "Customer Details",
      type: "object",
      fields: [
        defineField({
          name: "name",
          title: "Customer Name",
          type: "string",
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "phone",
          title: "Phone Number",
          type: "string",
          validation: (Rule) =>
            Rule.required()
              .regex(/^\+?[1-9]\d{1,14}$/, {
                name: "valid phone number",
              })
              .error("Enter a valid phone number"),
        }),
      ],
    }),

    // Address
    defineField({
      name: "address",
      title: "Address",
      type: "object",
      fields: [
        defineField({
          name: "addressLine1",
          title: "Address Line 1",
          type: "string",
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "city",
          title: "City",
          type: "string",
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "state",
          title: "State",
          type: "string",
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "postalCode",
          title: "Postal Code",
          type: "string",
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "country",
          title: "Country",
          type: "string",
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
  ],
});
