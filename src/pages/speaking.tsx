import * as React from 'react'
import { Base } from '../layouts/base'
import { Column } from '../components/shared/Main'
import { NavigationLink } from '../components/shared/NavigationLink'
import { CardsPatternWrapper, CardPattern } from '../components/shared/Containers'
import { Content } from '../components/shared/Content'
import { nodeGirls, claraRulesTalk, coreFuns, switchTech } from '../data/portfolio'

const Speaking = () => {
  return (
    <Base>
      <div>
        <Column right>
          <NavigationLink to="/">Back to Homepage</NavigationLink>
        </Column>
        <CardsPatternWrapper>
          <CardPattern>{Content(nodeGirls)}</CardPattern>
          <CardPattern>{Content(claraRulesTalk)}</CardPattern>
          <CardPattern>{Content(coreFuns)}</CardPattern>
          <CardPattern>{Content(switchTech)}</CardPattern>
        </CardsPatternWrapper>
      </div>
    </Base>
  )
}

export default Speaking
