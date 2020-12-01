import React, { Component } from "react";
import styled from "styled-components"
import { Link } from "gatsby";

const HeaderMinorStyled = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0;
`
const ShopName = styled.h1`
    padding: 20px;
    font-family: Heebo, sans-serif;
    font-size: 2rem;
    font-weight: 700;
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
    align-items: flex-end;
    padding: 10px;
    font-weight: bold;
`
class HeaderMinor extends Component {
  state = {
    items: 0
  }

  updateItemTotal = (qty) => {
    this.setState({ items: qty })
  }

  render() {
    return (
      <HeaderMinorStyled>
        <ShopName>
          <LinkStyled to='/'>
            {this.props.shopName}
          </LinkStyled>
        </ShopName>
        <CartSummary className="snipcart-summary">
          <a href="#" className="snipcart-checkout cart"> 
            🛒
          </a>
          <p>{this.state.items} items in cart</p>
        </CartSummary>
      </HeaderMinorStyled>
    )
  }
}

export default HeaderMinor;