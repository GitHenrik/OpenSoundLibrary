import React from 'react'
import AudioCard from './AudioCard'
import PropTypes from 'prop-types'
import { VerticalWrapper } from './utils/Wrappers'

const RecentMediaContent = ({ audioCards }) => {
  return (
    <VerticalWrapper>
      {audioCards.map((audioData) => {
        return <AudioCard key={audioData.id} audioData={audioData} />
      })}
    </VerticalWrapper>
  )
}

RecentMediaContent.propTypes = {
  audioCards: PropTypes.array
}

export default RecentMediaContent
