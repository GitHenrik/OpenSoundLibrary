import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { LesserBrand, MinorBrand } from './Brands'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompactDisc } from '@fortawesome/free-solid-svg-icons'

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (min-width: 768px) {
    flex-direction: row
  }
`

const PictureContainer = styled.img`
  object-fit: fill;
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
`

const AudioDataContainer = styled.div`
  flex-direction: row;
  display: inline-block;
`

const AudioData = styled.div`
  flex-direction: row;
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
  flex-direction: row;
  justify-content: space-between;
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

const AudioCard = ({ audioData }) => {
  return (
  <CardContainer>
    <PictureContainer src="#" alt="A picture of the album"/>
    <AudioCardBlock>
      <AudioInformation>
        <LesserBrand>Lorem Song</LesserBrand>
        <MinorBrand>Ipsum Artist</MinorBrand>
        <GenreContainer>
          <GenreTag>HOP HIP</GenreTag>
          <GenreTag>SKA RAP</GenreTag>
        </GenreContainer>
        <AudioDataContainer>
        <AudioData>
          <FontAwesomeIcon icon={faCompactDisc} />
          Like #
        </AudioData>
        <AudioData>
          <FontAwesomeIcon icon={faCompactDisc} />
          Listen #
        </AudioData>
        <AudioData>
          <FontAwesomeIcon icon={faCompactDisc} />
          Download #
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
  </CardContainer>
  )
}

AudioCard.propTypes = {
  audioData: PropTypes.object
}

export default AudioCard
