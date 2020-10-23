import React from "react";
import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import { GlobalStyle } from '../styles/globalStyle';

import Header from './header';


const PageWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  width: 90%;

`

const MainSection = styled.main`
  margin: 30px 0;
  width: 100%;
`

const FooterStyled = styled.footer`
  width: 100%;
  padding: 20px;
  text-align: center;

  @media (max-width: 600px) {
    text-align: center;
  }
`
const ExternalLink = styled.a`
  color: ${theme.colors.black};
`


class Layout extends React.Component {

  render() {
    const { location, children } = this.props
    // const rootPath = `${__PATH_PREFIX__}/`
    const siteName = "gatsby-snipcart-sanity"

    return (
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <PageWrapper>
            <Header shopName={siteName} />
            <MainSection>{children}</MainSection>
            <FooterStyled>
              <strong>Built with Gatsby by  <ExternalLink href="https://blkcatstudio.com" target="_blank" rel="noopener noreferrer">Black Cat Studio</ExternalLink></strong>
            </FooterStyled>
          </PageWrapper>
        </>
      </ThemeProvider>
    )
  }
}

export default Layout
