import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { LesserBrand, MinorBrand } from './Brands'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompactDisc } from '@fortawesome/free-solid-svg-icons'

const AudioCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (min-width: 768px) {
    flex-direction: row;
    height: 241px;
    width: 729px;
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
    height: 100%;
  }
`

const AudioInformation = styled.div`
  flex-direction: column;
  margin: 0;
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
`

const AudioData = styled.div`
  flex-direction: row;
  flex-wrap: nowrap;
  display: inline-block;
  padding-right: 1rem;
`

const AudioControls = styled.div`
  flex-direction: column;
  justify-content: space-between;
`

const AudioControlButtonContainer = styled.div`
  justify-content: center;
`

const AudioCardBlock = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  padding: 1rem;
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

const AudioCard = ({ audioData }) => {
  return (
  <AudioCardContainer>
    <PictureContainer src={audioData.src} alt="A picture of the album"/>
    <AudioCardBlock>
      <AudioInformation>
        <LesserBrand>Song about Loremious Ipsumulation</LesserBrand>
        <MinorBrand>Ipsum Artist</MinorBrand>
        <GenreContainer>
          <GenreTag>HOP HIP</GenreTag>
          <GenreTag>SKA RAP</GenreTag>
        </GenreContainer>
        <AudioDataContainer>
        <AudioData>
          <FontAwesomeIcon icon={faCompactDisc} />
          <AudioDataNumber>
          LikeCount
          </AudioDataNumber>
        </AudioData>
        <AudioData>
          <FontAwesomeIcon icon={faCompactDisc} />
          <AudioDataNumber>
          ListenCount
          </AudioDataNumber>
        </AudioData>
        <AudioData>
          <FontAwesomeIcon icon={faCompactDisc} />
          <AudioDataNumber>
          DownloadCount
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
