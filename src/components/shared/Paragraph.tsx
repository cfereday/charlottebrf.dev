import styled from 'styled-components'
import { NordicPalette } from '../../styles/variables'

export const Paragraph = styled.p`
  color: ${NordicPalette.snowStorm.grey};
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0;
  margin-inline-end: 0;

  @media only screen and (max-width: 800px) {
    font-size: 7vw;
  }
`
