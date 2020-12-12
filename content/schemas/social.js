export default {
    title: 'Social Link',
    name: 'social',
    type: 'document',
    fields: [
      {
        title: 'Name',
        name: 'name',
        type: 'string',
        validation: Rule => Rule.required()
      },
      {
        title: 'Link',
        name: 'link',
        type: 'string',
        validation: Rule => Rule.required()
      },
      {
        title: 'Icon',
        name: 'icon',
        type: 'string',
        description: 'go to this link to see what icon abreviation to use: https://fontawesome.com/icons?d=gallery&s=brands. You can only use icons from the "brands" collection of Font Awesome',
        validation: Rule => Rule.required()
      }
    ]
}