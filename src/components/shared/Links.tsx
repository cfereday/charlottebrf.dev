import styled from 'styled-components'
import { NordicPalette } from '../../styles/variables'

export const Links = styled.a`
  transition: color 0.2s ease-out;
  color: ${NordicPalette.snowStorm.white};
  :hover {
    color: ${NordicPalette.frost.darkBlue};
  }
`
