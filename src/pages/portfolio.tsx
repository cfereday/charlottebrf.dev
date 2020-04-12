import * as React from 'react'
import { Base } from '../layouts/base'
import { Column } from '../components/shared/Main'
import { NavigationLink } from '../components/shared/NavigationLink'
import { PageContainerCentre } from '../components/shared/Containers'
import { Project } from '../components/shared/Project'
import { nodeProject, personalWebsite, clojureReduce, claraRules, newbie } from '../data/portfolio'

const Portfolio = () => (
  <Base>
    <div>
      <Column right>
        <NavigationLink to="/">Back to Homepage</NavigationLink>
      </Column>
      <PageContainerCentre>
        {Project(nodeProject)}
        {Project(personalWebsite)}
        {Project(clojureReduce)}
        {Project(claraRules)}
        {Project(newbie)}
      </PageContainerCentre>
    </div>
  </Base>
)

export default Portfolio
