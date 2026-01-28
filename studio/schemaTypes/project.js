// src/sanity/schemas/project.js
export default {
  name: "project",
  title: "Photo Project",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Project Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
        },
      ],
      validation: (Rule) => Rule.required(),
    },
    {
      name: "gallery",
      title: "Gallery Images",
      type: "array",
      of: [
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            { name: "alt", type: "string", title: "Alt Text" },
            { name: "caption", type: "string", title: "Caption" },
          ],
        },
      ],
    },
    {
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Portrait", value: "portrait" },
          { title: "Wedding", value: "wedding" },
          { title: "Commercial", value: "commercial" },
          { title: "Editorial", value: "editorial" },
          { title: "Fine Art", value: "fineart" },
          { title: "Nature", value: "nature" },
        ],
        layout: "dropdown",
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "date",
      title: "Project Date",
      type: "date",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "location",
      title: "Location",
      type: "string",
    },
    {
      name: "client",
      title: "Client",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
    },
    {
      name: "featured",
      title: "Featured",
      type: "boolean",
      initialValue: false,
    },
    {
      name: "order",
      title: "Order",
      type: "number",
      description: "Lower numbers appear first",
    },
  ],
  preview: {
    select: {
      title: "title",
      category: "category",
      media: "coverImage",
    },
    prepare(selection) {
      const { title, category, media } = selection;
      return {
        title: title,
        subtitle: category.charAt(0).toUpperCase() + category.slice(1),
        media: media,
      };
    },
  },
};
