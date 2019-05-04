import * as React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

import { colors } from '../styles/variables'

const HomepageLink = styled(Link)`
  color: ${colors.white};
  font-size: 1.5rem;
  font-weight: 600;

  &:hover,
  &:focus {
    text-decoration: none;
  }
`

interface HeaderProps {
  title: string
}

const Header: React.SFC<HeaderProps> = ({ title }) => (
      <HomepageLink to="/">{title}</HomepageLink>
)

export default Header
