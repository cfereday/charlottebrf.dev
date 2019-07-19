import styled from 'styled-components'

export const ProjectContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin: 2rem;
`
export const ProjectContainerLeft = styled(ProjectContainer)`
  justify-content: left;
`

export const ProjectContainerRight = styled(ProjectContainer)`
  justify-content: right;
`
export const PageContainerCentre = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin: 25px 0;
`

export const PageContainerLeft = styled(PageContainerCentre)`
  justify-items: left;
`
export const PageContainerRight = styled(PageContainerCentre)`
  justify-items: right;
`

export const ImageAndLabelContainer = styled.div`
  justify-content: center;
  flex-direction: row;
  align-content: center;
  align-items: center;
  margin: 2em 3em;
`

