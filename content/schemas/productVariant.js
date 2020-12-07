export default {
  title: 'Product variant',
  name: 'productVariant',
  type: 'object',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Weight in grams',
      name: 'grams',
      type: 'number'
    },
    {
      title: 'Price',
      name: 'price',
      type: 'number',
      validation: Rule => Rule.required()
    },
    {
      title: 'SKU',
      name: 'sku',
      type: 'string'
    },
    {
      title: 'Taxable',
      name: 'taxable',
      type: 'boolean'
    },
    {
      title: 'Digital',
      name: 'digital',
      type: 'boolean',
    },
    {
      title: 'GUID',
      name: 'guid',
      type: 'string',
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true
          }
        }
      ],
      validation: Rule => Rule.required(),
    },
    {
      title: 'Bar code',
      name: 'barcode',
      type: 'barcode'
    }
  ]
}
