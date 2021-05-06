import React, { useState } from 'react'
import Breadcrumb from './Breadcrumb'
import styled from 'styled-components'
import { VerticalWrapper } from './utils/Wrappers'
import UploadImage from './UploadImage'
import { API, Storage } from 'aws-amplify'
import { createTrack } from '../graphql/mutations'
import UploadTrack from './UploadTrack'
import awsExports from '../aws-exports'
import { v4 as uuid } from 'uuid'
import { Formik, useField } from 'formik'
import PropTypes from 'prop-types'
import Label from './common/Label'
import Input from './common/Input'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompactDisc, faUser } from '@fortawesome/free-solid-svg-icons'
import * as Yup from 'yup'
import { getFileMetaData } from '../util/file'
import { Redirect } from 'react-router'

const UploadPageContainer = styled.div`
  margin: 0;
  background: linear-gradient(#65005a, #0b0033);
  color: #ffffff;
  width: 100%;
  padding-bottom: 5rem;
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
  button {
    color: black;
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

const FormikField = ({ label, icon, ...props }) => {
  const [field, meta, helpers] = useField(props)
  return (
    <>
      <Label inputId="1" label={label} />
      <Input
        name={field.name}
        value={field.value}
        onChange={field.onChange}
        onBlur={field.onBlur}
        icon={icon}
      />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  )
}

FormikField.propTypes = {
  label: PropTypes.string,
  icon: PropTypes.node
}

const FormikUploadField = ({ render, name }) => {
  const [field, meta, helpers] = useField(name)

  const handleFileChange = (event) => {
    event.preventDefault()
    const file = event.target.files[0]
    if (!file) return
    // megabytes
    if (file.size > 1024 * 1024 * 20) {
      helpers.setError('File size too large')
    }
    helpers.setValue(file)
  }

  return render(field.value, handleFileChange)
}

FormikUploadField.propTypes = {
  render: PropTypes.func,
  name: PropTypes.string
}

const initializeState = () => {
  return {
    trackName: '',
    artistName: '',
    genre: [],
    trackFile: null,
    imageFile: null
  }
}

// TODO: add validation for files and images
const UploadSchema = Yup.object().shape({
  trackName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  artistName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  genre: Yup.array().of(Yup.string())
  // trackFile: Yup.object({}).required('Required'),
  // imageFile: Yup.object().required('Required'),
})

const UploadPage = () => {
  const [uploadProgress, setUploadProgress] = useState('0')
  const [trackSubmitted, setTrackSubmitted] = useState(false)

  const handleSubmit = async (values) => {
    console.log('submitting')
    const { trackName, artistName, trackFile, imageFile } = values

    const bucket = awsExports.aws_user_files_s3_bucket
    const region = awsExports.aws_user_files_s3_bucket_region

    const imageFileMetaData = getFileMetaData(imageFile)
    if (!imageFileMetaData.fileName) {
      console.log('missing image file')
      return
    }
    const imageKey = `images/${uuid()}_${imageFileMetaData.fileName}`
    const imageSource = `https://${bucket}.s3.${region}.amazonaws.com/public/${imageKey}`

    const trackFileMetaData = getFileMetaData(trackFile)
    if (!trackFileMetaData.fileName) {
      console.log('missing track file')
      return
    }
    const trackKey = `audio/${uuid()}_${trackFileMetaData.fileName}`
    const trackSource = `https://${bucket}.s3.${region}.amazonaws.com/public/${trackKey}`

    // TODO: get genre information from the form

    // upload image and audio files
    try {
      await Storage.put(imageKey, imageFile)
      await Storage.put(trackKey, trackFile, {
        // track upload progress
        progressCallback(progress) {
          setUploadProgress(
            String(((progress.loaded / progress.total) * 100).toFixed(1))
          )
        }
      })
    } catch (error) {
      console.log('error: ', error)
    }

    const newTrack = {
      imageSrc: imageSource,
      name: trackName,
      artistName: artistName,
      genre: ['Pop', 'Rock'],
      trackSrc: trackSource,
      likes: 0,
      streams: 0,
      downloads: 0
    }
    await API.graphql({
      query: createTrack,
      variables: {
        input: newTrack
      }
    })
    console.log('Track uploaded')
    setTrackSubmitted(true)
  }

  // route user back to the front page after submitting a track
  if (trackSubmitted) return <Redirect to="/" />

  return (
    <UploadPageContainer>
      <VerticalWrapper>
        <Breadcrumb />
        <Formik
          initialValues={initializeState()}
          onSubmit={handleSubmit}
          validationSchema={UploadSchema}
          validateOnBlur
          validateOnChange={false}
        >
          {(props) => (
            <UploadTrackForm>
              <UploadTrackFormHeader>Upload sounds</UploadTrackFormHeader>
              <UploadTrackFormInfo>
                Fill in track name and artist name, select genres and optionally
                upload a track picture. Lastly, upload your track as MP3 or WAV
                file.
              </UploadTrackFormInfo>
              <FormikField
                name="trackName"
                label="Track name"
                icon={<FontAwesomeIcon icon={faCompactDisc} />}
              />
              <FormikField
                name="artistName"
                label="Artist name"
                icon={<FontAwesomeIcon icon={faUser} />}
              />
              <FormikUploadField
                name="imageFile"
                render={(file, handleChange) => (
                  <UploadImage file={file} handleImageChange={handleChange} />
                )}
              />
              <FormikUploadField
                name="trackFile"
                render={(file, handleChange) => (
                  <UploadTrack
                    file={file}
                    handleTrackChange={handleChange}
                    uploadProgress={uploadProgress}
                  />
                )}
              />
              {/* eslint-disable-next-line react/prop-types */}
              <button
                type="button"
                // eslint-disable-next-line react/prop-types
                onClick={() => props.handleSubmit()}
              >
                Submit track
              </button>
            </UploadTrackForm>
          )}
        </Formik>
      </VerticalWrapper>
    </UploadPageContainer>
  )
}

export default UploadPage
