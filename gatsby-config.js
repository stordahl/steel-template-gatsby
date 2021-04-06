
module.exports = {
  siteMetadata: {
    title: `steel-template-gatsby`,
    //must be the url your frontend is deployed to!!!
    siteUrl: `https://example.com`,
    description: `Steel is a sudo framework for headless ecommerce utilizing Snipcart & Sanity `,
    author: `stordahl`
  },
  plugins: [
    {
      //keep at plugins[0] for steel config
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: `p0qod2z2`,
        dataset: `production`,
        // a token with read permissions is required
        // if you have a private dataset
        token: ``,
        // If the Sanity GraphQL API was deployed using `--tag <name>`,
        // use `graphqlTag` to specify the tag name. Defaults to `default`.
        graphqlTag: `default`,
      },
    },
    {
      //keep at plugins[1] for steel config
      resolve: `gatsby-plugin-snipcart-advanced`,
      options: {
        version: `3.0.29`,
        publicApiKey: `OGQ5ODg5ZmEtMjA1NC00Yjg1LTljYjktZmY0NzAyZTM0ZjUxNjM3NDg3ODI2OTgzMDkxNDUx`,
      }
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-fontawesome-css`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `steel-template-gatsby`,
        short_name: `stg`,
        start_url: `/`,
        background_color: `bg`,
        theme_color: `darkBlue`,
        display: `minimal-ui`,
        icon: `src/assets/gatsby-icon.png`,
      },
    }
  ],
}
