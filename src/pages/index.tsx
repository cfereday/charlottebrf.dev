import * as React from 'react'

import styled from 'styled-components'

const IndexPage = () => (
  <>
    <Title>Hi people</Title>
    <Column>
      <img src="https://themes.gohugo.io/theme/hallo-hugo/images/portrait.jpg" className="portrait" alt="Portrait" />
    </Column>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
  </>
)

const Column = styled.div`
  flex: 1;
  text-align: end;
`

const Title = styled.h1`
  color: red;
`

export default IndexPage
