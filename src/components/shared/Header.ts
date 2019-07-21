import styled from 'styled-components'
import { NordicPalette } from '../../styles/variables'

export const NightHeader3 = styled.h3`
  color: ${NordicPalette.polarNight.charcoal};
  overflow-wrap: break-word;
  font-weight: bold;

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
  overflow-wrap: break-word;
  font-weight: bold;

  @media only screen and (max-width: 800px) {
    font-size: 7vw;
  }
`
