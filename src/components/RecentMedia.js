import React from 'react'
import RecentMediaHeader from './RecentMediaHeader'
import RecentMediaContent from './RecentMediaContent'
import PropTypes from 'prop-types'
import { VerticalWrapper, HorizontalWrapper } from './utils/Wrappers'
const RecentMedia = (props) => {
  return (
    <>
      <VerticalWrapper>
        <HorizontalWrapper>
          <RecentMediaHeader />
        </HorizontalWrapper>
        <RecentMediaContent audioCards={props.audioCards} />
      </VerticalWrapper>
    </>
  )
}

RecentMedia.propTypes = {
  audioCards: PropTypes.array
}

export default RecentMedia
