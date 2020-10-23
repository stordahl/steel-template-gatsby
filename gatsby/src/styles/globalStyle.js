import { createGlobalStyle } from 'styled-components'
import { theme } from './theme'

export const GlobalStyle = createGlobalStyle`

    html{
       background: ${theme.colors.bg};
       color: ${theme.colors.black};
    }

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
       margin: 0;
       padding: 0;
       border: 0;
       font-size: 100%;
       font: inherit;
       vertical-align: baseline;
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
    blockquote, q {
       quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
       content: '';
       content: none;
    }
    table {
       border-collapse: collapse;
       border-spacing: 0;
    }


    * {
        box-sizing: border-box;
    }

    body {
      padding: 0;
      margin: 0;
      font-family: 'Mukta Mahee', sans-serif;
      font-display: block;

    }
    a {
      text-decoration: none;
      color: inherit;
    }
    p, h1, h2, h3, h4 {
      line-height: 1.5em;
    }
    button {
      display: inline-block;
      border: none;
      padding: 0;
      margin: 0;
      text-decoration: none;
      cursor: pointer;
      text-align: center;
      font-family: inherit;
      font-size: 1em;
  }
  strong {
     font-weight: bold;
  }
  
`