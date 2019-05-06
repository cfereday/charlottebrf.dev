import * as React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { NordicPalette } from '../../styles/variables'

export const NavigationLink = styled(props => <Link {...props} />)`
  display: block;
  font-weight: bold;
  font-size: 20px;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0;
  margin-inline-end: 0;
  transition: color 0.2s ease-out;
  color: ${NordicPalette.snowStorm.white};
  :hover {
    color: ${NordicPalette.frost.darkBlue};
    
    
  @media only screen and (max-width: 800px) {
    font-size: 7vw;
  }
    
`;
