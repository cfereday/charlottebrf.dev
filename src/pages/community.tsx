import * as React from 'react'
import { Base } from '../layouts/base'
import { Column } from '../components/shared/Main'
import { NavigationLink } from '../components/shared/NavigationLink'
import { PageContainerCentre, ProjectContainer } from '../components/shared/Containers'
import Glasgow from '../media/events/Glasgow.jpeg'
import Eqtech from '../media/events/Eqtech.jpeg'
import Language from '../media/events/language-acts.png'
import HB from '../media/events/HackBrexit.jpeg'
import SoC from '../media/events/SoC.jpeg'
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
              title: 'School of Code',
              paragraph: 'Mentor for students at this free bootcamp for underrepresented groups in tech',
              date: '2018 & 2019 cohorts',
              url: 'https://schoolofcode.co.uk',
              photo: SoC
            })}
          </ProjectContainer>
          <ProjectContainer>
            {Event({
              title: 'Ideating the Modern Language Curriculum',
              paragraph: 'Organiser of a collaboration with educators on impact of tech for language learning',
              date: '15.06.19',
              url: 'https://languageacts.org',
              photo: Language
            })}
          </ProjectContainer>
          <ProjectContainer>
            {Event({
              title: 'Glasgow Clojure Dojo',
              paragraph: 'Organiser of a meetup bringing together all levels to improve Clojure skills via dojos',
              date: 'Every month',
              url: 'https://www.meetup.com/Glasgow-Software-Development-Meetup/',
              photo: Glasgow
            })}
          </ProjectContainer>
          <ProjectContainer>
            {Event({
              title: 'Ideating an Equitable Tech Future',
              paragraph: 'Organiser of a day event to explore using tech for good with charities & third sector',
              date: '19.09.17',
              url: 'https://twitter.com/hashtag/equitabletechfuture',
              photo: Eqtech
            })}
          </ProjectContainer>
          <ProjectContainer>
            {Event({
              title: 'Hack Brexit',
              paragraph: 'Organiser of a two day hackathon to create dialogue & action for a country divided',
              date: '23.07.16- 24.07.16',
              url:
                'https://www.computerweekly.com/news/450301594/ThoughtWorks-runs-tech-hackathon-to-provide-post-Brexit-support-to-public',
              photo: HB
            })}
          </ProjectContainer>
        </PageContainerCentre>
      </div>
    </Base>
  )
}

export default Community
