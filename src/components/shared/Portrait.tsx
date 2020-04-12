import styled from 'styled-components'
import { NordicPalette } from '../../styles/variables'

export const Portrait = styled.img`
  box-sizing: border-box;
  border-radius: 50%;
  border: 10px solid ${NordicPalette.snowStorm.white};
  margin: 2em 3em;
  width: 100%;
  height: auto;
  max-width: 300px;
  max-height: 300px;

  @media only screen and (max-width: 800px) {
    margin: 3rem 0;
  }
`

export const PortraitTalk = styled(Portrait)`
  border: 3px solid ${NordicPalette.snowStorm.white};
  max-width: 200px;
  max-height: 200px;
  margin: 0em 0em;

  @media only screen and (max-width: 800px) {
    margin: 3rem 0;
  }
`
