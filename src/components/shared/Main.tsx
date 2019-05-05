import styled from 'styled-components'

const Main = styled.main`
  display: flex;
  margin-top: 20vh;

  @media only screen and (max-width: 800px) {
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 0;
  }
`
export default Main
