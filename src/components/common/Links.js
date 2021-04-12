import { Link } from 'react-router-dom'
import styled from 'styled-components'

const BreadcrumbLink = styled(Link)`
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 27px;
  color: #E5E5E5;
  &:hover {
    color: white;
  }
`

const FooterLink = styled(Link)`
  text-decoration: none;
  color: #E5E5E5;
  margin-bottom: 0.5rem;
  &:hover {
    color: white;
  }
`

export { BreadcrumbLink, FooterLink }
