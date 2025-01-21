import { TrolleyIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const productType = defineType({
  name: "product",
  title: "Products",
  type: "document",
  icon: TrolleyIcon,
  fields: [
    defineField({
      name: "name",
      title: "Product Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Product Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "string",
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "number",
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: "discount",
      title: "Discount",
      type: "number",
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "reference", to: { type: "category" } }],
    }),
    defineField({
      name: "stock",
      title: "Stock",
      type: "number",
      validation: (Rule) => Rule.min(0),
    }),
    
    // Create a field for product type (Clothes or Shoes)
    defineField({
      name: "productType",
      title: "Product Type",
      type: "string",
      options: {
        list: [
          { title: "Clothes", value: "clothes" },
          { title: "Shoes", value: "shoes" },
          { title: "Accessories", value: "accessories" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),

    // Conditionally show sizes based on the product type (Clothes or Shoes)
    defineField({
      name: "clothesSizes",
      title: "Clothes Sizes",
      type: "array",
      of: [{ type: "string" }],
      hidden: ({ document }) => document?.productType !== "clothes",
      options: {
        list: [
          { title: "Small", value: "small" },
          { title: "Medium", value: "medium" },
          { title: "Large", value: "large" },
        ],
      },
    }),

    defineField({
      name: "shoeSizes",
      title: "Shoe Sizes",
      type: "array",
      of: [{ type: "string" }],
      hidden: ({ document }) => document?.productType !== "shoes",
      options: {
        list: [
          { title: "7", value: "7" },
          { title: "8", value: "8" },
          { title: "9", value: "9" },
          { title: "10", value: "10" },
        ],
      },
    }),

    defineField({
      name: "status",
      title: "Product Status",
      type: "string",
      options: {
        list: [
          { title: "New Arrival", value: "new" },
          { title: "Trending", value: "trending" },
          { title: "Just In", value: "justin" },
        ],
      },
    }),

    defineField({
      name: "color",
      title: "Color",
      type: "string",
      options: {
        list: [
          { title: "Red", value: "red" },
          { title: "Blue", value: "blue" },
          { title: "Green", value: "green" },
          { title: "Black", value: "black" },
          { title: "Pink", value: "pink" },
          { title: "White", value: "white" },
          { title: "Brown", value: "brown" },
          { title: "Orange", value: "orange" },
          { title: "Gray", value: "gray" }
        ],
      },
    }),
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
      subtitle: "price",
    },
    prepare(selection) {
      return {
        title: selection.title,
        subtitle: `$${selection.subtitle}`,
        media: selection.media,
      };
    },
  },
});
