import * as React from 'react'
import { Helmet } from 'react-helmet'
import styled, { createGlobalStyle } from 'styled-components'
import { NordicPalette, fonts } from '../styles/variables'

const IndexPage = () => (
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Charlottebrf.dev</title>
      <link rel="icon" type="image/png" sizes="32x32" href="https://themes.gohugo.io//theme/hallo-hugo/favicon-32x32.png" />
    </Helmet>
    <Main>
      <GlobalStyle />
      <Column left>
        <Portrait src="https://themes.gohugo.io/theme/hallo-hugo/images/portrait.jpg" alt="Portrait" />
      </Column>
      <Column right>
        <Title>Title</Title>
        <SubTitle>Here is a subtitle</SubTitle>
        <Paragraph>Here is some text</Paragraph>
      </Column>
    </Main>
  </>
)

const Portrait = styled.img`
  box-sizing: border-box;
  border-radius: 50%;
  border: 10px solid ${NordicPalette.snowStorm.white};
  margin: 2em 3em;
  width: 100%;
  height: auto;
  max-width: 300px;
  max-height: 300px;
`

const GlobalStyle = createGlobalStyle`
  body { 
  background-color: ${NordicPalette.frost.teal};
  font-family: ${fonts.sansSerif};
  font-size: 16px
  }
`

const Main = styled.main`
  display: flex;
  margin-top: 20vh;
`

const Column = styled.div`
  flex: 1;
  text-align: ${props => (props.left ? 'end' : 'start')};
`

const Title = styled.h1`
  color: ${NordicPalette.snowStorm.white};
  display: block;
  font-size: 144px;
  font-weight: bold;
  margin-block-start: 0.67em;
  margin-block-end: 0.67em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}
`

const SubTitle = styled.h2`
  color: ${NordicPalette.snowStorm.white};
  display: block;
  font-size: 48px;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
`

const Paragraph = styled.p`
  color: ${NordicPalette.snowStorm.grey};
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
`

export default IndexPage
