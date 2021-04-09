import React from 'react'
import SearchBar from './SearchBar'
import RecentMedia from './RecentMedia'
const FrontPage = props => {
  return (  
    <div className="horizontal-container main-body">
      <div className="sidebar-left"/>
      <div className="vertical-container main-content">
        <div>
          <h3>Explore sounds. Upload your sounds.</h3>
        </div>
        <SearchBar searchValue={props.searchValue} handleSearchValue={props.handleSearchValue}/>
        <RecentMedia audioCards={props.audioCards}/>
        </div>
      
      <div className="sidebar-right"/>
    </div>
  )
}

export default FrontPage