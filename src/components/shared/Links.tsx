import styled from 'styled-components'
import { NordicPalette } from '../../styles/variables'

const Links = styled.a`
  transition: color 0.2s ease-out;
  color: ${NordicPalette.snowStorm.white};
  :hover {
    color: ${NordicPalette.frost.darkBlue};
  }
`
export default Links
