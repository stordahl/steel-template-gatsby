// This is the template for each programmatically generated item in the shop. It will be populated by our Sanity Project.

import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components"

import Layout from "../components/layout";

const Product = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
  align-items: center;
  & > div{
    margin:1rem;
  }
`

const Heading = styled.h1`
  font-weight: 900;
  font-size: 1.5em;
  margin: 20px 0;
`

const ImgStyled = styled(Img)`
  width: 100%;
  height: 400px;
`

const Price = styled.p`
  margin: 20px 0;
  padding: 10px;
  font-weight: 700;
  font-size: 2rem;
`

const Description = styled.p`
  margin: 20px 0;
  padding: 10px;
`

const BuyButton = styled.button`
  padding: 20px;
  border: 3px solid ${props => props.theme.colors.black};
  background: white;
  font-weight: 700;
  &:hover{
    transform: scale(1.08);
  }
`

export default function SingleItem({ data: { item, site } }) {
  
    const siteTitle = site.siteMetadata.title

    return (
      <Layout location={siteTitle} >
        <Product>
          <div>
            <Heading>{item.title}</Heading>
            <ImgStyled fluid={item.defaultProductVariant.images[0].asset.fluid} />
          </div>
          <div>
            <Price>${item.defaultProductVariant.price}</Price>
            <Description>{item.body.en[0].children[0].text}</Description>

            

            <BuyButton
              className='snipcart-add-item'
              data-item-id={item.id}
              data-item-price={item.defaultProductVariant.price}
              data-item-name={item.title}
              data-item-description={item.blurb.en}
              data-item-image={item.defaultProductVariant.images[0].asset.fluid.src}
              data-item-url={"https://gatsbysnipcartsanity.netlify.app/products/" + item.slug.current} //REPLACE WITH OWN URL
            >
              Add to basket
              </BuyButton>
          </div>
        </Product>
      </Layout>
    )
}

export const pageQuery = graphql`
  query ItemBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    item: sanityProduct(slug: { current: { eq: $slug } }) {
      id
      title
      defaultProductVariant {
        images {
          asset {
            fluid(maxWidth: 800) {
              ...GatsbySanityImageFluid
              src
            }
          }
        }
        price
      }
      slug {
        current
      }
      blurb {
        en
      }
      body {
        en {
          children {
            text
          }
        }
      }
    }
  }
`
