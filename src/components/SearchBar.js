import React from 'react'
import PropTypes from 'prop-types'

const SearchBar = ({ searchValue, handleSearchValue }) => {
  return (
    <div>
      <form id="music-search-form">
        <input
          id="music-search-bar"
          type="text"
          placeholder="Search for artists, songs, genres..."
          value={searchValue}
          onChange={handleSearchValue}
        />
        <button type="submit">
          <i id="music-search-button" className="fas fa-search"></i>
        </button>
      </form>
    </div>
  )
}

SearchBar.propTypes = {
  searchValue: PropTypes.string,
  handleSearchValue: PropTypes.func
}

export default SearchBar
