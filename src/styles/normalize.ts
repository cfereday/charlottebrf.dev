import { fonts, colors } from './variables'

export default `

  body {
    width: 100%;
    overflow-x: hidden;
    overflow-y: scroll;
    font-family: ${fonts.sansSerif};
    color: ${colors.nordic.darkBlue};
    background-color: ${colors.white};
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
  }
  
  .column {
  flex: 1;
  }
  
  StyledContainer .column.left {
   ext-align: end;
  }

  }
`
