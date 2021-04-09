import React from 'react';

const SearchBar = ({searchValue, handleSearchValue}) => {
  return (
        <div>
          <form id="music-search-form">
          <input 
          id="music-search-bar" 
          type="text" 
          placeholder="Search for artists, songs, genres..."
          value={searchValue}
          onChange={handleSearchValue}/>
          <button type="submit"><i id="music-search-button" className="fas fa-search"></i></button>
          </form>
        </div>
  )

}

export default SearchBar