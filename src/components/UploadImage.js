import React from 'react'
import { HorizontalWrapper, AlignLeftWrapper } from './utils/Wrappers'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const UploadImageWrapper = styled.div`
  #uploadImg {
    color: rgba(0, 0, 0, 0);
  }
  width: 100%;
`

const UploadImageHeader = styled.h3`
  color: #ffffff;
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;
`

const UploadImageSubHeader = styled.h3`
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 19px;
  color: #ffffff;
  padding-bottom: 18px;
  margin-bottom: 0;
`

const ImageContainer = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  margin-right: 27px;
  @media (min-width: 768px) {
    width: 120px;
    height: 120px;
  }
`

const ImageInfoWrapper = styled.div`
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 19px;
`

const ImageUploadButton = styled.input`
  margin-bottom: 23px;
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;
  color: #2e2e2e;
`

const ImageInfoTitle = styled.div`
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
  color: #ffffff;
`

const ImageInfo = styled.div`
  display: inline-block;
  font-family: Open Sans;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 19px;
  color: #ffffff;
`

const UploadImage = ({
  trackImage,
  trackImageName,
  trackImageFileSize,
  handleImageChange
}) => {
  return (
    <UploadImageWrapper>
      <AlignLeftWrapper>
        <ImageInfoWrapper>
          <UploadImageHeader>Track Image</UploadImageHeader>
          <HorizontalWrapper>
            <AlignLeftWrapper>
              <UploadImageSubHeader>Image preview</UploadImageSubHeader>
              <ImageContainer src={trackImage} alt="Track image" />
            </AlignLeftWrapper>
            <AlignLeftWrapper>
              <UploadImageSubHeader>Image upload and info</UploadImageSubHeader>
              <ImageUploadButton
                type="file"
                name="uploadedImage"
                id="uploadImg"
                accept="image/jpeg"
                onChange={handleImageChange}
              />
              <ImageInfoTitle>
                File name: <ImageInfo>{trackImageName}</ImageInfo>
              </ImageInfoTitle>
              <ImageInfoTitle>
                File size: <ImageInfo>{trackImageFileSize}</ImageInfo>
              </ImageInfoTitle>
            </AlignLeftWrapper>
          </HorizontalWrapper>
        </ImageInfoWrapper>
      </AlignLeftWrapper>
    </UploadImageWrapper>
  )
}

UploadImage.propTypes = {
  trackImage: PropTypes.string,
  trackImageFileSize: PropTypes.string,
  trackImageName: PropTypes.string,
  handleImageChange: PropTypes.func
}

export default UploadImage
