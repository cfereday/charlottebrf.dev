import * as React from 'react'
import { NightHeader3 } from './Header'
import { NightParagraph } from './Paragraph'
import { PageContainerCentre, ProjectContainer, ImageAndLabelContainer } from './Containers'
import { NightLinks } from './Links'
import { BaseProjectImage } from './BaseProjectImage'

interface EventInfo {
  title: string
  paragraph: string
  date: string
  url: string
  photo: string
}

export const Event = (info: EventInfo) => {
  return (
    <PageContainerCentre>
      <ProjectContainer>
        <ImageAndLabelContainer>
          <BaseProjectImage src={info.photo} alt={info.title} />
          <NightHeader3>{info.title}</NightHeader3>
          <NightParagraph>
            <i>{info.paragraph}</i>
          </NightParagraph>
          <NightParagraph>Date: {info.date}</NightParagraph>
          <NightParagraph>
            {'More information'}
            <NightLinks href={info.url} title={info.title}>
              {' '}
              {'here'}
            </NightLinks>
          </NightParagraph>
        </ImageAndLabelContainer>
      </ProjectContainer>
    </PageContainerCentre>
  )
}
