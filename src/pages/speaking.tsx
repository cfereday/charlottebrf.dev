import * as React from 'react'
import { Base } from '../layouts/base'
import { Column } from '../components/shared/Main'
import { NavigationLink } from '../components/shared/NavigationLink'
import { PageContainerCentre, ProjectContainer } from '../components/shared/Containers'
import clojureX from '../media/talks/clojureX.jpg'
import Thoughtworks from '../media/talks/Thoughtworks.jpg'
import Authen from '../media/talks/authen-authoris.png'
import HYC from '../media/talks/HYC.jpeg'
import { Talk } from '../components/shared/Talk'

const Speaking = () => {
  return (
    <Base>
      <div>
        <Column right>
          <NavigationLink to="/">Back to Homepage</NavigationLink>
        </Column>
        <PageContainerCentre>
          {Talk({
            paragraph: 'Addressing basic security concerns when handling Authentication & Authorisation in NodeJs apps.',
            url: 'https://slides.com/charlottefereday/deck/fullscreen',
            title: 'Node Girls & Women of Security 2020: Authentication & Authorisation',
            logo: Authen
          })}
          {Talk({
            paragraph: 'Beginners Introduction to Clara Rules Engine',
            url: 'https://medium.com/@charlottebrf/beginners-introduction-to-clara-rules-a92b02000ceb',
            title: 'ClojureX 2018',
            logo: clojureX
          })}
          {Talk({
            paragraph: 'What I learnt from rewriting core functions',
            url: 'https://medium.com/@charlottebrf/what-i-learnt-from-re-writing-core-functions-c31ade1359a6',
            title: 'ThoughtWorks Away Day 2018',
            logo: Thoughtworks
          })}
          {Talk({
            paragraph: 'Switching into a tech career',
            url: 'https://medium.com/@charlottebrf/notes-to-a-junior-developer-from-a-tech-lead-599e4ab7aac4',
            title: 'Hack Your Career: Introduction to tech 2018',
            logo: HYC
          })}
        </PageContainerCentre>
      </div>
    </Base>
  )
}

export default Speaking
