import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import CategoriesFilter from '../components/CategoriesFilter'
import ItemThumbnail from '../components/itemThumbnail'
import Layout from "../components/layout"
import Seo from "../components/seo"
import steel from "../steel-config.js"

const ThumbnailsWrapper = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 1rem;
    grid-auto-rows: auto auto 500px;
    padding: 20px;
    margin: 1rem auto;
`

export default function IndexPage({ data }) {
  
    const siteTitle = steel.title
    const items = data.prods.nodes

    return (
      <Layout  title={siteTitle}>
        <Seo title="All items" lang="en"/>
        <CategoriesFilter />
        <ThumbnailsWrapper>
          {items.map(( item ) => {
            const { 
              title, 
              id, 
              slug: { current }, 
              blurb,
              variants, 
            } = item
            return (
              <ItemThumbnail
                node={item}
                key={id}
                link={'/' + current}
                heading={title}
                image={variants[0].images[0].asset.id}
                price={variants[0].price}
                description={blurb.en}
              />
            )
          })}
        </ThumbnailsWrapper>
      </Layout>
    )
  
}

export const pageQuery = graphql`
  query ProdQuery($category: [String]){
    allSite {
      nodes {
        siteMetadata {
          title
        }
      }
    }
    prods: allSanityProduct(
      filter:{ categories: { elemMatch: { title: { in: $category }}}}
    ) {
      nodes {
        blurb {
          en
        }
        title
        slug {
          current
        }
        id
        variants {
          price
          images {
            asset {
              id
            }
          }
        }
      }
  }
  }
`
