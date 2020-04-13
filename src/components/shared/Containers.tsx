import styled from 'styled-components'
import { NordicPalette } from '../../styles/variables'

export const ProjectContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin: 0.5rem;
`

export const Card = styled.div`
  box-sizing: border-box;
  background-color: ${NordicPalette.snowStorm.grey};
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.3);
  padding: 0.5px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  position: relative;
  cursor: pointer;
  transition: opacity 0.3s linear, box-shadow 0.1s linear;
  opacity: 1;
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

export const SameHeight = styled.div`
  flex: 1;
  /* Space between column */
  margin: 0 8px;

  /* Layout each column */
  display: flex;
  flex-direction: column;
`

export const SameHeightCard = styled.div`
  /* Take available height */
  flex: 1;
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
export const ImageAndLabelContainerLeft = styled(ImageAndLabelContainer)`
  justify-content: space-evenly;
  margin: 0.5em 0.5em;
`
