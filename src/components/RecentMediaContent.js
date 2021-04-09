import React from 'react'
import AudioCard from './AudioCard'
import PropTypes from 'prop-types'
const RecentMediaContent = ({ audioCards }) => {
  return (
  <div className="vertical-container">
    {audioCards.map(audioData => {
      return (
        <AudioCard key={audioData.id} audioData={audioData}/>
      )
    })}
  </div>)
}

RecentMediaContent.propTypes = {
  audioCards: PropTypes.array
}

export default RecentMediaContent
