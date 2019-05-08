import * as React from 'react'
import styled from 'styled-components'
import { Base } from '../layouts/base'
import coderNewbie from '../media/projects/CoderNewbie.jpg'
import flatChore from '../media/projects/FlatChores.jpg'
import charlotteWebsite from '../media/projects/CharloteWebsite.jpg'
import reduceRewrite from '../media/projects/ReduceRewrite.jpg'
import { Column } from '../components/shared/Main'
import { NavigationLink } from '../components/shared/NavigationLink'
import { NordicPalette } from '../styles/variables'

const PageContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin: 25px 0;
`

const ProjectContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin: 2rem;
`

const BaseProjectImage = styled.img`
  box-sizing: border-box;
  border-radius: 5%;
  border: 5px solid ${NordicPalette.snowStorm.white};
  margin: 2em 3em;
  width: 100%;
  height: auto;
  max-width: 500px;
  max-height: 500px;
  vertical-align: middle;
`

const Portfolio = () => (
  <Base>
    <Column right>
      <NavigationLink to="/">Back to Homepage</NavigationLink>
    </Column>
    <PageContainer>
      <ProjectContainer>
        <div>
          <BaseProjectImage src={coderNewbie} alt="Coder Newbie" />
        </div>
      </ProjectContainer>
      <ProjectContainer>
        <div>
          <BaseProjectImage src={flatChore} alt="Clara Rules Engine" />
        </div>
      </ProjectContainer>
      <ProjectContainer>
        <div>
          <BaseProjectImage src={charlotteWebsite} alt="Coder Newbie" />
        </div>
      </ProjectContainer>
      <ProjectContainer>
        <div>
          <BaseProjectImage src={reduceRewrite} alt="Coder Newbie" />
        </div>
      </ProjectContainer>
    </PageContainer>
  </Base>
)

export default Portfolio
