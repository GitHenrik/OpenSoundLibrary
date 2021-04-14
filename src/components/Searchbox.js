import React from 'react'
import styled from 'styled-components'
import { Select } from 'antd'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThList, faBorderAll } from '@fortawesome/free-solid-svg-icons'

const SearchBoxForm = styled.form`
  background: #2e2e2e;
  padding: 1rem;
  margin-bottom: 2rem;
`

const SearchBoxHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  height: 100%;
`

const SearchBoxHeader = styled.div`
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 33px;
  color: #ffffff;
`

const SearchBoxSelector = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: flex;
  }
`

const SelectedComponent = styled.div`
  background: #eaf27c;
  color: #2e2e2e;
  border: 1px solid #eaf27c;
  width: 34px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const NonSelectedComponent = styled.div`
  background: #2e2e2e;
  color: #eaf27c;
  border: 1px solid #eaf27c;
  width: 34px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const SearchBoxContentContainer = styled.div`
  display: flex;
`

const SearchBoxItem = styled.div`
  margin-right: 1rem;
`

const SearchBoxItemHeader = styled.div`
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 25px;
  color: #ffffff;
`

const SearchBoxInput = styled.input`
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;
  color: #454545;
`

const sortOptions = [
  { value: 'most-recent', label: 'Most recent' },
  { value: 'most-liked', label: 'Most liked' }
]

const sortGenres = [
  { value: 'rock', label: 'Rock' },
  { value: 'pop', label: 'Pop' },
  { value: 'classical', label: 'Classical' }
]

const SearchBox = (props) => {
  const ListSelectorView = props.listViewSelected
    ? SelectedComponent
    : NonSelectedComponent
  const GridSelectorView = props.listViewSelected
    ? NonSelectedComponent
    : SelectedComponent

  return (
    <SearchBoxForm>
      <SearchBoxHeaderContainer>
        <SearchBoxHeader>Find Sounds</SearchBoxHeader>
        <SearchBoxSelector onClick={props.handleViewSelection}>
          <ListSelectorView>
            <FontAwesomeIcon icon={faThList} />
          </ListSelectorView>
          <GridSelectorView>
            <FontAwesomeIcon icon={faBorderAll} />
          </GridSelectorView>
        </SearchBoxSelector>
      </SearchBoxHeaderContainer>
      <SearchBoxContentContainer>
        <SearchBoxItem>
          <SearchBoxItemHeader>Search</SearchBoxItemHeader>
          <SearchBoxInput type="text" placeholder="Track name"></SearchBoxInput>
        </SearchBoxItem>

        <SearchBoxItem>
          <SearchBoxItemHeader>Sort by</SearchBoxItemHeader>
          <Select options={sortOptions} />
        </SearchBoxItem>
        <SearchBoxItem>
          <SearchBoxItemHeader>Category</SearchBoxItemHeader>
          <Select options={sortGenres} />
        </SearchBoxItem>
      </SearchBoxContentContainer>
    </SearchBoxForm>
  )
}

SearchBox.propTypes = {
  handleViewSelection: PropTypes.func,
  listViewSelected: PropTypes.bool
}

export default SearchBox
