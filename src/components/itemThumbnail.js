import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { getGatsbyImageData } from 'gatsby-source-sanity'

import steel from '../steel-config'


const ItemThumbnailStyled = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 20px;
    height: max-content;
    font-family: var(--bodyFont)
`

const Heading = styled.h2`
    font-size: 1.3em;
    padding: 10px;
    font-weight: 900;
    text-align: center;
    width: 100%;
    margin: auto;
`

const LinkStyled = styled(Link)`
    width: 100%;
    box-shadow: none;
    text-decoration: none;
    color: inherit;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const DescStyled = styled.div`
`

const ImgStyled = styled(GatsbyImage)`
    width: 250px;
    height: 250px;
    @media (max-width: 930px) {
        height: 250px;
      }
`

const Price = styled.p`
    padding-bottom: 10px;
    font-size:1.5rem;
`

const itemThumbnail = ({link, image, heading, description, price}) => {

  const imageData = getGatsbyImageData(image, {maxWidth: 600}, steel.sanity);
  
  return (
    <ItemThumbnailStyled>
      <LinkStyled to={link}>
        <ImgStyled image={imageData} alt={description}/>
        <Heading>{heading}</Heading>
      </LinkStyled>
      <DescStyled>
        {description}
      </DescStyled>
      <Price>${price.toFixed(2)}</Price>
    </ItemThumbnailStyled>
  )
}

export default itemThumbnail;