import * as React from 'react'
import { Base } from '../layouts/base'
import { Column } from '../components/shared/Main'
import { NavigationLink } from '../components/shared/NavigationLink'
import { CardPattern, CardsPatternWrapper } from '../components/shared/Containers'
import { Content } from '../components/shared/Content'
import { adaLab, soC, ideating, dojo, eqTech } from '../data/portfolio'

const Community = () => {
  return (
    <Base>
      <div>
        <Column right>
          <NavigationLink to="/">Back to Homepage</NavigationLink>
        </Column>
        <CardsPatternWrapper>
          <CardPattern>{Content(adaLab)}</CardPattern>
          <CardPattern>{Content(soC)}</CardPattern>
          <CardPattern>{Content(ideating)}</CardPattern>
          <CardPattern>{Content(dojo)}</CardPattern>
          <CardPattern>{Content(eqTech)}</CardPattern>
        </CardsPatternWrapper>
      </div>
    </Base>
  )
}

export default Community
