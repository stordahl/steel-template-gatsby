import React, { useContext } from 'react'
import { SnipcartContext } from "gatsby-plugin-snipcart-advanced/context";
import styled from 'styled-components'
import { Link } from 'gatsby'
import steel from '../steel-config'

const HeaderStyled = styled.header`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0;
    font-family: var(--bodyFont);
    @media screen and (min-width:600px){
      flex-direction: row;
    }
`
const ShopName = styled.h1`
    padding: 20px;
    font-family: Heebo, sans-serif;
    font-size: 2rem;
    font-weight: 700;
    font-family: var(--headingFont);
    font-size: var(--headingSize);
    color: var(--headingColor);
`
const LinkStyled = styled(Link)`
    box-shadow: none;
    text-decoration: none;
    color: inherit;
`
const CartSummary = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    font-weight: bold;
    @media screen and (min-width: 600px){
      align-items: flex-end;
    }
`

const Header = () => {
  const { state } = useContext(SnipcartContext);
  const { cartQuantity } = state;
    
    return (
      <HeaderStyled>
        <ShopName>
          <LinkStyled to='/'>
            {steel.title}
          </LinkStyled>
        </ShopName>
        <CartSummary className="snipcart-summary">
          <Link to="/" className="snipcart-checkout cart"> 
            <span role="img" aria-label="cart">🛒</span>
          </Link>
          <p>{cartQuantity} items in cart</p>
        </CartSummary>
      </HeaderStyled>
    );
  
}

export default Header