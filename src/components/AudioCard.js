import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompactDisc } from '@fortawesome/free-solid-svg-icons'

const AudioCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (min-width: 768px) {
    flex-direction: row;
    height: 241px;
    width: 768px;
  }
  background: #111111;
  margin-bottom: 1.5rem;
  border-right: 4px solid #EAF27C;
`

const PictureContainer = styled.img`
  width: 100%;
  height: 100vmin;
  object-fit: cover;
  @media (min-width: 768px) {
    width: 241px;
    height: 241px;
  }
`

const AudioInformation = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  justify-content: space-between;
`

const GenreContainer = styled.div`
  flex-direction: row;
`

const GenreTag = styled.div`
  display: inline-block;
  padding: 0 0.75rem;
  background: #EAF27C;
  border-radius: 27.5px;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  letter-spacing: -0.02em;
  color: #000000;
  margin-right: 1rem;
`

const AudioDataContainer = styled.div`
  flex-direction: row;
  display: inline-block;
  display: flex;
  flex-wrap: nowrap;
`

const AudioData = styled.div`
  flex-direction: row;
  flex-wrap: nowrap;
  display: inline-block;
  padding-right: 1rem;
`

const AudioControls = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const AudioControlButtonContainer = styled.div`
  text-align: center;
`

const AudioCardBlock = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  padding: 1.5rem;
`

const AudioDurationContainer = styled.div`
left: 90%;
right: 3.97%;
top: 10.79%;
bottom: 78.84%;
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 25px;
color: #B0B0B0;
`

const AudioDataNumber = styled.div`
  padding: 0.5rem;
  display: inline-block;
`

const SongTitle = styled.div`
font-family: Open Sans;
font-style: normal;
font-weight: normal;
font-size: 26px;
line-height: 35px;
color: #FFFFFF;
`

const ArtistName = styled.div`
font-family: Open Sans;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 22px;
color: #B0B0B0;
`

const AudioCard = ({ audioData }) => {
  return (
  <AudioCardContainer>
    <div>
    <PictureContainer src={audioData.src} alt="A picture of the album"/>
    </div>
    <AudioCardBlock>
      <AudioInformation>
      <div>
        <SongTitle>Song about Loremious</SongTitle>
        <ArtistName>Ipsum Artist</ArtistName>
        <GenreContainer>
          <GenreTag>HOP HIP</GenreTag>
          <GenreTag>SKA RAP</GenreTag>
        </GenreContainer>
        </div>
        <AudioDataContainer>
        <AudioData>
          <FontAwesomeIcon icon={faCompactDisc} />
          <AudioDataNumber>
          Like#
          </AudioDataNumber>
        </AudioData>
        <AudioData>
          <FontAwesomeIcon icon={faCompactDisc} />
          <AudioDataNumber>
          Listen#
          </AudioDataNumber>
        </AudioData>
        <AudioData>
          <FontAwesomeIcon icon={faCompactDisc} />
          <AudioDataNumber>
          DL#
          </AudioDataNumber>
        </AudioData>
        </AudioDataContainer>
      </AudioInformation>
      <AudioControls>
        <AudioDurationContainer>
          13:37
        </AudioDurationContainer>
        <AudioControlButtonContainer>
        <FontAwesomeIcon icon={faCompactDisc} />
        </AudioControlButtonContainer>
      </AudioControls>
      </AudioCardBlock>
  </AudioCardContainer>
  )
}

AudioCard.propTypes = {
  audioData: PropTypes.object
}

export default AudioCard
