import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

const BreadcrumbContainer = styled.div`
  display: flex;
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 27px;
  color: #E5E5E5;
  padding-top: 55px;
  padding-bottom: 27px;
`

const BreadLink = styled.a`
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

const Breadcrumb = () => {
  return (
  <BreadcrumbContainer>
    <BreadLink href="#">Bread</BreadLink>
    <FontAwesomeIcon icon={faAngleRight} />
    <BreadLink href="#">Crumb</BreadLink>
    <FontAwesomeIcon icon={faAngleRight} />
    <BreadLink href="#">Menu</BreadLink>
  </BreadcrumbContainer>)
}

export default Breadcrumb
