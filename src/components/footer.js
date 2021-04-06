import React from "react";
import styled from 'styled-components';

import SocialLinks from './SocialLinks';

const FooterStyled = styled.footer`
  width: 100%;
  padding: 20px;
  text-align: center;
  font-family: var(--bodyFont);
  & > * {
    display: block;
    margin-bottom: 1.2rem;
  }

  @media (max-width: 600px) {
    text-align: center;
  }
`
const ExternalLink = styled.a`
  color: var(--linkColor);
  font-family: var(--linkFont);

  &:hover {
    text-decoration: var(--linkDecorationHover);
  }
`

const Footer = () => {
  return (
    <FooterStyled>
      <SocialLinks />
      <strong>Built by <ExternalLink href="https://stordahl.dev" target="_blank" rel="noopener noreferrer">Jacob Stordahl</ExternalLink></strong>
      <strong>Contribute to this open source project on <ExternalLink href="https://github.com/stordahl/gatsby-snipcart-sanity" target="_blank" rel="noopener noreferrer">Github</ExternalLink></strong>
    </FooterStyled>
  )
}

export default Footer