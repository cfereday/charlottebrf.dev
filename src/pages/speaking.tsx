import * as React from 'react'
import { Base } from '../layouts/base'
import { Column } from '../components/shared/Main'
import { NavigationLink } from '../components/shared/NavigationLink'
import { PageContainerCentre } from '../components/shared/Containers'
import { Talk } from '../components/shared/Talk'
import { nodeGirls, claraRulesTalk, coreFuns, switchTech } from '../data/portfolio'

const Speaking = () => {
  return (
    <Base>
      <div>
        <Column right>
          <NavigationLink to="/">Back to Homepage</NavigationLink>
        </Column>
        <PageContainerCentre>
          {Talk(nodeGirls)}
          {Talk(claraRulesTalk)}
          {Talk(coreFuns)}
          {Talk(switchTech)}
        </PageContainerCentre>
      </div>
    </Base>
  )
}

export default Speaking
