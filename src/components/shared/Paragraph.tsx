import styled from 'styled-components'
import { NordicPalette } from '../../styles/variables'

export const SnowParagraph = styled.p`
  color: ${NordicPalette.snowStorm.white};

  @media only screen and (max-width: 800px) {
    font-size: 7vw;
  }
`

export const NightParagraph = styled(SnowParagraph)`
  color: ${NordicPalette.polarNight.charcoal};
`
