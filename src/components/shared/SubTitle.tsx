import styled from 'styled-components'
import { NordicPalette } from '../../styles/variables'

const SubTitle = styled.h2`
  color: ${NordicPalette.snowStorm.white};
  display: block;
  font-size: 50px;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;

  @media only screen and (max-width: 800px) {
    font-size: 12vw;
  }
`

export default SubTitle
