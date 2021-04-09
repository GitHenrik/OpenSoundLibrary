import React from 'react';

const AudioCard = ({audioData}) => {
  return (
  <><div>
  Artist:{audioData.artist}
</div>
<div>
  Song:{audioData.song_name}
</div></>)
}

export default AudioCard

