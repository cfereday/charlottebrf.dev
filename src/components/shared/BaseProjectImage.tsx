import styled from 'styled-components'
import { NordicPalette } from '../../styles/variables'

export const Bordered = styled.div`
  box-sizing: border-box;
  border-radius: 10px;
  border: 5px solid ${NordicPalette.snowStorm.white};
`
