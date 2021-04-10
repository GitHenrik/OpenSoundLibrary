import React from 'react'
import styled from 'styled-components'
import { Select } from 'antd'

const SearchBoxForm = styled.form`
  background: #2E2E2E;
  padding: 1rem;
  margin-bottom: 2rem;
`

const SearchBoxHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`

const SearchBoxHeader = styled.div`
  font-family: Open Sans;
font-style: normal;
font-weight: 600;
font-size: 24px;
line-height: 33px;
color: #FFFFFF;
`

const SearchBoxSelector = styled.div`
  background: #2E2E2E;
`

const SearchBoxContentContainer = styled.div`
  display:flex;
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
color: #FFFFFF;
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

const Searchbox = () => {
  return (
    <SearchBoxForm>
      <SearchBoxHeaderContainer>
      <SearchBoxHeader>
       Find Sounds
      </SearchBoxHeader>
      <SearchBoxSelector>
      Grid / List
      </SearchBoxSelector>
      </SearchBoxHeaderContainer>
      <SearchBoxContentContainer>
      <SearchBoxItem>
        <SearchBoxItemHeader>Search</SearchBoxItemHeader>
        <SearchBoxInput type="text" placeholder="Track name"></SearchBoxInput>
      </SearchBoxItem>

      <SearchBoxItem>
      <SearchBoxItemHeader>Sort by</SearchBoxItemHeader>
      <Select options={sortOptions}/>
      </SearchBoxItem>
      <SearchBoxItem>
      <SearchBoxItemHeader>Category</SearchBoxItemHeader>
      <Select options={sortGenres}/>
      </SearchBoxItem>
      </SearchBoxContentContainer>
    </SearchBoxForm>
  )
}

export default Searchbox
