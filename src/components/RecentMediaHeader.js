import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { HorizontalWrapper } from './utils/Wrappers'

import { FooterLink } from './common/Links'
import Constants from '../Constants'

const ShowAllMediaWrapper = styled.div`
  padding-right: 13px;
  padding-bottom: 15px;
  margin: 0;
`

const RecentMediaTitleWrapper = styled.div`
  padding-left: 10px;
  padding-bottom: 15px;
  margin: 0;
`

const RecentMediaHeaderWrapper = styled.div`
  width: 100%;
  @media (min-width: 768px) {
    width: 768px;
    margin: auto;
  }
`

const RecentMediaHeader = () => {
  return (
    <RecentMediaHeaderWrapper>
      <HorizontalWrapper>
        <RecentMediaTitleWrapper>Recent uploads</RecentMediaTitleWrapper>
        <HorizontalWrapper>
          <ShowAllMediaWrapper>
            <FooterLink to={Constants.songPage}>Show all</FooterLink>
            <FontAwesomeIcon size="lg" icon={faAngleRight} />
          </ShowAllMediaWrapper>
        </HorizontalWrapper>
      </HorizontalWrapper>
    </RecentMediaHeaderWrapper>
  )
}

export default RecentMediaHeader
