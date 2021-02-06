import React from 'react'
import styled from 'styled-components'
import { GlobalStyle } from '../styles/globalStyle'

import Header from './header'
import Footer from './footer'

const PageWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
`

const MainSection = styled.main`
  margin: 30px 0;
  width: 100%;
`

class Layout extends React.Component {
  render() {
    const { children } = this.props

    return (
        <>
          <GlobalStyle />
          <PageWrapper>
            <Header/>
            <MainSection>{children}</MainSection>
            <Footer />
          </PageWrapper>
        </>
    )
  }
}

export default Layout
