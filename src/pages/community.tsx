import * as React from 'react'
import { Base } from '../layouts/base'
import { Column } from '../components/shared/Main'
import { NavigationLink } from '../components/shared/NavigationLink'
import { Card, PageContainerCentre, ProjectContainer } from '../components/shared/Containers'
import Glasgow from '../media/events/Glasgow.jpeg'
import Eqtech from '../media/events/Eqtech.jpeg'
import Language from '../media/events/language-acts.png'
import SoC from '../media/events/SoC.jpg'
import Ada from '../media/events/ada.png'
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
            <Card>
              {Event({
                title: 'Adalab',
                paragraph: 'Mentor for students at this free bootcamp to get more women in tech',
                date: '2019',
                url: 'https://adalab.es/hazte-voluntario/',
                photo: Ada
              })}
            </Card>
          </ProjectContainer>
          <ProjectContainer>
            <Card>
              {Event({
                title: 'School of Code Bootcamp',
                paragraph: 'Mentor for students at this free bootcamp for underrepresented groups in tech',
                date: '2018 - 2019',
                url: 'https://schoolofcode.co.uk',
                photo: SoC
              })}
            </Card>
          </ProjectContainer>
          <ProjectContainer>
            <Card>
              {Event({
                title: 'Ideating the Modern Language Curriculum',
                paragraph: 'Organiser of a collaboration with educators on impact of tech for ML learning',
                date: '15.06.19',
                url: 'https://languageacts.org',
                photo: Language
              })}
            </Card>
          </ProjectContainer>
          <ProjectContainer>
            <Card>
              {Event({
                title: 'Glasgow Clojure Dojo',
                paragraph: 'Organiser of meetup bringing together all levels to improve Clojure skills dojos',
                date: '2018 - 2019',
                url: 'https://www.meetup.com/Glasgow-Software-Development-Meetup/',
                photo: Glasgow
              })}
            </Card>
          </ProjectContainer>
          <ProjectContainer>
            <Card>
              {Event({
                title: 'Ideating an Equitable Tech Future',
                paragraph: 'Organiser of a day event to explore using tech for good with charities & third sector',
                date: '19.09.17',
                url: 'https://twitter.com/hashtag/equitabletechfuture',
                photo: Eqtech
              })}
            </Card>
          </ProjectContainer>
        </PageContainerCentre>
      </div>
    </Base>
  )
}

export default Community
