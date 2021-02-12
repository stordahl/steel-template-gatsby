import React from "react";
import styled from "styled-components"
import { Link } from "gatsby";
import Img from "gatsby-image";


const ItemThumbnailStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 20px;
    height: max-content;
    font-family: var(--bodyFont)
`

const Heading = styled.h3`
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

const ImgStyled = styled(Img)`
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

const itemThumbnail = (props) => {
  return (
    <ItemThumbnailStyled>
      <LinkStyled to={props.link}>
        <ImgStyled fluid={props.image} />
        <Heading>{props.heading}</Heading>
      </LinkStyled>
      <DescStyled>
        {props.description}
      </DescStyled>
      <Price>${props.price.toFixed(2)}</Price>
    </ItemThumbnailStyled>
  )
}

export default itemThumbnail;