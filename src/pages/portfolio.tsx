import * as React from 'react'
import { Base } from '../layouts/base'
import { Column } from '../components/shared/Main'
import { NavigationLink } from '../components/shared/NavigationLink'
import { CardPattern, CardsPatternWrapper } from '../components/shared/Containers'
import { Project } from '../components/shared/Project'
import { nodeProject, personalWebsite, clojureReduce, claraRules, newbie } from '../data/portfolio'

const Portfolio = () => (
  <Base>
    <div>
      <Column right>
        <NavigationLink to="/">Back to Homepage</NavigationLink>
      </Column>
      <CardsPatternWrapper>
        <CardPattern>{Project(nodeProject)}</CardPattern>
        <CardPattern>{Project(personalWebsite)}</CardPattern>
        <CardPattern>{Project(clojureReduce)}</CardPattern>
        <CardPattern>{Project(claraRules)}</CardPattern>
        <CardPattern>{Project(newbie)}</CardPattern>
      </CardsPatternWrapper>
    </div>
  </Base>
)

export default Portfolio
