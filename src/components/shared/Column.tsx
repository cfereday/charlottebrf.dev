import styled from 'styled-components'

const Column = styled.div`
  flex: 1;
  text-align: ${props => (props.left ? 'end' : 'start')};

  @media only screen and (max-width: 800px) {
    text-align: center;
  }
`

export default Column
