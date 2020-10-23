const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const item = path.resolve(`./src/templates/item.js`)
  return graphql(
    `
      query {
        allSanityProduct {
          nodes {
            defaultProductVariant {
              price
            }
            title
            slug {
              current
            }
            id
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create item posts pages.
    const posts = result.data.allSanityProduct.nodes

    posts.forEach((post, index) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1].node
      const next = index === 0 ? null : posts[index - 1].node
      createPage({
        path: 'products/' + post.slug.current,
        component: item,
        context: {
          slug: post.slug.current,
          previous,
          next,
        },
      })
    })

    return null
  })
}