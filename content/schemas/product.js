export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: Rule => Rule.required(),
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      title: 'Variants',
      name: 'variants',
      type: 'array',
      validation: Rule => Rule.required().min(1),
      of: [
        {
          title: 'Variant',
          type: 'productVariant'
        }
      ]
    },
    {
      title: 'Variation Type',
      name: 'variant_type',
      type: 'string',
      description: 'Sizes, Colors, etc',
    },
    {
      title: 'Tags',
      name: 'tags',
      type: 'array',
      of: [
        {
          type: 'string'
        }
      ],
      options: {
        layout: 'tags'
      }
    },
    {
      name: 'blurb',
      title: 'Blurb',
      type: 'localeString',
      validation: Rule => Rule.required()
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: {type: 'category'}
        }
      ]
    },
    {
      name: 'body',
      title: 'Body',
      type: 'localeBlockContent',
      validation: Rule => Rule.required()
    }
  ],

  preview: {
    select: {
      title: 'title',
      manufactor: 'manufactor.title',
      media: 'defaultProductVariant.images[0]'
    }
  }
}
