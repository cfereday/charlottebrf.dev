import * as React from 'react'
import { SnowHeader3 } from './Header'
import { SnowParagraph } from './Paragraph'
import { PageContainerCentre, PortfolioImageAndLabelContainer } from './Containers'
import { Links } from './Links'
import { Bordered } from './BaseProjectImage'
import { Frame } from './Frame'

interface ProjectInfo {
  title: string
  paragraph: string
  url: string
  image: string
}

export const Project = (info: ProjectInfo) => {
  return (
    <PageContainerCentre>
      <PortfolioImageAndLabelContainer>
        <Bordered>
          <Frame image={info.image} title={info.title} />
        </Bordered>
        <SnowHeader3>{info.title}</SnowHeader3>
        <SnowParagraph>{info.paragraph}</SnowParagraph>
        <SnowParagraph>
          See the codebase
          <Links href={info.url} title={info.title}>
            {' '}
            here
          </Links>
        </SnowParagraph>
      </PortfolioImageAndLabelContainer>
    </PageContainerCentre>
  )
}
