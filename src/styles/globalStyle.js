import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

   :root{
      /* colors */
      --black: #1F1F1F;
      --white: #FFF;
      --blue:  #2f5fee;

      /* Property declarations */
      --bg: var(--white);
      --shadow: 0px 0px 15px #1f1f1f40;
      --fontColor: var(--black);
      --line-height: 1.2;
      --border: 3px solid var(--fontColor);
      --borderRadius: 5px;

      /* Element properties */
      --headingFont: 'Mukta Mahee', sans-serif;
      --headingColor: var(--fontColor);
      --headingSize: 2rem;

      --subheadingFont: 'Mukta Mahee', sans-serif;
      --subheadingColor: var(--fontColor);
      --subheadingSize: 1.75rem;

      --bodyFont: 'Mukta Mahee', sans-serif;
      --bodyColor: var(--fontColor);
      --bodySize: 1.2rem;

      --linkColor: var(--fontColor);
      --linkDecoration: underline;
      --linkDecorationHover: none;
      --linkFont: var(--bodyFont);
      --linkSize: var(--bodySize); 

      --buttonFill: var(--white);
      --buttonRadius: var(--borderRadius);
      --buttonBorder: var(--border);
      --buttonFont: var(--bodyFont);
      --buttonFontSize: var(--bodySize);
   }

   /* global styles */
   * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
   }

   html, body {
      width: 100vw;
      overflow-x: hidden;
      background: var(--bg);
      color: var(--fontColor);
      font-family: var(--bodyFont);
      font-display: block;
   }
    /* HTML5 display-role reset for older browsers */
   article, aside, details, figcaption, figure, 
   footer, header, hgroup, menu, nav, section {
      display: block;
   }
   body {
      line-height: 1;
   }
   ol, ul {
      list-style: none;
   }
   a {
      text-decoration: var(--linkDecoration);
      color: var(--linkColor);
   }
   a:hover {
      text-decoration: var(--linkDecorationHover);
   }
   p, h1, h2, h3, h4 {
      line-height: 1.5em;
   }
   h1, h2, h3 {
      font-family: var(--headingFont);
      color: var(--headingColor);
   }
   h1 {
      font-size: var(--headingColor);
   }
   h4, h5, h6 {
      font-family: var(--subheadingFont);
      color: var(--subheadingColor);
   }
   h4 {
      font-size: var(--subheadingSize);
   }
   p {
      font-family: var(--bodyFont);
      color: var(--bodyColor);
      font-size: var(--bodySize);
   }
   input {
      outline: none !important;
   }
   button {
      display: inline-block;
      padding: 5px;
      margin: 0;
      text-decoration: none;
      cursor: pointer;
      text-align: center;
      font-family: var(--buttonFont);
      font-size: var(--buttonFontSize);
      font-weight: 700;
      border: var(--buttonBorder);
      border-radius: var(--buttonRadius);
      background: var(--buttonFill);
      color: var(--bodyColor);
   }

   /* Snipcart Cart Theme */
   .snipcart * {
      color: var(--fontColor) !important; /* i'm sorry */
   }

   .snipcart-modal__container, .snipcart-layout.snipcart-modal, .snipcart-layout.snipcart-modal > .snipcart-cart-header, .snipcart-item-list.snipcart-item-list--no-shadow, .snipcart-layout__content > .snipcart-cart__content, .snipcart-cart__footer-col.cart__footer-discount-box.snipcart-cart__actions > .snipcart-discount-box.snipcart__font--secondary.snipcart-cart__discount-box, .snipcart-featured-payment-methods > h3 {
      background: var(--bg);
   }

   .snipcart-item-list > .snipcart-item-line {
      background: var(--bg);
      box-shadow: var(--shadow);
   }
   .snipcart-cart-button.snipcart__font--bold.snipcart__font--secondary.snipcart-cart-button--highlight.snipcart__font--large, 
   .snipcart-cart-button.snipcart__font--bold.snipcart__font--secondary.snipcart-cart__checkout-button.snipcart-cart-button--highlight.snipcart__font--large, .snipcart-discount-box__form-container > button, button.snipcart-discount-box__button.snipcart__font--bold {
      background: var(--buttonFill);
      border-radius: var(--buttonRadius);
      border: var(--buttonBorder);
      font-family: var(--buttonFont);
      font-size: var(--buttonFontSize);
      color: var(--black);
      padding: 16px;
      margin-top: 1rem;
      &:hover {
         transform: rotate(2deg);
      }
   }

   .snipcart-discount-box__form-container {
      flex-direction: column;
      align-items: flex-start !important;
   }

   .snipcart-discount-box__form-container > form {
      box-shadow: var(--shadow);
      border: var(--border);
      border-radius: var(--buttonRadius);
   }
   
   button.snipcart-discount-box__cancel {
      margin-left: 0;
   }
   
   button.snipcart-discount-box__submit {
      color: var(--bodyColor);
      &:hover {
         transform: translateY(-2px);
         color: var(--blue);
      }
   }
   /* payment window */
   .snipcart__box--title > .snipcart__box--badge-highlight {
      background: var(--bg);
      color: var(--bodyColor);
      border: var(--border);
      box-shadow: var(--shadow);
   }
   #snipcart-checkout-step-billing > #snipcart-billing-form {
      box-shadow: var(--shadow);
   }
`