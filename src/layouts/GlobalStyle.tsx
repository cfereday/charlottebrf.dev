import { createGlobalStyle } from 'styled-components'
import { fonts, NordicPalette } from '../styles/variables'

const GlobalStyle = createGlobalStyle`
  body { 
  background-color: ${NordicPalette.frost.teal};
  font-family: ${fonts.sansSerif};
  font-size: 16px
  }
`
export default GlobalStyle
