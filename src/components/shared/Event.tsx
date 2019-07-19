import * as React from 'react'
import { SnowHeader3 } from './Header'
import { SnowParagraph } from './Paragraph'
import { PageContainerCentre, ProjectContainer, ImageAndLabelContainer } from './Containers'
import { Links } from './Links'
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
          <SnowHeader3>{info.title}</SnowHeader3>
          <SnowParagraph>{info.paragraph}</SnowParagraph>
          <SnowParagraph>{info.date}</SnowParagraph>
          <SnowParagraph>
            {'More information'}
            <Links href={info.url} title={info.title}>
              {' '}
              {'here'}
            </Links>
          </SnowParagraph>
          <BaseProjectImage src={info.photo} alt={info.title} />
        </ImageAndLabelContainer>
      </ProjectContainer>
    </PageContainerCentre>
  )
}
