import * as React from 'react'
import { Base } from '../layouts/base'
import { Column } from '../components/shared/Main'
import { NavigationLink } from '../components/shared/NavigationLink'
import { PageContainerCentre, ProjectContainer } from '../components/shared/Containers'
import clojureX from '../media/events/ClojureX.jpg'
import { Event } from '../components/shared/Event'

const Community = () => {
  return (
    <Base>
      <div>
        <Column right>
          <NavigationLink to="/">Back to Homepage</NavigationLink>
        </Column>
        <PageContainerCentre>
          <ProjectContainer>
            {Event({
              title: 'Organiser of Glasgow Clojure Dojo',
              paragraph: 'A hands on meetup for all levels to improve Clojure skills',
              date: 'Every month',
              url: 'https://ideating-url',
              photo: clojureX
            })}
          </ProjectContainer>
          <ProjectContainer>
            {Event({
              title: 'Organiser of Ideating Modern Languages',
              paragraph: 'Educators & technologists explored the future of modern language learning',
              date: '15.06.19',
              url: 'https://ideating-url',
              photo: clojureX
            })}
          </ProjectContainer>
          <ProjectContainer>
            {Event({
              title: 'Organiser of Ideating an Equitable Tech Future',
              paragraph: 'Charities & technologists explored how technology can be used for good',
              date: '15.09.17',
              url: 'https://ideating-url',
              photo: clojureX
            })}
          </ProjectContainer>
          <ProjectContainer>
            {Event({
              title: 'Organiser of Hack Brexit',
              paragraph: '2 day hackathon on technological responses to Brexit a week after referendum results',
              date: '15.06.17- 16.06.17',
              url: 'https://ideating-url',
              photo: clojureX
            })}
          </ProjectContainer>
        </PageContainerCentre>
      </div>
    </Base>
  )
}

export default Community
