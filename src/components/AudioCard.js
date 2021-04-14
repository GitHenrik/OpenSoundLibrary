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
import { WhiteIconWrapper, AudioControlButtonWrapper } from './utils/Wrappers'

const AudioCardListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (min-width: 768px) {
    flex-direction: row;
    height: 241px;
    width: 768px;
    border-right: 4px solid #eaf27c;
  }
  background: #111111;
  margin-bottom: 1.5rem;
`

const AudioCardGridContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #111111;
  margin-bottom: 1.5rem;
`

const ListPictureContainer = styled.img`
  width: 100%;
  height: 100vmin;
  object-fit: cover;
  @media (min-width: 768px) {
    width: 241px;
    height: 241px;
  }
`

const GridPictureContainer = styled.img`
  width: 100%;
  height: 100vmin;
  object-fit: cover;
  @media (min-width: 768px) {
    width: 228px;
    height: 228px;
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

const ListGenreTag = styled.div`
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
`

const GridGenreTag = styled.div`
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
    margin-right: 0.5rem;
    padding: 0 0.5rem;
    font-size: 0.5rem;
    line-height: 0.6875rem;
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

const ListAudioCardBlock = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  padding: 1.5rem;
`

const GridAudioCardBlock = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  padding: 1.5rem;
  @media (min-width: 768px) {
    padding: 0.5rem;
  }
`

const ListAudioDurationContainer = styled.div`
  left: 90%;
  right: 3.97%;
  top: 10.79%;
  bottom: 78.84%;
  font-style: normal;
  font-weight: normal;
  font-size: 1.125rem;
  line-height: 1.5rem;
  color: #b0b0b0;
`

const GridAudioDurationContainer = styled.div`
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
    display: none;
  }
`

const AudioDataContainer = styled.div`
  flex-direction: row;
  display: inline-block;
  display: flex;
  flex-wrap: nowrap;
`

const ListAudioData = styled.div`
  flex-direction: row;
  flex-wrap: nowrap;
  display: flex;
  align-items: center;
`

const GridAudioData = styled.div`
  flex-direction: row;
  flex-wrap: nowrap;
  display: flex;
  align-items: center;
`

const ListAudioDataNumber = styled.div`
  padding: 0.5rem 1.5rem 0.5rem 0.5rem;
  display: inline-block;
  font-size: 0.875rem;
  color: #ffffff;
`

const GridAudioDataNumber = styled.div`
  padding: 0.5rem 1.5rem 0.5rem 0.5rem;
  display: inline-block;
  font-size: 0.875rem;
  color: #ffffff;
  @media (min-width: 768px) {
    padding: 0.5rem;
    font-size: 0.625rem;
  }
`

const ListSongTitle = styled.div`
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 1.625rem;
  line-height: 2.25rem;
  color: #ffffff;
`

const GridSongTitle = styled.div`
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 1.625rem;
  line-height: 2.25rem;
  color: #ffffff;
  @media (min-width: 768px) {
    font-size: 1rem;
    line-height: 1.375rem;
  }
`

const ListArtistName = styled.div`
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 1rem;
  line-height: 1.375rem;
  color: #b0b0b0;
`

const GridArtistName = styled.div`
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 1rem;
  line-height: 1.375rem;
  @media (min-width: 768px) {
    font-size: 0.75rem;
    line-height: 1rem;
  }
  color: #b0b0b0;
`

const AudioCard = ({ audioData, listViewSelected }) => {
  const AudioCardContainer = listViewSelected
    ? AudioCardListContainer
    : AudioCardGridContainer
  const PictureContainer = listViewSelected
    ? ListPictureContainer
    : GridPictureContainer
  const SongTitle = listViewSelected ? ListSongTitle : GridSongTitle
  const ArtistName = listViewSelected ? ListArtistName : GridArtistName
  const AudioCardBlock = listViewSelected
    ? ListAudioCardBlock
    : GridAudioCardBlock
  const AudioDataNumber = listViewSelected
    ? ListAudioDataNumber
    : GridAudioDataNumber
  const AudioDurationContainer = listViewSelected
    ? ListAudioDurationContainer
    : GridAudioDurationContainer
  const AudioData = listViewSelected ? ListAudioData : GridAudioData
  const GenreTag = listViewSelected ? ListGenreTag : GridGenreTag

  return (
    <AudioCardContainer>
      <div>
        <PictureContainer src={audioData.src} alt="A picture of the album" />
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
              <WhiteIconWrapper>
                <FontAwesomeIcon icon={faHeart} />
              </WhiteIconWrapper>
              <AudioDataNumber>1337</AudioDataNumber>
            </AudioData>
            <AudioData>
              <WhiteIconWrapper>
                <FontAwesomeIcon icon={faHeadphones} />
              </WhiteIconWrapper>
              <AudioDataNumber>42</AudioDataNumber>
            </AudioData>
            <AudioData>
              <WhiteIconWrapper>
                <FontAwesomeIcon icon={faDownload} />
              </WhiteIconWrapper>
              <AudioDataNumber>314</AudioDataNumber>
            </AudioData>
          </AudioDataContainer>
        </AudioInformation>
        <AudioControls>
          <AudioControlButtonContainer>
            <AudioControlButtonWrapper>
              <FontAwesomeIcon icon={faPlay} />
            </AudioControlButtonWrapper>
          </AudioControlButtonContainer>
          <AudioDurationContainer>13:37</AudioDurationContainer>
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
