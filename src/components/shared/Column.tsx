import styled from 'styled-components'

const Column = styled.div`
  flex: 1;
  text-align: ${props => (props.left ? 'end' : 'start')};
`

export default Column
