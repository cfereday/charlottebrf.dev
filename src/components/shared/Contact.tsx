import styled from 'styled-components'
import * as React from 'react'
import { Links } from './Links'

const Contact = () => (
  <ContactLayout>
    <Links href="https://github.com/charlottebrf" title="Github">
      <i className="fab fa-github" />
    </Links>
    <Links href="https://twitter.com/charlottebrf" title="Twitter">
      <i className="fab fa-twitter" />
    </Links>
    <Links href="https://www.linkedin.com/in/cfereday" title="LinkedIn">
      <i className="fab fa-linkedin-in" />
    </Links>
    <Links href="https://medium.com/@charlottebrf" title="LinkedIn">
      <i className="fab fa-medium" />
    </Links>
  </ContactLayout>
)

const ContactLayout = styled.div`
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
