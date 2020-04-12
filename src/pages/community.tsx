import * as React from 'react'
import { Base } from '../layouts/base'
import { Column } from '../components/shared/Main'
import { NavigationLink } from '../components/shared/NavigationLink'
import { Card, PageContainerCentre, ProjectContainer } from '../components/shared/Containers'
import { Event } from '../components/shared/Event'
import { adaLab, soC, ideating, dojo, eqTech } from '../data/portfolio'

const Community = () => {
  return (
    <Base>
      <div>
        <Column right>
          <NavigationLink to="/">Back to Homepage</NavigationLink>
        </Column>
        <PageContainerCentre>
          <ProjectContainer>
            <Card>
              {Event(adaLab)}
            </Card>
          </ProjectContainer>
          <ProjectContainer>
            <Card>
              {Event(soC)}
            </Card>
          </ProjectContainer>
          <ProjectContainer>
            <Card>
              {Event(ideating)}
            </Card>
          </ProjectContainer>
          <ProjectContainer>
            <Card>
              {Event(dojo)}
            </Card>
          </ProjectContainer>
          <ProjectContainer>
            <Card>
              {Event(eqTech)}
            </Card>
          </ProjectContainer>
        </PageContainerCentre>
      </div>
    </Base>
  )
}

export default Community
