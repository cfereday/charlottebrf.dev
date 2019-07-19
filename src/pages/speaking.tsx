import * as React from 'react'
import { Base } from '../layouts/base'
import { Column } from '../components/shared/Main'
import { NavigationLink } from '../components/shared/NavigationLink'
import { PageContainerLeft, PageContainerRight, ProjectContainerLeft, ProjectContainerRight } from '../components/shared/Containers'

const Speaking = () => {
  return (
    <Base>
      <div>
        <Column right>
          <NavigationLink to="/">Back to Homepage</NavigationLink>
        </Column>
        <PageContainerLeft>
          <ProjectContainerLeft>
            <p>"HEY"</p>
          </ProjectContainerLeft>
        </PageContainerLeft>
        <PageContainerRight>
          <ProjectContainerRight>
            <p>"HEY"</p>
          </ProjectContainerRight>
        </PageContainerRight>
      </div>
    </Base>
  )
}

export default Speaking
