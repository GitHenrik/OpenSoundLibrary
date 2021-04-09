import React from 'react'
import PropTypes from 'prop-types'

const AudioCard = ({ audioData }) => {
  return (
  <><div>
  Artist:{audioData.artist}
</div>
<div>
  Song:{audioData.song_name}
</div></>)
}

AudioCard.propTypes = {
  audioData: PropTypes.object
}

export default AudioCard
