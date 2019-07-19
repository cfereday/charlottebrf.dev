import * as React from 'react'
import styled from 'styled-components'
import { Base } from '../layouts/base'
import coderNewbie from '../media/projects/CoderNewbie.jpg'
import flatChore from '../media/projects/FlatChores.jpg'
import charlotteWebsite from '../media/projects/CharloteWebsite.jpg'
import reduceRewrite from '../media/projects/ReduceRewrite.jpg'
import { Column } from '../components/shared/Main'
import { NavigationLink } from '../components/shared/NavigationLink'
import { NordicPalette } from '../styles/variables'
import { SnowHeader3 } from '../components/shared/Header'
import { SnowParagraph } from '../components/shared/Paragraph'
import { Links } from '../components/shared/Links'
import { PageContainer } from '../components/shared/PageContainer'

const ProjectContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin: 2rem;
`

const ImageAndLabelContainer = styled.div`
  justify-content: center;
  flex-direction: row;
  align-content: center;
  align-items: center;
  margin: 2em 3em;
`

const BaseProjectImage = styled.img`
  box-sizing: border-box;
  border-radius: 30px;
  border: 5px solid ${NordicPalette.snowStorm.white};
  width: 100%;
  height: auto;
  max-width: 500px;
  max-height: 500px;
  vertical-align: middle;
`

interface ProjectInfo {
  title: string
  paragraph: string
  url: string
  image: string
}

const createProject = (info: ProjectInfo) => {
  return (
    <PageContainer>
      <ProjectContainer>
        <ImageAndLabelContainer>
          <SnowHeader3>{info.title}</SnowHeader3>
          <SnowParagraph>{info.paragraph}</SnowParagraph>
          <SnowParagraph>
            {'See the codebase'}
            <Links href={info.url} title={info.title}>
              {' '}
              {'here'}
            </Links>
          </SnowParagraph>
          <BaseProjectImage src={info.image} alt={info.title} />
        </ImageAndLabelContainer>
      </ProjectContainer>
    </PageContainer>
  )
}

const Portfolio = () => (
  <Base>
    <div>
      <Column right>
        <NavigationLink to="/">Back to Homepage</NavigationLink>
      </Column>
      <PageContainer>
        {createProject({
          paragraph: 'An open source website with free resources to learn to code.',
          url: 'https://github.com/charlottebrf/coder-newbie-advice',
          title: 'Coder Newbie',
          image: coderNewbie
        })}
        <ProjectContainer>
          {createProject({
            paragraph: 'A toy project using Clojure Clara Rules to best understand Clara.',
            url: 'https://github.com/charlottebrf/flat-chores-engine',
            title: 'Flat Rules Engine',
            image: flatChore
          })}
        </ProjectContainer>
        <ProjectContainer>
          {createProject({
            paragraph: 'Built using TypeScript, React and Gatsby, a static site.',
            url: 'https://github.com/charlottebrf/charlottebrf.dev',
            title: 'Personal Website',
            image: charlotteWebsite
          })}
        </ProjectContainer>
        <ProjectContainer>
          {createProject({
            paragraph: 'A Clojure experiment in rewriting core functions to better understand them.',
            url: 'https://github.com/charlottebrf/writing-my-own-reduce-function',
            title: 'Rewriting core functions',
            image: reduceRewrite
          })}
        </ProjectContainer>
      </PageContainer>
    </div>
  </Base>
)

export default Portfolio
