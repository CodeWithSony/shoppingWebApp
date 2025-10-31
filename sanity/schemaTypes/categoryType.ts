import {defineType, defineField} from 'sanity'
import {TagIcon} from '@sanity/icons'

export const categoryType = defineType({
  title: "category",
  name: "Category",
  type: "document",
  icon: TagIcon,
  fields: [
    defineField({
      name: "title",
      type: "string",
        validation: (Rule) => Rule.required(),

    }),
    defineField({
      name: "slug",
      type: "slug",
      options:{
        source: "title",
        maxLength: 96,
      },
  validation: (Rule) => Rule.required(),
    }),
     defineField({
      name: "description",
      type: "text",

    }),
     defineField({
      name: "range",
      type: "number",
        validation: (Rule) => Rule.required(),

    }),
     defineField({
      name: "feature",
      type: "boolean",
      description: "Starting from",
        validation: (Rule) => Rule.required(),

    }),
     defineField({
      name: "image",
      title: "Category Image",
      type: "image",
        validation: (Rule) => Rule.required(),
        options: {
          hotspot: true,
        },

    }),
  ],
  preview: {
    select: {
      title: "title",
      subTitle: "description",
      media: "image",
    }
  }
}) 
