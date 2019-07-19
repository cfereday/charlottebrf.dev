import * as React from 'react'
import { Base } from '../layouts/base'
import { Column } from '../components/shared/Main'
import { NavigationLink } from '../components/shared/NavigationLink'
import { PageContainerCentre, ProjectContainer } from '../components/shared/Containers'
import clojureX from '../media/talks/ClojureX.jpg'
import { Talk } from '../components/shared/Talk'

const Speaking = () => {
  return (
    <Base>
      <div>
        <Column right>
          <NavigationLink to="/">Back to Homepage</NavigationLink>
        </Column>
        <PageContainerCentre>
          <ProjectContainer>
            {Talk({
              paragraph: 'Lightning talk on Clara Rules Engine',
              url: 'https://clara-rules-medium-link-tbc',
              title: 'ClojureX 2018',
              logo: clojureX
            })}
          </ProjectContainer>
          <ProjectContainer>
            {Talk({
              paragraph: 'Lightning talk on rewriting core functions in Clojure',
              url: 'https://away-day-link-tbc',
              title: 'ThoughtWorks Away Day 2018',
              logo: clojureX
            })}
          </ProjectContainer>
        </PageContainerCentre>
        <PageContainerCentre>
          <ProjectContainer>
            {Talk({
              paragraph: 'Advice sharing talk on how to switch career into tech',
              url: 'https://medium=-post-tbc',
              title: 'Switching into tech',
              logo: clojureX
            })}
          </ProjectContainer>
          <ProjectContainer>
            {Talk({
              paragraph: 'Panel discussion on creating diverse workforces',
              url: 'https://wit-tbc',
              title: 'Tech Future',
              logo: clojureX
            })}
          </ProjectContainer>
        </PageContainerCentre>
      </div>
    </Base>
  )
}

export default Speaking
