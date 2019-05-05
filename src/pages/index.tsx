import * as React from 'react'
import { Helmet } from 'react-helmet'
import cf from '../media/headshot/cf.jpeg'
import Main from '../components/shared/Main'
import Portrait from '../components/shared/Portrait'
import Title from '../components/shared/Title'
import SubTitle from '../components/shared/SubTitle'
import Column from '../components/shared/Column'
import Paragraph from '../components/shared/Paragraph'
import GlobalStyle from '../components/shared/GlobalStyle'

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
        <Portrait src={cf} alt="Portrait" />
      </Column>
      <Column right>
        <Title>Title</Title>
        <SubTitle>Here is a subtitle</SubTitle>
        <Paragraph>Here is some text</Paragraph>
      </Column>
    </Main>
  </>
)

export default IndexPage
