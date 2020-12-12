import social from "./social";

export default {
    title: 'Site Settings',
    name: 'siteSettings',
    type: 'document',
    fields: [
        {
            title: 'Site Name',
            name: 'siteName',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            title: 'Email',
            name: 'email',
            type: 'string'
        },
        {
            title:'Phone',
            name: 'phone',
            type: 'string'
        },
        {
          title: 'Social Links',
          name: 'socialLinks',
          type: 'array',
          of: [{type: 'social'}]
        }
    ]
}
