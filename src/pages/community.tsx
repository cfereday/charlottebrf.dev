import * as React from 'react'
import { Base } from '../layouts/base'
import { Column } from '../components/shared/Main'
import { NavigationLink } from '../components/shared/NavigationLink'
import { CardPattern, CardsPatternWrapper } from '../components/shared/Containers'
import { Event } from '../components/shared/Event'
import { adaLab, soC, ideating, dojo, eqTech } from '../data/portfolio'

const Community = () => {
  return (
    <Base>
      <div>
        <Column right>
          <NavigationLink to="/">Back to Homepage</NavigationLink>
        </Column>
        <CardsPatternWrapper>
          <CardPattern>{Event(adaLab)}</CardPattern>
          <CardPattern>{Event(soC)}</CardPattern>
          <CardPattern>{Event(ideating)}</CardPattern>
          <CardPattern>{Event(dojo)}</CardPattern>
          <CardPattern>{Event(eqTech)}</CardPattern>
        </CardsPatternWrapper>
      </div>
    </Base>
  )
}

export default Community
