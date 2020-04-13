import * as React from 'react'
import { SnowHeader3 } from './Header'
import { SnowParagraph } from './Paragraph'
import { PageContainerCentre, PortfolioImageAndLabelContainer } from './Containers'
import { Links } from './Links'
import { Bordered } from './BaseProjectImage'
import { Frame } from './Frame'

interface ContentInfo {
  title: string
  paragraph: string
  date: string
  url: string
  image: string
}

export const Content = (info: ContentInfo) => {
  return (
    <PageContainerCentre>
      <PortfolioImageAndLabelContainer>
        <Bordered>
          <Frame image={info.image} title={info.title} />
        </Bordered>
        <SnowHeader3>{info.title}</SnowHeader3>
        <SnowParagraph>{info.paragraph}</SnowParagraph>
        <SnowParagraph>Date: {info.date}</SnowParagraph>
        <SnowParagraph>
          More information
          <Links href={info.url} title={info.title}>
            {' '}
            here
          </Links>
        </SnowParagraph>
      </PortfolioImageAndLabelContainer>
    </PageContainerCentre>
  )
}
