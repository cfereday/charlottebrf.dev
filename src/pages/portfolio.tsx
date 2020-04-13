import * as React from 'react'
import { Base } from '../layouts/base'
import { Column } from '../components/shared/Main'
import { NavigationLink } from '../components/shared/NavigationLink'
import { CardPattern, CardsPatternWrapper } from '../components/shared/Containers'
import { Content } from '../components/shared/Content'
import { nodeProject, personalWebsite, clojureReduce, claraRules, newbie } from '../data/portfolio'

const Portfolio = () => (
  <Base>
    <div>
      <Column right>
        <NavigationLink to="/">Back to Homepage</NavigationLink>
      </Column>
      <CardsPatternWrapper>
        <CardPattern>{Content(nodeProject)}</CardPattern>
        <CardPattern>{Content(personalWebsite)}</CardPattern>
        <CardPattern>{Content(newbie)}</CardPattern>
        <CardPattern>{Content(claraRules)}</CardPattern>
        <CardPattern>{Content(clojureReduce)}</CardPattern>
      </CardsPatternWrapper>
    </div>
  </Base>
)

export default Portfolio
