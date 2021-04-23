import React, { useState } from 'react'
import Breadcrumb from './Breadcrumb'
import styled from 'styled-components'
import { VerticalWrapper } from './utils/Wrappers'
import UploadImage from './UploadImage'
import trackImagePlaceholder from '../assets/images/trackImagePlaceholder.jpg'
import { API, Storage } from 'aws-amplify'
import { createTrack } from '../graphql/mutations'
import { listTracks } from '../graphql/queries'
import UploadTrack from './UploadTrack'

const UploadPageContainer = styled.div`
  margin: 0;
  background: linear-gradient(#65005a, #0b0033);
  color: #ffffff;
  width: 100%;
`

const UploadTrackForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: #2e2e2e;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);
  padding: 15px 19px;
  @media (min-width: 768px) {
    width: 768px;
    padding: 26px 45px;
  }
`

const UploadTrackFormHeader = styled.h1`
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 33px;
  color: #ffffff;
  padding-bottom: 0.75rem;
  @media (min-width: 768px) {
    padding-bottom: 1.5rem;
  }
`

const UploadTrackFormInfo = styled.div`
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 25px;
  color: #ffffff;
  padding-bottom: 2rem;
`

const SubmitTrackButton = styled.button`
  color: black;
`

const TempInput = styled.input`
  // TODO: delete after testing
  color: black;
`

const UploadPage = () => {
  // TODO: database operations for images and audio files
  const [trackName, setTrackName] = useState('')
  const [artistName, setArtistName] = useState('')
  const [trackFile, setTrackFile] = useState(null)
  const [trackFileName, setTrackFileName] = useState('')
  const [trackFileSize, setTrackFileSize] = useState('')
  const [trackFileLength, setTrackFileLength] = useState('')
  // const [trackGenres, setTrackGenres] = useState([])
  const [trackImageFileSize, setTrackImageFileSize] = useState('')
  const [trackImageName, setTrackImageName] = useState('')
  const [thumbnailImage, setThumbnailImage] = useState(trackImagePlaceholder)
  const [trackImageFile, setTrackImageFile] = useState(null)
  const [uploadProgress, setUploadProgress] = useState('0')

  const handleImageChange = (event) => {
    event.preventDefault()
    const imgFile = event.target.files[0]
    if (!imgFile) return
    // megabytes
    if (imgFile.size > 1024 * 1024 * 20) {
      alert('File size too large')
      return
    }
    setTrackImageFile(imgFile)
    setThumbnailImage(URL.createObjectURL(imgFile)) // blob URL object for thumbnail
    setTrackImageName(imgFile.name)
    setTrackImageFileSize(String((imgFile.size / (1024 * 1024)).toFixed(2)) + 'MB')
  }

  const handleTrackChange = async (event) => {
    const selectedFile = event.target.files[0]
    if (!selectedFile) return
    // megabytes
    if (selectedFile.size > 1024 * 1024 * 50) {
      alert('File size too large')
      return
    }
    setTrackFile(selectedFile)
    setTrackFileName(selectedFile.name)
    setTrackFileSize(String((selectedFile.size / (1024 * 1024)).toFixed(2)) + 'MB')
    setTrackFileLength('Track length mm:ss')
  }

  const handleTrackUpload = async (event) => {
    event.preventDefault()
    // upload image file
    await Storage.put(`images/${trackName}-${artistName}.jpg`, trackImageFile)
    // upload audio file
    await Storage.put(`audio/${trackName}-${artistName}.wav`, trackFile, {
      // track upload progress
      progressCallback(progress) {
        setUploadProgress(String((progress.loaded/progress.total*100).toFixed(1)))
      }
    })
    // TODO:  save image and track file sources and genres
    const newTrack = {
      imageSrc: 'image-source',
      name: trackName,
      artistName: artistName,
      genre: ['metal'],
      trackSrc: 'track-source',
      likes: 123,
      streams: 234,
      downloads: 543
    }
    await API.graphql({
      query: createTrack,
      variables: {
        input: newTrack
      }
    })
    console.log('Track uploaded')
    // TODO: route user back to front page 
  }

  const listData = async (event) => {
    // TODO: for testing, delete later
    event.preventDefault()
    const allTracks = await API.graphql({ query: listTracks })
    console.log('All data:')
    console.log(allTracks.data.listTracks.items)
  }

  return (
    <UploadPageContainer>
      <VerticalWrapper>
        <Breadcrumb />
        <UploadTrackForm onSubmit={handleTrackUpload}>
          <UploadTrackFormHeader>Upload sounds</UploadTrackFormHeader>
          <UploadTrackFormInfo>
            Fill in track name and artist name, select genres and optionally
            upload a track picture. Lastly, upload your track as MP3 or WAV
            file.
          </UploadTrackFormInfo>
          <h3>Track name</h3>
          <TempInput
            type="text"
            value={trackName}
            placeholder="Track *"
            onChange={(e) => setTrackName(e.target.value)}
          />
          <h3>Artist name</h3>
          <TempInput
            type="text"
            value={artistName}
            placeholder="Artist *"
            onChange={(e) => setArtistName(e.target.value)}
          />
          <UploadImage
            trackImage={thumbnailImage}
            trackImageName={trackImageName}
            trackImageFileSize={trackImageFileSize}
            handleImageChange={handleImageChange}
          />
          <UploadTrack
            handleTrackChange={handleTrackChange}
            trackFileLength={trackFileLength}
            trackFileName={trackFileName}
            trackFileSize={trackFileSize}
            uploadProgress={uploadProgress}
          />
          <SubmitTrackButton type="submit">Submit track</SubmitTrackButton>
          <SubmitTrackButton onClick={listData}>
            List all data (testing)
          </SubmitTrackButton>
        </UploadTrackForm>
      </VerticalWrapper>
    </UploadPageContainer>
  )
}

export default UploadPage
