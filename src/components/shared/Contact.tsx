import styled from 'styled-components'
import Links from './Links'

const Contact = styled.div`
  margin-top: 2.5rem;
  font-size: 1.5rem;
  cursor: pointer;

  ${Links} {
    margin-right: 1rem;
  }

  @media only screen and (max-width: 800px) {
    margin-bottom: 2rem;
  }
`

export default Contact
