import * as React from 'react'
import { Helmet } from 'react-helmet'
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
import Links from '../components/shared/Links'
import Contact from '../components/shared/Contact'

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
        <Title>Charlotte Fereday</Title>
        <SubTitle>Academic turned Developer</SubTitle>
        <Paragraph>Full stack Developer at <Links href="https://www.thoughtworks.com/" title="ThoughtWorks">ThoughtWorks.</Links> Working hard to deliver the best quality code.</Paragraph>
        <Paragraph>Passionate about finding new and innovative ways to make positive social impact through technology, education and open source projects.</Paragraph>
        <Contact>
          <Links href="https://github.com/charlottebrf" title="Github"><FontAwesomeIcon icon={['fab', 'github']} /></Links>
          <Links href="https://twitter.com/charlottebrf" title="Twitter"><FontAwesomeIcon icon={['fab', 'twitter']} /></Links>
          <Links href="https://www.linkedin.com/in/cfereday" title="LinkedIn"><FontAwesomeIcon icon={['fab', 'linkedin']} /></Links>
        </Contact>
      </Column>
    </Main>
  </>
)

export default IndexPage
