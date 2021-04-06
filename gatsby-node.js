const path = require(`path`);

const TurnProductsIntoPages = async ({ graphql, actions }) => {
  const product = path.resolve(`./src/templates/Product.js`)
  const { createPage } = actions

  const { data: { products: { nodes } } } = await graphql(`
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

  for (node of nodes){ 
    createPage({
        path: '/' + node.slug.current,
        component: product,
        context: {
          slug: node.slug.current,
        },
      })
  }
}

const TurnCategoriesIntoPages = async ({ graphql, actions }) => {
  const category = path.resolve(`./src/pages/index.js`)
  const { createPage } = actions

  const { data: { categories: { nodes } } } = await graphql(`
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

  for (node of nodes){
    createPage({
        path: '/' + node.slug.current,
        component: category,
        context: {
          category: node.title,
          slug: node.slug.current,
        },
      })
  }
    
  
}

exports.createPages = async (params) => {
  await Promise.all([
    TurnProductsIntoPages(params),
    TurnCategoriesIntoPages(params),
  ])
};
