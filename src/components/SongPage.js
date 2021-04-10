import React from 'react'
import Breadcrumb from './Breadcrumb'
import styled from 'styled-components'
import AudioCard from './AudioCard'
import Searchbox from './Searchbox'

const SongPageContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: linear-gradient(#65005a, #0b0033);
`

const SongPage = () => {
  return (<SongPageContent>
  <Breadcrumb/>
  <Searchbox/>
  <AudioCard/>
  <AudioCard/>
  </SongPageContent>)
}

export default SongPage
