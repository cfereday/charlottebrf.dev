import styled from 'styled-components'

export const Main = styled.main`
  display: flex;
  margin-top: 20vh;

  @media only screen and (max-width: 800px) {
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 0;
  }
`

interface ColumnProps {
  left?: boolean
  right?: boolean
}

export const Column = styled.div<ColumnProps>`
  flex: 1;
  text-align: ${props => (props.left ? 'end' : 'start')};

  @media only screen and (max-width: 800px) {
    text-align: center;
  }
`
