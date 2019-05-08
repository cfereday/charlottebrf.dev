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

const PageContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin: 25px 0;
`

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
  border-radius: 5%;
  border: 5px solid ${NordicPalette.snowStorm.white};
  width: 100%;
  height: auto;
  max-width: 500px;
  max-height: 500px;
  vertical-align: middle;
`

const Portfolio = () => (
  <Base>
    <Column right>
      <NavigationLink to="/">Back to Homepage</NavigationLink>
    </Column>
    <PageContainer>
      <ProjectContainer>
        <ImageAndLabelContainer>
          <SnowHeader3>Coder Newbie</SnowHeader3>
          <SnowParagraph> An open source website with free resources to learn to code.</SnowParagraph>
          <SnowParagraph> Written using JavaScript, React, GrapphQL & Gatsby.</SnowParagraph>
          <SnowParagraph>
            See the codebase
            <Links href="https://github.com/charlottebrf/coder-newbie-advice" title="Coder-Newbie">
              {' '}
              here
            </Links>
          </SnowParagraph>
          <BaseProjectImage src={coderNewbie} alt="Coder Newbie" />
        </ImageAndLabelContainer>
      </ProjectContainer>
      <ProjectContainer>
        <ImageAndLabelContainer>
          <SnowHeader3>Flat Rules Engine</SnowHeader3>
          <SnowParagraph> A toy project using Clojure Clara Rules to better understand them</SnowParagraph>
          <SnowParagraph>
            {' '}
            See the codebase
            <Links href="https://github.com/charlottebrf/flat-chores-engine" title="Flat Rules Engine"> here</Links>
          </SnowParagraph>
          <BaseProjectImage src={flatChore} alt="Clara Rules Engine" />
        </ImageAndLabelContainer>
      </ProjectContainer>
      <ProjectContainer>
        <ImageAndLabelContainer>
          <SnowHeader3>Personal Website</SnowHeader3>
          <SnowParagraph>Built using TypeScript, React and Gatsby, a static site</SnowParagraph>
          <SnowParagraph>
            {' '}
            See the codebase
            <Links href="https://github.com/charlottebrf/charlottebrf.dev" title="Charlottebrf">
              {' '}
              here
            </Links>
          </SnowParagraph>
          <BaseProjectImage src={charlotteWebsite} alt="Clara Rules Engine" />
        </ImageAndLabelContainer>
      </ProjectContainer>
      <ProjectContainer>
        <ImageAndLabelContainer>
          <SnowHeader3>Rewriting core functions</SnowHeader3>
          <SnowParagraph>A Clojure experiment in rewriting core functions to better understand them</SnowParagraph>
          <SnowParagraph>
            {' '}
            See the codebase
            <Links href="https://github.com/charlottebrf/writing-my-own-reduce-function" title="Reduce"> here</Links>
          </SnowParagraph>
          <BaseProjectImage src={reduceRewrite} alt="Rewriting reduce" />
        </ImageAndLabelContainer>
      </ProjectContainer>
    </PageContainer>
  </Base>
)

export default Portfolio
