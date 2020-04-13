import styled from 'styled-components'

export const ProjectContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin: 0.5rem;
`

export const PageContainerCentre = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin: 25px 0;
`

export const CardPattern = styled.div`
  flex-basis: 25%;
  padding-left: 8px;
  padding-right: 8px;
  justify-content: space-around;
`

export const CardsPatternWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -8px;
  margin-right: -8px;
`

export const ImageAndLabelContainer = styled.div`
  justify-content: center;
  flex-direction: row;
  align-content: center;
  align-items: center;
  margin: 2em 3em;
  position: relative;
  float: left;
  max-width: 200px;
`
export const PortfolioImageAndLabelContainer = styled(ImageAndLabelContainer)`
  margin: 0em 0em;
`
