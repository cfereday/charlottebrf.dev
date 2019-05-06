import * as React from 'react'
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react'
import { Base } from '../layouts/base'
import { NavigationLink } from '../components/shared/NavigationLink'
import { NordicPalette } from '../styles/variables'
import { Column } from '../components/shared/Main'
import { NightParagraph } from '../components/shared/Paragraph'
import { NightHeader } from '../components/shared/Header'

const profile = () => (
  <Base>
    <Column right>
      <NavigationLink to="/">Back to Homepage</NavigationLink>
    </Column>
    <Column>
      <Timeline lineColor={NordicPalette.snowStorm.white}>
        <TimelineItem
          key="001"
          dateText="11/2010 – Present"
          dateInnerStyle={{ background: `${NordicPalette.frost.darkBlue}`, color: `${NordicPalette.snowStorm.white}` }}
          bodyContainerStyle={{
            background: `${NordicPalette.snowStorm.grey}`,
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)'
          }}
        >
          <NightHeader>Title, Company</NightHeader>
          <NightParagraph>
            Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla exercitation. Veniam velit adipisicing anim excepteur
            nostrud magna nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure reprehenderit laborum fugiat dolore in elit.
            Adipisicing do qui duis Lorem est.
          </NightParagraph>
          <NightParagraph>
            Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla exercitation. Veniam velit adipisicing anim excepteur
            nostrud magna nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure reprehenderit laborum fugiat dolore in elit.
            Adipisicing do qui duis Lorem est.
          </NightParagraph>
          <NightParagraph>
            Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla exercitation. Veniam velit adipisicing anim excepteur
            nostrud magna nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure reprehenderit laborum fugiat dolore in elit.
            Adipisicing do qui duis Lorem est.
          </NightParagraph>
        </TimelineItem>
        <TimelineItem
          key="004"
          dateText="08/2008 – 11/2008"
          dateInnerStyle={{ background: `${NordicPalette.frost.lightBlue}`, color: `${NordicPalette.snowStorm.white}` }}
        >
          <NightHeader>Title, Company</NightHeader>
          <NightParagraph>
            Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla exercitation. Veniam velit adipisicing anim excepteur
            nostrud magna nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure reprehenderit laborum fugiat dolore in elit.
            Adipisicing do qui duis Lorem est.
          </NightParagraph>
          <NightParagraph>
            Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla exercitation. Veniam velit adipisicing anim excepteur
            nostrud magna nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure reprehenderit laborum fugiat dolore in elit.
            Adipisicing do qui duis Lorem est.
          </NightParagraph>
        </TimelineItem>
      </Timeline>
    </Column>
  </Base>
)

export default profile
