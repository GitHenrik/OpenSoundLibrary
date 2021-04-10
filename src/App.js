import MainHeader from './components/MainHeader'
import Footer from './components/Footer'
import FrontPage from './components/FrontPage'
import AboutPage from './components/AboutPage'
import SongPage from './components/SongPage'
import './css/base.css'
import {
  BrowserRouter as Router,
  Switch, Route
} from 'react-router-dom'
import React, { useState, useEffect } from 'react'

const App = () => {
  const [searchValue, setSearchValue] = useState('Search for artists, songs, genres...')
  const [audioCards, setAudioCards] = useState([])

  const tempAudioCards = [
    {
      id: 0,
      song_name: 'Super Song',
      artist: 'Super Artist'
    },
    {
      id: 1,
      song_name: 'Mega Song',
      artist: 'Mega Artist'
    }
  ]

  useEffect(() => {
    setAudioCards(tempAudioCards)
  }, [])

  const handleSearchValue = event => {
    setSearchValue(event.target.value)
  }

  return (
    <Router>
    <MainHeader/>
    <Switch>

      <Route path="/songs/:id"><div>secret song page</div></Route>
      <Route path="/songs"><SongPage/></Route>
      <Route path="/about"><AboutPage/></Route>
      <Route path="/"><FrontPage audioCards={audioCards} searchValue={searchValue} handleSearchValue={handleSearchValue}/></Route>

    </Switch>

    <Footer/>
    </Router>
  )
}

export default App
