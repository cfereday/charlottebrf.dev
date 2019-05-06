import * as React from 'react'
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react'
import { Base } from '../layouts/base'
import { NavigationLink } from '../components/shared/NavigationLink'
import { NordicPalette } from '../styles/variables'
import { Column } from '../components/shared/Main'
import { NightParagraph } from '../components/shared/Paragraph'
import { NightHeader3, NightHeader4 } from '../components/shared/Header'

const profile = () => (
  <Base>
    <Column right>
      <NavigationLink to="/">Back to Homepage</NavigationLink>
    </Column>
    <Column>
      <Timeline lineColor={NordicPalette.snowStorm.white}>
        <TimelineItem
          key="001"
          dateText="09/2017 – Present"
          dateInnerStyle={{ background: `${NordicPalette.frost.darkBlue}`, color: `${NordicPalette.snowStorm.white}` }}
          bodyContainerStyle={{
            background: `${NordicPalette.snowStorm.grey}`,
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)'
          }}
        >
          <NightHeader3>FullStack Software Engineer, ThoughtWorks</NightHeader3>
          <NightParagraph>
            Consulting as an engineer on a variety of different projects. Pairing, TDD, Agile methodologies & much more.
          </NightParagraph>
          <NightHeader4> International FinTech Startup</NightHeader4>
          <NightParagraph>
            <ul>
              <li>
                <b>Tech stack:</b> TypeScript, React, React Hooks & Context API, Apollo Server, GraphQL, Java
              </li>
              <li>
                <b>Skills:</b> Coaching Agile best practices, Greenfield project
              </li>
            </ul>
          </NightParagraph>
          <NightHeader4> Public Sector Client</NightHeader4>
          <NightParagraph>
            <ul>
              <li>
                <b>Tech stack:</b> Clojure, Clara Rules, MongoDB, RabbitMQ, ELK stack, Vagrant
              </li>
              <li>
                <b>Skills:</b> Agile Delivery, Microservices architecture
              </li>
            </ul>
          </NightParagraph>
          <NightHeader4>Startup Challenger Bank</NightHeader4>
          <NightParagraph>
            <ul>
              <li>
                <b>Tech stack:</b> Clojure, JavaScript, React Native, Redux, Sagas, AWS
              </li>
              <li>
                <b>Skills:</b> Product market fit, Greenfield project
              </li>
            </ul>
          </NightParagraph>
          <NightHeader4>ThoughtWorks University Training scheme</NightHeader4>
          <NightParagraph>
            <ul>
              <li>
                <b>Tech stack:</b> Java, JavaScript, PostgreSQL
              </li>
              <li>
                <b>Skills:</b> Agile processes, Automation Testing, CFR's testing
              </li>
            </ul>
          </NightParagraph>
        </TimelineItem>
        <TimelineItem
          key="002"
          dateText="04/2017 – 08/2017"
          dateInnerStyle={{ background: `${NordicPalette.snowStorm.grey}`, color: `${NordicPalette.polarNight.charcoal}` }}
        >
          <NightHeader3>Women in Tech Scholar, Makers Academy/ThoughtWorks</NightHeader3>
          <NightParagraph>
            <ul>
              <li>
                One of a total of five scholars to receive support to retrain
              </li>
              <li>
                <b>Tech Stack:</b> Ruby, JavaScript, SQL
              </li>
            </ul>
          </NightParagraph>
        </TimelineItem>
        <TimelineItem
          key="003"
          dateText="09/2015 – 03/2017"
          dateInnerStyle={{ background: `${NordicPalette.frost.darkBlue}`, color: `${NordicPalette.snowStorm.white}` }}
          bodyContainerStyle={{
            background: `${NordicPalette.snowStorm.grey}`,
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)'
          }}
        >
          <NightHeader3>Programmes Manager, Code First: Girls</NightHeader3>
          <NightParagraph>
            <ul>
              <li>
                <b>Skills:</b> Stakeholder management, business development, community building
              </li>
            </ul>
          </NightParagraph>
        </TimelineItem>
        <TimelineItem
          key="004"
          dateText="09/2013 – 09/2015"
          dateInnerStyle={{ background: `${NordicPalette.snowStorm.grey}`, color: `${NordicPalette.polarNight.charcoal}` }}
        >
          <NightHeader3>Knowledge Exchange Associate: Arts & Digital, King's Cultural Institute</NightHeader3>
          <NightParagraph>
            <ul>
              <li>
                <b>Skills:</b> Stakeholder management, innovation, cross-displine collaboration
              </li>
            </ul>
          </NightParagraph>
        </TimelineItem>
        <TimelineItem
          key="005"
          dateText="09/2010 – 09/2015"
          dateInnerStyle={{ background: `${NordicPalette.frost.darkBlue}`, color: `${NordicPalette.snowStorm.white}` }}
          bodyContainerStyle={{
            background: `${NordicPalette.snowStorm.grey}`,
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)'
          }}
        >
          <NightHeader3>MA & PhD Candidate: SPLAS, King's College London</NightHeader3>
          <NightParagraph>
            <ul>
              <li>
                <b>Skills:</b> AHRC funded
              </li>
            </ul>
          </NightParagraph>
        </TimelineItem>
        <TimelineItem
          key="006"
          dateText="09/2005 – 09/2009"
          dateInnerStyle={{ background: `${NordicPalette.snowStorm.grey}`, color: `${NordicPalette.polarNight.charcoal}` }}
        >
          <NightHeader3>BA English Literature & Language, University of Leeds</NightHeader3>
        </TimelineItem>


      </Timeline>
    </Column>
  </Base>
)

export default profile
