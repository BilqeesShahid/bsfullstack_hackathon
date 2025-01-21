import { defineType, defineField } from "sanity";
import { TagIcon } from "@sanity/icons";

export const heroType = defineType({
  name: "hero",
  title: "Hero",
  type: "document",
  icon: TagIcon,
  fields: [
    defineField({
      name: "title",
      title: "Hero Title",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Hero Description",
      type: "text",
    }),
    defineField({
      name: "image",
      title: "Hero Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "topSection",
      title: "Top Section Text",
      type: "object",
      fields: [
        defineField({
          name: "heading",
          title: "Heading",
          type: "string",
        }),
        defineField({
          name: "subheading",
          title: "Subheading",
          type: "string",
        }),
      ],
    }),
    defineField({
      name: "descriptionLong",
      title: "Detailed Description",
      type: "text",
    }),
    defineField({
      name: "buttons",
      title: "Buttons",
      type: "array",
      of: [
        {
          type: "object",
          name: "button",
          title: "Button",
          fields: [
            defineField({
              name: "text",
              title: "Button Text",
              type: "string",
            }),
            defineField({
              name: "link",
              title: "Button Link",
              type: "url",
            }),
          ],
        },
      ],
    }),
  ],
});
