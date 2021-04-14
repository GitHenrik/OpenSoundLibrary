import React from 'react'
import Breadcrumb from './Breadcrumb'
import styled from 'styled-components'
import RecentMedia from './RecentMedia'
import Searchbox from './Searchbox'
import PropTypes from 'prop-types'

const SongPageContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: linear-gradient(#65005a, #0b0033);
`

const SongPageHeaderContainer = styled.div`
  width: 100%;
  @media (min-width: 768px) {
    width: 768px;
    margin: auto;
    padding: 1rem 0;
  }
`

const SongPage = ({ audioCards }) => {
  return (
    <SongPageContent>
      <SongPageHeaderContainer>
        <Breadcrumb />
        <Searchbox />
      </SongPageHeaderContainer>
      <RecentMedia audioCards={audioCards} />
    </SongPageContent>
  )
}

SongPage.propTypes = {
  searchValue: PropTypes.string,
  handleSearchValue: PropTypes.func,
  audioCards: PropTypes.array
}

export default SongPage
