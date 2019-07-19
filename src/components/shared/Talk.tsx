import * as React from 'react'
import { SnowHeader3 } from './Header'
import { SnowParagraph } from './Paragraph'
import { PageContainerCentre, ProjectContainer, ImageAndLabelContainerLeft } from './Containers'
import { Links } from './Links'
import { PortraitTalk } from './Portrait'

interface TalkInfo {
  title: string
  paragraph: string
  url: string
  logo: string
}

export const Talk = (info: TalkInfo) => {
  return (
    <PageContainerCentre>
      <ProjectContainer>
        <ImageAndLabelContainerLeft>
          <PortraitTalk src={info.logo} alt={info.title} />
          <SnowHeader3>{info.title}</SnowHeader3>
          <SnowParagraph>{info.paragraph}</SnowParagraph>
          <SnowParagraph>
            {'More information'}
            <Links href={info.url} title={info.title}>
              {' '}
              {'here'}
            </Links>
          </SnowParagraph>
        </ImageAndLabelContainerLeft>
      </ProjectContainer>
    </PageContainerCentre>
  )
}
