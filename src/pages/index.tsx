import * as React from 'react'

import styled, { createGlobalStyle } from 'styled-components'
import { colors } from '../styles/variables'

const IndexPage = () => (
  <Main>
    <GlobalStyle />
    <Title>Hi people</Title>
    <Column left>
      <Portrait src="https://themes.gohugo.io/theme/hallo-hugo/images/portrait.jpg" alt="Portrait" />
    </Column>
    <Column right>
      <Font>Welcome to your new Gatsby site.</Font>
    </Column>
  </Main>
)

const Portrait = styled.img`
  box-sizing: border-box;
  border-radius: 50%;
  border: 10px solid #fff;
  margin: 2em 3em;
  width: 100%;
  height: auto;
  max-width: 300px;
  max-height: 300px;
`

const GlobalStyle = createGlobalStyle`
  body { 
  background-color: ${colors.nordic.teal};
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
  color: ${colors.nordic.darkBlue};
`

const Font = styled.p`
  font-family: Montserrat, sans-serif;
  flex-wrap: wrap;
`

export default IndexPage
