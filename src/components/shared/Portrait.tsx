import styled from 'styled-components'
import { NordicPalette } from '../../styles/variables'

const Portrait = styled.img`
  box-sizing: border-box;
  border-radius: 50%;
  border: 10px solid ${NordicPalette.snowStorm.white};
  margin: 2em 3em;
  width: 100%;
  height: auto;
  max-width: 300px;
  max-height: 300px;
`

export default Portrait;
