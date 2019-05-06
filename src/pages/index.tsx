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
import Links from '../components/shared/Links'
import Contact from '../components/shared/Contact'

const IndexPage = () => (
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Charlottebrf.dev</title>
      <link rel="icon" type="image/png" sizes="32x32" href="https://themes.gohugo.io//theme/hallo-hugo/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="https://themes.gohugo.io//theme/hallo-hugo/favicon-16x16.png" />
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.8.1/css/regular.css"
        integrity="sha384-FKw7x8fCxuvzBwOJmhTJJsKzBl8dnN9e2R4+pXRfYoHivikuHkzWyhKWDSMcGNK8"
        crossOrigin="anonymous"
      />
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.8.1/css/brands.css"
        integrity="sha384-n9+6/aSqa9lBidZMRCQHTHKJscPq6NW4pCQBiMmHdUCvPN8ZOg2zJJTkC7WIezWv"
        crossOrigin="anonymous"
      />
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.8.1/css/fontawesome.css"
        integrity="sha384-vd1e11sR28tEK9YANUtpIOdjGW14pS87bUBuOIoBILVWLFnS+MCX9T6MMf0VdPGq"
        crossOrigin="anonymous"
      />
    </Helmet>
    <Main>
      <GlobalStyle />
      <Column left>
        <Portrait src={cf} alt="Portrait" />
      </Column>
      <Column right>
        <Title>Charlotte Fereday</Title>
        <SubTitle>Academic turned Developer</SubTitle>
        <Paragraph>
          Full stack Developer at{' '}
          <Links href="https://www.thoughtworks.com/" title="ThoughtWorks">
            ThoughtWorks.
          </Links>
          Working hard to deliver the best quality code.
        </Paragraph>
        <Paragraph>
          Passionate about finding new and innovative ways to make positive social impact through technology, education and open source
          projects.
        </Paragraph>
        <Contact>
          <Links href="https://github.com/charlottebrf" title="Github">
            <i className="fab fa-github" />
          </Links>
          <Links href="https://twitter.com/charlottebrf" title="Twitter">
            <i className="fab fa-twitter" />
          </Links>
          <Links href="https://www.linkedin.com/in/cfereday" title="LinkedIn">
            <i className="fab fa-linkedin-in" />
          </Links>
          <Links href="https://medium.com/@charlottebrf" title="LinkedIn">
            <i className="fab fa-medium" />
          </Links>
        </Contact>
      </Column>
    </Main>
  </>
)

export default IndexPage
