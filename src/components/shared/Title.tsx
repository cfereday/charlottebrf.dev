import styled from 'styled-components'
import { NordicPalette } from '../../styles/variables'

export const Title = styled.h1`
  color: ${NordicPalette.snowStorm.white};
  display: block;
   font-size: 100px;
  font-weight: bold;
  margin-block-start: 0.67em;
  margin-block-end: 0.67em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  
  @media only screen and (max-width: 800px) {
     font-size: 20vw;
  }
}
`
