import styled from 'styled-components'
import { NordicPalette } from '../../styles/variables'

export const Links = styled.a`
  transition: color 0.2s ease-out;
  color: ${NordicPalette.snowStorm.white};
  :hover {
    cursor: pointer;
    color: ${NordicPalette.frost.darkBlue};
  }

  :active {
    color: ${NordicPalette.frost.turquoise};
  }
`

export const NightLinks = styled(Links)`
  color: ${NordicPalette.polarNight.black};
`
