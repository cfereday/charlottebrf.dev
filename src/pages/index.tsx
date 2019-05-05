import * as React from 'react'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import cf from '../media/headshot/cf.jpeg'
import Main from '../components/shared/Main'
import Portrait from '../components/shared/Portrait'
import Title from '../components/shared/Title'
import SubTitle from '../components/shared/SubTitle'
import Column from '../components/shared/Column'
import Paragraph from '../components/shared/Paragraph'
import GlobalStyle from '../components/shared/GlobalStyle'
import { NordicPalette } from '../styles/variables'

library.add(faGithub, faTwitter, faLinkedin)

const IndexPage = () => (
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Charlottebrf.dev</title>
      <link rel="icon" type="image/png" sizets="32x32" href="https://themes.gohugo.io//theme/hallo-hugo/favicon-32x32.png" />
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
        <Contact>
          <Links href="https://github.com/charlottebrf" title="Github"><FontAwesomeIcon icon={['fab', 'github']} /></Links>
          <Links href="https://twitter.com/charlottebrf" title="Twitter"><FontAwesomeIcon icon={['fab', 'twitter']} /></Links>
          <Links href="https://www.linkedin.com/in/cfereday" title="LinkedIn"><FontAwesomeIcon icon={['fab', 'linkedin']} /></Links>
        </Contact>
      </Column>
    </Main>
  </>
)


const Links = styled.a`
  transition: color 0.2s ease-out;
  color: ${NordicPalette.snowStorm.white};
  :hover {
    color: ${NordicPalette.frost.darkBlue};
  }
`

const Contact = styled.div`
  margin-top: 2.5rem;
  font-size: 1.5rem;
  cursor: pointer;

  ${Links} {
    margin-right: 1rem;
  }
`

export default IndexPage
