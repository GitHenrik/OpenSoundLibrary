import MainHeader from './components/MainHeader'
import Footer from './components/Footer'
import FrontPage from './components/FrontPage'
import AboutPage from './components/AboutPage'
import SongPage from './components/SongPage'
import placeholder1 from './assets/images/placeholder1.jpg'
import placeholder2 from './assets/images/placeholder2.jpg'
import placeholder3 from './assets/images/placeholder3.jpg'
import placeholder4 from './assets/images/placeholder4.jpg'
import './css/base.css'
import Constants from './Constants'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import React, { useState, useEffect } from 'react'

const App = () => {
  const [searchValue, setSearchValue] = useState(
    'Search for artists, songs, genres...'
  )
  const [audioCards, setAudioCards] = useState([])

  const tempAudioCards = [
    {
      id: 0,
      song_name: 'Super Song',
      artist: 'Super Artist',
      src: placeholder1
    },
    {
      id: 1,
      song_name: 'Mega Song',
      artist: 'Mega Artist',
      src: placeholder2
    },
    {
      id: 2,
      song_name: 'Mega Song',
      artist: 'Mega Artist',
      src: placeholder3
    },
    {
      id: 3,
      song_name: 'Mega Song',
      artist: 'Mega Artist',
      src: placeholder4
    }
  ]

  useEffect(() => {
    setAudioCards(tempAudioCards)
  }, [])

  const handleSearchValue = (event) => {
    setSearchValue(event.target.value)
  }

  return (
    <Router>
      <MainHeader />
      <Switch>
        <Route path={Constants.singleSongPage}>
          <div>secret song page</div>
        </Route>
        <Route path={Constants.songPage}>
          <SongPage audioCards={audioCards} />
        </Route>
        <Route path={Constants.aboutPage}>
          <AboutPage />
        </Route>
        <Route path={Constants.frontPage}>
          <FrontPage
            audioCards={audioCards}
            searchValue={searchValue}
            handleSearchValue={handleSearchValue}
          />
        </Route>
      </Switch>

      <Footer />
    </Router>
  )
}

export default App
