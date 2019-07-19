import * as React from 'react'
import { SnowHeader3 } from './Header'
import { SnowParagraph } from './Paragraph'
import { PageContainerCentre, ProjectContainer, ImageAndLabelContainer } from './Containers'
import { Links } from './Links'
import { BaseProjectImage } from './BaseProjectImage'

interface ProjectInfo {
  title: string
  paragraph: string
  url: string
  image: string
}

export const Project = (info: ProjectInfo) => {
  return (
    <PageContainerCentre>
      <ProjectContainer>
        <ImageAndLabelContainer>
          <SnowHeader3>{info.title}</SnowHeader3>
          <SnowParagraph>{info.paragraph}</SnowParagraph>
          <SnowParagraph>
            {'See the codebase'}
            <Links href={info.url} title={info.title}>
              {' '}
              {'here'}
            </Links>
          </SnowParagraph>
          <BaseProjectImage src={info.image} alt={info.title} />
        </ImageAndLabelContainer>
      </ProjectContainer>
    </PageContainerCentre>
  )
}
