import { Link } from 'react-router-dom'
import styled from 'styled-components'

const BreadcrumbLink = styled(Link)`
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 27px;
  color: #e5e5e5;
  &:hover {
    color: white;
  }
`

const FooterLink = styled(Link)`
  text-decoration: none;
  color: #e5e5e5;
  margin-bottom: 0.5rem;
  &:hover {
    color: white;
  }
`

export { BreadcrumbLink, FooterLink }
