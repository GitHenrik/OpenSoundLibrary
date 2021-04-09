import React from 'react'
import RecentMediaHeader from './RecentMediaHeader'
import RecentMediaContent from './RecentMediaContent'
import PropTypes from 'prop-types'
const RecentMedia = props => {
  return (
    <>
    <RecentMediaHeader/>
    <RecentMediaContent audioCards={props.audioCards}/>
    </>
  )
}

RecentMedia.propTypes = {
  audioCards: PropTypes.array
}

export default RecentMedia
