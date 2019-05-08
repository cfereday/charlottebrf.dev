import * as React from 'react'
import cf from '../media/headshot/cf.jpeg'
import { Portrait } from '../components/shared/Portrait'
import { Title } from '../components/shared/Title'
import { SubTitle } from '../components/shared/SubTitle'
import { SnowParagraph } from '../components/shared/Paragraph'
import { Links } from '../components/shared/Links'
import { Column, Main } from '../components/shared/Main'
import { Base } from '../layouts/base'
import Contact from '../components/shared/Contact'
import { NavigationLink } from '../components/shared/NavigationLink'

const IndexPage = () => (
  <Base>
    <Main>
      <Column left>
        <Portrait src={cf} alt="Portrait" />
      </Column>
      <Column right>
        <Title>Charlotte Fereday</Title>
        <SubTitle>Academic turned Developer</SubTitle>
        <NavigationLink to="/profile">Profile</NavigationLink>
        <NavigationLink to="/portfolio">Portfolio</NavigationLink>
        <SnowParagraph>
          Full stack Developer at{' '}
          <Links href="https://www.thoughtworks.com/" title="ThoughtWorks">
            ThoughtWorks.
          </Links>
          Working hard to deliver the best quality code.
        </SnowParagraph>
        <SnowParagraph>
          Passionate about finding new and innovative ways to make positive social impact through technology, education and open source
          projects.
        </SnowParagraph>
        <Contact />
      </Column>
    </Main>
  </Base>
)

export default IndexPage
