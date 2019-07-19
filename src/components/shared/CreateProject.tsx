import * as React from 'react'
import { SnowHeader3 } from './Header'
import { SnowParagraph } from './Paragraph'
import { PageContainer } from './PageContainer'
import { Links } from './Links'
import { ProjectContainer } from './ProjectContainer'
import { ImageAndLabelContainer } from './ImageAndLabelConatiner'
import { BaseProjectImage } from './BaseProjectImage'

interface ProjectInfo {
  title: string
  paragraph: string
  url: string
  image: string
}

export const createProject = (info: ProjectInfo) => {
  return (
    <PageContainer>
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
    </PageContainer>
  )
}
