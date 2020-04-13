import * as React from 'react'
import { SnowHeader3 } from './Header'
import { SnowParagraph } from './Paragraph'
import { ProjectContainer, ImageAndLabelContainer } from './Containers'
import { Links } from './Links'
import { Bordered } from './BaseProjectImage'
import { Frame } from './Frame'

interface TalkInfo {
  title: string
  paragraph: string
  url: string
  logo: string
}

export const Talk = (info: TalkInfo) => {
  return (
    <ProjectContainer>
      <ImageAndLabelContainer>
        <Bordered>
          <Frame image={info.logo} title={info.title} />
        </Bordered>
        <SnowHeader3>{info.title}</SnowHeader3>
        <SnowParagraph>{info.paragraph}</SnowParagraph>
        <SnowParagraph>
          More information
          <Links href={info.url} title={info.title}>
            {' '}
            here
          </Links>
        </SnowParagraph>
      </ImageAndLabelContainer>
    </ProjectContainer>
  )
}
