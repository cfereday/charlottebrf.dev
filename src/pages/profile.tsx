import * as React from 'react'
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react'
import { Base } from '../layouts/base'
import { NavigationLink } from '../components/shared/NavigationLink'
import { NordicPalette } from '../styles/variables'
import { Column } from '../components/shared/Main'
import { NightParagraph } from '../components/shared/Paragraph'
import { NightHeader3, NightHeader4 } from '../components/shared/Header'
import { Links } from '../components/shared/Links'

interface ParagraphText {
  header: string
  techStack?: string
  skills: string
}

const experienceItem = (text: ParagraphText) => {
  return (
    <div>
      <NightHeader3>{text.header}</NightHeader3>
      <NightParagraph>
        <ul>
          <li>
            <b>Tech stack:</b> {text.techStack}
          </li>
          <li>
            <b>Skills:</b> {text.skills}
          </li>
        </ul>
      </NightParagraph>
    </div>
  )
}

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
          {experienceItem({
            header: 'International FinTech Startup',
            techStack: 'TypeScript, React, React Hooks & Context API, Apollo Server, GraphQL, Java',
            skills: 'Coaching Agile best practices, Greenfield project'
          })}
          {experienceItem({
            header: 'Public Sector Client',
            techStack: 'Clojure, Clara Rules, MongoDB, RabbitMQ, ELK stack, Vagrant',
            skills: 'Agile Delivery, Microservices architecture'
          })}
          {experienceItem({
            header: 'Startup Challenger Bank',
            techStack: 'Clojure, JavaScript, React Native, Redux, Sagas, AWS',
            skills: 'Product market fit, Greenfield project'
          })}
          {experienceItem({
            header: 'ThoughtWorks University Training scheme',
            techStack: 'Java, JavaScript, PostgreSQL',
            skills: 'Agile processes, Automation Testing, CFR testing'
          })}
        </TimelineItem>
        <TimelineItem
          key="002"
          dateText="04/2017 – 08/2017"
          dateInnerStyle={{
            background: `${NordicPalette.snowStorm.grey}`,
            color: `${NordicPalette.polarNight.charcoal}`
          }}
        >
          {experienceItem({
            header: 'Women in Tech Scholar, Makers Academy/ThoughtWorks',
            techStack: 'Ruby, JavaScript, SQL',
            skills: 'One of a total of five scholars to receive support to retrain'
          })}
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
          {experienceItem({
            header: 'Programmes Manager, Code First: Girls',
            techStack: 'Collaborated on creating beginner curriculum for: Ruby, Beginners Intro to Web Development',
            skills: 'Stakeholder management, business development, community building'
          })}
        </TimelineItem>
        <TimelineItem
          key="004"
          dateText="09/2013 – 09/2015"
          dateInnerStyle={{
            background: `${NordicPalette.snowStorm.grey}`,
            color: `${NordicPalette.polarNight.charcoal}`
          }}
        >
          {experienceItem({
            header: 'Knowledge Exchange Associate: Arts & Digital, Kings Cultural Institute',
            techStack: 'Overseeing management of a variety of web apps',
            skills: 'Stakeholder management, innovation, cross-displine collaboration'
          })}
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
          <NightHeader3>Spanish & Latin American Studies Researcher, King's College London</NightHeader3>
          <br></br>
          <NightHeader4>PhD completed 09/2015</NightHeader4>
          <NightParagraph>
            <ul>
              <li>
                AHRC funded PhD analysing memory, selfhood & exile. Read more about the PhD and research outputs
                <Links href="https://kcl.academia.edu/CharlotteFereday" title="Research">
                  {' '}
                  here
                </Links>
              </li>
            </ul>
            <NightHeader4>MA completed 09/2010</NightHeader4>
          </NightParagraph>
        </TimelineItem>
        <TimelineItem
          key="006"
          dateText="09/2005 – 09/2009"
          dateInnerStyle={{
            background: `${NordicPalette.snowStorm.grey}`,
            color: `${NordicPalette.polarNight.charcoal}`
          }}
        >
          <NightHeader3>BA English Literature & Language, University of Leeds</NightHeader3>
        </TimelineItem>
      </Timeline>
    </Column>
  </Base>
)

export default profile
