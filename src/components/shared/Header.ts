import styled from 'styled-components'
import { NordicPalette } from '../../styles/variables'

export const NightHeader3 = styled.h3`
  color: ${NordicPalette.polarNight.charcoal};
  display: block;
  font-weight: bold;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0;
  margin-inline-end: 0;

  @media only screen and (max-width: 800px) {
    font-size: 7vw;
  }
`

export const SnowHeader3 = styled(NightHeader3)`
  color: ${NordicPalette.snowStorm.white};
  }
`

export const NightHeader4 = styled.h4`
  color: ${NordicPalette.polarNight.charcoal};
  display: block;
  font-weight: bold;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0;
  margin-inline-end: 0;

  @media only screen and (max-width: 800px) {
    font-size: 7vw;
  }
`
