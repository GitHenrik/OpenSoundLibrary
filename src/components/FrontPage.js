import React from 'react'
import SearchBar from './SearchBar'
import RecentMedia from './RecentMedia'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { SloganBrand } from './Brands'

const SidebarLeft = styled.div`
  display: ${(props) => (props.hideOnMobile ? 'none' : 'block')};
  flex: 1;
  order: 1;
  @media (min-width: 768px) {
    display: block;
  }
`

const SidebarRight = styled.div`
  display: ${(props) => (props.hideOnMobile ? 'none' : 'block')};
  flex: 1;
  order: 3;
  @media (min-width: 768px) {
    display: block;
  }
`

const MainContent = styled.div`
  flex: 3;
  order: 2;
`

const Banner = styled.div`
  text-align: center;
`

const SearchBarContainer = styled.div`
  text-align: center;
`

const FrontPageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background: linear-gradient(#65005a, #0b0033);
`

const FrontPage = (props) => {
  return (
    <FrontPageContainer>
      <SidebarLeft hideOnMobile />
      <MainContent>
        <Banner>
          <SloganBrand>Explore sounds. Upload your sounds.</SloganBrand>
        </Banner>
        <SearchBarContainer>
          <SearchBar
            searchValue={props.searchValue}
            handleSearchValue={props.handleSearchValue}
          />
        </SearchBarContainer>
        <RecentMedia audioCards={props.audioCards} />
      </MainContent>
      <SidebarRight hideOnMobile />
    </FrontPageContainer>
  )
}

FrontPage.propTypes = {
  searchValue: PropTypes.string,
  handleSearchValue: PropTypes.func,
  audioCards: PropTypes.array
}

export default FrontPage
