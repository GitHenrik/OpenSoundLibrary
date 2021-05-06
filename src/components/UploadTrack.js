import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { getFileMetaData } from '../util/file'

const UploadTrack = ({ file, handleTrackChange, uploadProgress }) => {
  const { fileLength, fileName, fileSize } = getFileMetaData(file)

  return (
    <UploadTrackWrapper>
      <UploadTrackFileWrapper>
        <div className="uploadTrackHeader">Upload track file *</div>
        <UploadTrackButtonWrapper>
          <input
            id="uploadTrackInput"
            type="file"
            accept="audio/wav,audio/mp3"
            onChange={handleTrackChange}
          />
          <div>Success icon</div>
        </UploadTrackButtonWrapper>
      </UploadTrackFileWrapper>
      <ProgressBarWrapper>
        <div>Upload progress: {uploadProgress} %</div>
      </ProgressBarWrapper>
      <UploadTrackInfoWrapper>
        <div className="uploadTrackHeader">Track details</div>
        <div className="trackInfoSubHeader">
          File name:<div className="trackInfo">{fileName}</div>
        </div>
        <div className="trackInfoSubHeader">
          Track size:<div className="trackInfo">{fileSize}</div>
        </div>
        <div className="trackInfoSubHeader">
          Track length:<div className="trackInfo">{fileLength}</div>
        </div>
      </UploadTrackInfoWrapper>
    </UploadTrackWrapper>
  )
}

UploadTrack.propTypes = {
  file: PropTypes.object,
  handleTrackChange: PropTypes.func
}

const UploadTrackWrapper = styled.div`
  display: flex;
  margin: 0;
  padding: 0;
  flex-direction: column;
  .uploadTrackHeader {
    font-family: Open Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 19px;
    color: #ffffff;
    @media (min-width: 768px) {
      font-size: 18px;
      line-height: 25px;
    }
  }
  .trackInfoSubHeader {
    display: flex;
    flex-direction: row;
    font-family: Open Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    color: #ffffff;
    @media (min-width: 768px) {
      font-size: 14px;
      line-height: 19px;
    }
  }
  .trackInfo {
    font-family: Open Sans;
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 16px;
    color: #ffffff;
    @media (min-width: 768px) {
      font-size: 14px;
      line-height: 19px;
    }
  }
`
const UploadTrackButtonWrapper = styled.div`
  display: flex;
`

const UploadTrackInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const ProgressBarWrapper = styled.div``

const UploadTrackFileWrapper = styled.div`
  #uploadTrackInput {
    color: rgba(0, 0, 0, 0);
    font-family: Open Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 19px;
    color: #2e2e2e;
  }
  width: 100%;
  @media (min-width: 768px) {
    #uploadTrackInput {
      font-size: 18px;
      line-height: 25px;
    }
  }
`

UploadTrack.propTypes = {
  handleTrackChange: PropTypes.func,
  trackFileName: PropTypes.string,
  trackFileSize: PropTypes.string,
  trackFileLength: PropTypes.string,
  uploadProgress: PropTypes.string
}

export default UploadTrack
