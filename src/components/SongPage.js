import React, { useState } from 'react'
import Breadcrumb from './Breadcrumb'
import styled from 'styled-components'
import RecentMediaContent from './RecentMediaContent'
import SearchBox from './SearchBox'
import PropTypes from 'prop-types'
import { VerticalWrapper } from './utils/Wrappers'

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
  const [listViewSelected, setListViewSelected] = useState(true)

  const handleViewSelection = () => {
    setListViewSelected(!listViewSelected)
  }

  return (
    <SongPageContent>
      <VerticalWrapper>
        <SongPageHeaderContainer>
          <Breadcrumb />
          <SearchBox
            listViewSelected={listViewSelected}
            handleViewSelection={handleViewSelection}
          />
        </SongPageHeaderContainer>
        <RecentMediaContent
          audioCards={audioCards}
          listViewSelected={listViewSelected}
        />
      </VerticalWrapper>
    </SongPageContent>
  )
}

SongPage.propTypes = {
  searchValue: PropTypes.string,
  handleSearchValue: PropTypes.func,
  audioCards: PropTypes.array
}

export default SongPage
