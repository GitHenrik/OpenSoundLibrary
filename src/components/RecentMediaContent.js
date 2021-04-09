import React from 'react';
import AudioCard from './AudioCard'
const RecentMediaContent = ({audioCards}) => {
  return (
  <div className="vertical-container">
    {audioCards.map(audioData => {
      return (
        <AudioCard audioData={audioData}/>
      )
    })}
  </div>)
}

export default RecentMediaContent