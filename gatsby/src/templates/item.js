// This is the template for each programmatically generated item in the shop. It will be populated with data from markdown files in the content folder.

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

// const Dropdown = styled.select`
//   display: block;
//   padding: 10px;
//   margin: 10px 0;
//   background: ${props => props.theme.colors.secondaryAccent};
//   font-weight: 700;
//   border: none;
//   outline: none;
// `

// const DropdownOption = styled.option`
//   padding: 10px;
//   background: ${props => props.theme.colors.secondaryAccent};
//   font-weight: 700;
//   border: none;
//   outline: none;
// `

const BuyButton = styled.button`
  padding: 20px;
  background: ${props => props.theme.colors.secondaryAccent};
  font-weight: 700;
`

export default function SingleItem({ data: { item } }) {
  // TODO: add OPTIONAL variable product functionality 
  // state = {
  //   selected: this.props.data.markdownRemark.frontmatter.customField.values[0].name
  // }

  // setSelected = (value) => {
  //   this.setState({ selected: value })
  // }

  // // create the string required by snipcart to allow price changes based on option chosen
  // createString = (values) => {
  //   return values.map(option => {
  //     const price = option.priceChange >= 0 ? `[+${option.priceChange}]` : `[${option.priceChange}]`
  //     return `${option.name}${price}`
  //   }).join('|')
  // }

  // // calculate price based on option selected for display on item page
  // updatePrice = (basePrice, values) => {
  //   const selectedOption = values.find(option => option.name === this.state.selected)
  //   return (basePrice + selectedOption.priceChange).toFixed(2)

  // }

  
    // const item = this.props.data.markdownRemark
    // const siteTitle = item.site.siteMetadata.title
    console.log(item);

    return (
      <Layout  >
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
              data-item-url={"https://gatsbysnipcartsanity.netlify.app" + item.slug.current} //REPLACE WITH OWN URL
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
