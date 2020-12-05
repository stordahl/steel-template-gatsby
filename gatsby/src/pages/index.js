import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import ItemThumbnail from '../components/itemThumbnail';
import Layout from "../components/layout"
import SEO from "../components/seo"

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
  
    const siteTitle = data.site.siteMetadata.title
    const items = data.prods.nodes

    return (
      <Layout  title={siteTitle}>
        <SEO title="All items" />
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
                key={id}
                link={'products/' + current}
                heading={title}
                image={variants[0].images[0].asset.fluid}
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
  query {
    site {
      siteMetadata {
        title
      }
    }
    prods: allSanityProduct {
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
              assetId
              description
              fluid(maxWidth: 800) {
                src
              }
            }
          }
        }
      }
  }
  }
`
