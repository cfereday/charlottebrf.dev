import * as React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { NordicPalette } from '../../styles/variables'

export const NavigationLink = styled(props => <Link {...props} />)`
  transition: color 0.2s ease-out;
  font-size: 50px;
  display: block;
  font-weight: bold;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  color: ${NordicPalette.snowStorm.white};
  :hover {
    color: ${NordicPalette.frost.darkBlue};
    
     @media only screen and (max-width: 800px) {
    font-size: 12vw;
  }
`;
