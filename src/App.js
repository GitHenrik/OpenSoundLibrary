import MainHeader from './components/MainHeader'
import Footer from './components/Footer'
import FrontPage from './components/FrontPage'
import AboutPage from './components/AboutPage'
import styled from 'styled-components'
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

  const Divider = styled.div`
    height: 6px;
    width: 100%;
    background: linear-gradient(to right, #370031, #eaf27c);
  `

  return (
    <Router>
    <MainHeader/>
    <Divider/>
    <Switch>

      <Route path="/songs/:id"><div>secret song page</div></Route>
      <Route path="/about"><AboutPage/></Route>
      <Route path="/"><FrontPage audioCards={audioCards} searchValue={searchValue} handleSearchValue={handleSearchValue}/></Route>

    </Switch>

    <Footer/>
    </Router>
  )
}

export default App
