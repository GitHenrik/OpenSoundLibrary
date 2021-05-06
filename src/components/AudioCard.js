import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faDownload,
  faHeadphones,
  faHeart,
  faPlay
} from '@fortawesome/free-solid-svg-icons'
import { AudioControlButtonWrapper } from './utils/Wrappers'

const AudioCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #111111;
  margin-bottom: 1.5rem;
  width: 100%;
  ${(props) =>
    props.listViewSelected &&
    `@media (min-width: 768px) {
    flex-direction: row;
    height: 241px;
    width: 768px;
    border-right: 4px solid #eaf27c;
  }`}
`

const PictureContainer = styled.img`
  width: 100%;
  height: 100vmin;
  object-fit: cover;
  @media (min-width: 768px) {
    width: ${(props) => (props.listViewSelected ? '241px' : '228px')};
    height: ${(props) => (props.listViewSelected ? '241px' : '228px')};
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
  background: #eaf27c;
  border-radius: 27.5px;
  font-style: normal;
  font-weight: bold;
  font-size: 0.75rem;
  line-height: 1rem;
  text-align: center;
  letter-spacing: -0.02em;
  color: #000000;
  margin-right: 1rem;
  @media (min-width: 768px) {
    margin-right: ${(props) => (props.listViewSelected ? '1rem' : '0.5rem')};
    padding: ${(props) => (props.listViewSelected ? '0 0.75rem' : '0 0.5rem')};
    font-size: ${(props) => (props.listViewSelected ? '0.75rem' : '0.5rem')};
    line-height: ${(props) => (props.listViewSelected ? '1rem' : '0.6875rem')};
  }
`

const AudioControls = styled.div`
  display: flex;
  flex-direction: column-reverse;
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
  @media (min-width: 768px) {
    padding: ${(props) => (props.listViewSelected ? '1.5rem' : '0.5rem')};
  }
`

const AudioDurationContainer = styled.div`
  left: 90%;
  right: 3.97%;
  top: 10.79%;
  bottom: 78.84%;
  font-style: normal;
  font-weight: normal;
  font-size: 1.125rem;
  line-height: 1.5rem;
  color: #b0b0b0;
  @media (min-width: 768px) {
    display: ${(props) => (props.listViewSelected ? 'inline-block' : 'none')};
  }
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
  display: flex;
  align-items: center;
  path {
    color: #ffffff;
  }
`

const AudioDataNumber = styled.div`
  padding: 0.5rem 1.5rem 0.5rem 0.5rem;
  display: inline-block;
  font-size: 0.875rem;
  color: #ffffff;
  @media (min-width: 768px) {
    padding: ${(props) =>
      props.listViewSelected ? '0.5rem 1.5rem 0.5rem 0.5rem' : '0.5rem'};
    font-size: ${(props) => (props.listViewSelected ? '0.625rem' : '0.875rem')};
  }
`

const SongTitle = styled.div`
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 1.625rem;
  line-height: 2.25rem;
  color: #ffffff;
  @media (min-width: 768px) {
    font-size: ${(props) => (props.listViewSelected ? '1.625rem' : '1rem')};
    line-height: ${(props) =>
      props.listViewSelected ? '2.25rem' : '1.375rem'};
  }
`

const ArtistName = styled.div`
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 1rem;
  line-height: 1.375rem;
  color: #b0b0b0;
  @media (min-width: 768px) {
    font-size: ${(props) => (props.listViewSelected ? '1rem' : '0.75rem')};
    line-height: ${(props) => (props.listViewSelected ? '1.375rem' : '1rem')};
  }
`

const AudioCard = ({ audioData, listViewSelected }) => {
  return (
    <AudioCardContainer listViewSelected={listViewSelected}>
      <div>
        <PictureContainer
          src={audioData.imageSrc}
          alt="A picture of the album"
          listViewSelected={listViewSelected}
        />
      </div>
      <AudioCardBlock listViewSelected={listViewSelected}>
        <AudioInformation>
          <div>
            <SongTitle listViewSelected={listViewSelected}>
              {audioData.name}
            </SongTitle>
            <ArtistName listViewSelected={listViewSelected}>
              {audioData.artistName}
            </ArtistName>
            <GenreContainer>
              {audioData.genre.map((genreName, i) => {
                return <GenreTag key={i}>{genreName}</GenreTag>
              })}
            </GenreContainer>
          </div>
          <AudioDataContainer>
            <AudioData>
              <FontAwesomeIcon icon={faHeart} />
              <AudioDataNumber listViewSelected={listViewSelected}>
                {audioData.likes}
              </AudioDataNumber>
            </AudioData>
            <AudioData>
              <FontAwesomeIcon icon={faHeadphones} />
              <AudioDataNumber listViewSelected={listViewSelected}>
                {audioData.streams}
              </AudioDataNumber>
            </AudioData>
            <AudioData>
              <FontAwesomeIcon icon={faDownload} />
              <AudioDataNumber listViewSelected={listViewSelected}>
                {audioData.downloads}
              </AudioDataNumber>
            </AudioData>
          </AudioDataContainer>
        </AudioInformation>
        <AudioControls>
          <AudioControlButtonContainer>
            <AudioControlButtonWrapper listViewSelected={listViewSelected}>
              <FontAwesomeIcon icon={faPlay} />
            </AudioControlButtonWrapper>
          </AudioControlButtonContainer>
          <AudioDurationContainer listViewSelected={listViewSelected}>
            13:37
          </AudioDurationContainer>
        </AudioControls>
      </AudioCardBlock>
    </AudioCardContainer>
  )
}

AudioCard.propTypes = {
  audioData: PropTypes.object,
  listViewSelected: PropTypes.bool
}

export default AudioCard
