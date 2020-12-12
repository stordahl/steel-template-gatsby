import React, { useState, useEffect } from "react";
import styled from "styled-components"
import { Link } from "gatsby"

const HeaderMinorStyled = styled.div`
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

function HeaderMinor(props) {
  const [items, updateItems] = useState(0)

  useEffect(() => {
    const count = window.Snipcart.store.getState().cart.items.count
    updateItems(count)
  }, [items]);
  
    return (
      <HeaderMinorStyled>
        <ShopName>
          <LinkStyled to='/'>
            {props.shopName}
          </LinkStyled>
        </ShopName>
        <CartSummary className="snipcart-summary">
          <Link to="/" className="snipcart-checkout cart"> 
            <span role="img" aria-label="cart">🛒</span>
          </Link>
          <p>{items} items in cart</p>
        </CartSummary>
      </HeaderMinorStyled>
    );
  
}

export default HeaderMinor;
