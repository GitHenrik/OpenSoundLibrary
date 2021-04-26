import MainHeader from './components/MainHeader'
import Footer from './components/Footer'
import FrontPage from './components/FrontPage'
import AboutPage from './components/AboutPage'
import SongPage from './components/SongPage'
import UploadPage from './components/UploadPage'
import placeholder1 from './assets/images/placeholder1.jpg'
import placeholder2 from './assets/images/placeholder2.jpg'
import placeholder3 from './assets/images/placeholder3.jpg'
import placeholder4 from './assets/images/placeholder4.jpg'
import './css/base.css'
import Constants from './Constants'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import { API } from 'aws-amplify'
import { listTracks } from './graphql/queries'
// require('dotenv').config()

const App = () => {
  const initializeData = async () => {

    const media = await API.graphql({ query: listTracks })
    const retrievedTracks = media.data.listTracks.items
    const updatedAudioCards = []
    retrievedTracks.map((track) => {
      return updatedAudioCards.push({
        artistName: track.artistName,
        downloads: track.downloads,
        genre: track.genre,
        id: track.id,
        imageSrc: track.imageSrc,
        likes: track.likes,
        name: track.name,
        streams: track.streams,
        trackSrc: track.trackSrc
      })
    })
    setAudioCards(updatedAudioCards)
  }

  const [searchValue, setSearchValue] = useState(
    'Search for artists, songs, genres...'
  )

  const tempAudioCards = [
    {
      id: 0,
      artistName: 'Artist 1',
      downloads: 123,
      genre: ['ska'],
      imageSrc: placeholder1,
      likes: 321,
      name: 'Orem',
      streams: 45,
      trackSrc: '/'
    },
    {
      id: 1,
      artistName: 'Artist 2',
      downloads: 1,
      genre: ['rock'],
      imageSrc: placeholder2,
      likes: 31,
      name: 'Lorem',
      streams: 5,
      trackSrc: '/'
    },
    {
      id: 2,
      artistName: 'Artist 3',
      downloads: 12,
      genre: ['pop'],
      imageSrc: placeholder3,
      likes: 31,
      name: 'Lipsum',
      streams: 4,
      trackSrc: '/'
    },
    {
      id: 3,
      artistName: 'Artist 4',
      downloads: 3,
      genre: ['rock'],
      imageSrc: placeholder4,
      likes: 1,
      name: 'Ipsum',
      streams: 0,
      trackSrc: '/'
    }
  ]

  const [audioCards, setAudioCards] = useState(tempAudioCards)

  useEffect(() => {
    initializeData()
  }, []) // TODO: fetch data again after uploads

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
        <Route path={Constants.uploadPage}>
          <UploadPage />
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
