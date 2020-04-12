import * as React from 'react'
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react'
import { Base } from '../layouts/base'
import { NavigationLink } from '../components/shared/NavigationLink'
import { NordicPalette } from '../styles/variables'
import { Column } from '../components/shared/Main'
import { NightParagraph } from '../components/shared/Paragraph'
import { NightHeader3, NightHeader4 } from '../components/shared/Header'
import { Links } from '../components/shared/Links'
import { tes, finTech, publicSector, challengerBank, thoughtWorks, makers, cfg, kes } from '../data/portfolio'

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
    <div>
      <Column right>
        <NavigationLink to="/">Back to Homepage</NavigationLink>
      </Column>
      <Column>
        <Timeline lineColor={NordicPalette.snowStorm.white}>
          <TimelineItem
            key="000"
            dateText="08/2019 – Present"
            dateInnerStyle={{
              background: `${NordicPalette.snowStorm.grey}`,
              color: `${NordicPalette.polarNight.charcoal}`
            }}
          >
            <NightHeader3>FullStack Software Engineer, TES Global</NightHeader3>
            {experienceItem(tes)}
          </TimelineItem>
          <TimelineItem
            key="001"
            dateText="09/2017 – 08/2019"
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
            {experienceItem(finTech)}
            {experienceItem(publicSector)}
            {experienceItem(challengerBank)}
            {experienceItem(thoughtWorks)}
          </TimelineItem>
          <TimelineItem
            key="002"
            dateText="04/2017 – 08/2017"
            dateInnerStyle={{
              background: `${NordicPalette.snowStorm.grey}`,
              color: `${NordicPalette.polarNight.charcoal}`
            }}
          >
            {experienceItem(makers)}
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
            {experienceItem(cfg)}
          </TimelineItem>
          <TimelineItem
            key="004"
            dateText="09/2013 – 09/2015"
            dateInnerStyle={{
              background: `${NordicPalette.snowStorm.grey}`,
              color: `${NordicPalette.polarNight.charcoal}`
            }}
          >
            {experienceItem(kes)}
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
            <br />
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
    </div>
  </Base>
)

export default profile
