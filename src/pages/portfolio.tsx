import * as React from 'react'
import { Base } from '../layouts/base'
import coderNewbie from '../media/projects/CoderNewbie.jpg'
import flatChore from '../media/projects/FlatChores.jpg'
import charlotteWebsite from '../media/projects/CharloteWebsite.jpg'
import reduceRewrite from '../media/projects/ReduceRewrite.jpg'
import { Column } from '../components/shared/Main'
import { NavigationLink } from '../components/shared/NavigationLink'
import { ProjectContainer, PageContainerCentre } from '../components/shared/Containers'
import { Project } from '../components/shared/Project'

const Portfolio = () => (
  <Base>
    <div>
      <Column right>
        <NavigationLink to="/">Back to Homepage</NavigationLink>
      </Column>
      <PageContainerCentre>
        {Project({
          paragraph: 'An open source website with free resources to learn to code.',
          url: 'https://github.com/charlottebrf/coder-newbie-advice',
          title: 'Coder Newbie',
          image: coderNewbie
        })}
        <ProjectContainer>
          {Project({
            paragraph: 'A toy project using Clojure Clara Rules to best understand Clara.',
            url: 'https://github.com/charlottebrf/flat-chores-engine',
            title: 'Flat Rules Engine',
            image: flatChore
          })}
        </ProjectContainer>
        <ProjectContainer>
          {Project({
            paragraph: 'Built using TypeScript, React and Gatsby, a static site.',
            url: 'https://github.com/charlottebrf/charlottebrf.dev',
            title: 'Personal Website',
            image: charlotteWebsite
          })}
        </ProjectContainer>
        <ProjectContainer>
          {Project({
            paragraph: 'A Clojure experiment in rewriting core functions to better understand them.',
            url: 'https://github.com/charlottebrf/writing-my-own-reduce-function',
            title: 'Rewriting core functions',
            image: reduceRewrite
          })}
        </ProjectContainer>
      </PageContainerCentre>
    </div>
  </Base>
)

export default Portfolio
