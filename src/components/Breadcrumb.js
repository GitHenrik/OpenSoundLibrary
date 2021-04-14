import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { BreadcrumbLink } from './common/Links'
import { WhiteIconWrapper } from './utils/Wrappers'
import Constants from '../Constants'

const BreadcrumbContainer = styled.div`
  display: flex;
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 27px;
  color: #e5e5e5;
  padding-top: 55px;
  padding-bottom: 27px;
`

const Breadcrumb = () => {
  return (
    <BreadcrumbContainer>
      <BreadcrumbLink to={Constants.frontPage}>Front page</BreadcrumbLink>
      <WhiteIconWrapper>
        <FontAwesomeIcon icon={faAngleRight} />
      </WhiteIconWrapper>
      <BreadcrumbLink to={Constants.songPage}>Crumb</BreadcrumbLink>
    </BreadcrumbContainer>
  )
}

export default Breadcrumb
