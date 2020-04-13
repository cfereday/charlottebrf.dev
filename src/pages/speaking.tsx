import * as React from 'react'
import { Base } from '../layouts/base'
import { Column } from '../components/shared/Main'
import { NavigationLink } from '../components/shared/NavigationLink'
import { CardsPatternWrapper, CardPattern } from '../components/shared/Containers'
import { Talk } from '../components/shared/Talk'
import { nodeGirls, claraRulesTalk, coreFuns, switchTech } from '../data/portfolio'

const Speaking = () => {
  return (
    <Base>
      <div>
        <Column right>
          <NavigationLink to="/">Back to Homepage</NavigationLink>
        </Column>
        <CardsPatternWrapper>
          <CardPattern>{Talk(nodeGirls)}</CardPattern>
          <CardPattern>{Talk(claraRulesTalk)}</CardPattern>
          <CardPattern>{Talk(coreFuns)}</CardPattern>
          <CardPattern>{Talk(switchTech)}</CardPattern>
        </CardsPatternWrapper>
      </div>
    </Base>
  )
}

export default Speaking
