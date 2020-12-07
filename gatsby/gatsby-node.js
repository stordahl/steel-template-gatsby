const path = require(`path`);

async function TurnProductsIntoPages({ graphql, actions }) {
  const product = path.resolve(`./src/templates/Product.js`)
  const { createPage } = actions

  const { data }= await graphql(`
    query {
       products: allSanityProduct {
         nodes {
           title
           slug {
             current
           }
           id
         }
       }
     }
  `);

  data.products.nodes.forEach(prod => 
    createPage({
        path: 'products/' + prod.slug.current,
        component: product,
        context: {
          slug: prod.slug.current,
        },
      })
  )
}

async function TurnCategoriesIntoPages({ graphql, actions }) {
  const category = path.resolve(`./src/pages/index.js`)
  const { createPage } = actions

  const { data } = await graphql(`
    query {
      categories: allSanityCategory {
        nodes {
             title
             slug {
               current
             }
             id
        }
      }
    }
  `);

  data.categories.nodes.forEach(cat => 
    createPage({
        path: 'category/' + cat.slug.current,
        component: category,
        context: {
          category: cat.title,
          slug: cat.slug.current,
        },
      })
  )
}

exports.createPages = async (params) => {
  await Promise.all([
    TurnProductsIntoPages(params),
    TurnCategoriesIntoPages(params),
  ])
};
