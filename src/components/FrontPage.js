import React from 'react'
import { Link } from 'react-router-dom'
import { faChevronRight, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from 'framer-motion'

import RecentMediaContent from './RecentMediaContent'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Input from './common/Input'
import OutlinedButton from './common/OutlinedButton'

import bgImage from '../assets/images/placeholderBackground.jpg'
import { VerticalWrapper } from './utils/Wrappers'

const Banner = styled.div`
  background-image: url(${bgImage});
  background-size: cover;
  position: relative;
  z-index: 1;
  height: 360px;

  &::after {
    background: linear-gradient(180deg, rgba(11, 0, 51, 0.9) 0%, rgba(55, 0, 49, 0.8) 47.92%, rgba(131, 34, 50, 0.3) 100%);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: "";
    display: block;
    position: absolute;
    z-index: -1;
  }

  h1 {
    font-size: 1.625rem;
    color: white;
    font-weight: 600;
    padding: 3rem 0;
  }

  @media(min-width: 400px) {
    height: 400px;
  }

  @media(min-width: 600px) {
    height: 400px;
    h1 {
      font-size: 2.5rem;
    }
  }

  @media(min-width: 768px) {
    height: 650px;
    h1 {
      font-size: 2.5rem;
      padding: 5rem 0;
    }
  }

  @media(min-width: 900px) {
    height: 650px;
    h1 {
      font-size: 2.5rem;
      padding: 6rem 0;
    }
  }
`

const BannerImage = styled.div`
  background-image: ${require('../assets/images/placeholderBackground.jpg')};
  position: absolute;
`

const BannerContent = styled.div`
  z-index: 2;
  padding: 0 1rem;

  @media(min-width: 400px) {
    width: 400px;
    margin: auto;
  }

  @media(min-width: 400px) {
    width: 400px;
    margin: auto;
  }

  @media(min-width: 768px) {
    width: 486px;
    margin: auto;
  }

  @media(min-width: 900px) {
    width: 800px;
    margin: auto;

    h1 {
      padding-left: 1rem;
      padding-right: 1rem;
    }

    .input-wrapper {
      width: 486px;
      margin: auto;
    }
  }
`

const RecentContentBackground = styled.div`
  background: linear-gradient(180deg, #65005A 0%, rgba(11, 0, 51, 0.9) 100%);
`

const RecentContent = styled.section`
  margin-top: -60px;
  position: relative;
  z-index: 2;
  header {
    color: #ffffff;
    display: flex;
    height: 60px;
    align-items: center;
    justify-content: space-between;
    padding: 0 0.5rem;

    h2 {
      font-size: 1.25rem;
      font-weight: 600;
      margin: 0;
      color: #ffffff;
    }
  }

  @media(min-width: 400px) {
    header {
      padding: 0 1rem;
    }
  }

  @media(min-width: 768px) {
    width: 768px;
    margin-left: auto;
    margin-right: auto;
    margin-top: -270px;

    header {
      padding: 0;

      h2 {
        font-size: 1.5rem;
      }
    }
  }
`

const ShowAllLink = styled(Link)`
  color: #ffffff;
  span {
    font-weight: 400;
    font-size: 1.125rem;
    margin-right: 0.5rem;
  }

  &:hover, &:active, &:focus {
    color: #ffffff
  }
`

const FindMoreSoundsWrapper = styled(VerticalWrapper)`
  padding: 1rem 0 2rem;
  position: relative;
  margin: auto;
`

const getVariants = (axis = 'y', amount = 0) => ({
  hidden: {
    opacity: 0,
    transform: `translate${axis.toUpperCase()}(${amount}px)`
  },
  visible: {
    opacity: 1,
    transform: `translate${axis.toUpperCase()}(0px)`
  }
})

const getTransition = (delay = 0) => ({ duration: 0.5, delay, ease: 'easeOut' })

const FrontPage = (props) => {
  return (
    <main>
      <Banner>
        <BannerImage />
        <BannerContent>
          <motion.h1
            variants={getVariants('y', -30)}
            animate="visible"
            initial="hidden"
            transition={getTransition()}
          >
            Explore sounds. Upload your sounds.
          </motion.h1>
          <motion.div
            className="input-wrapper"
            variants={getVariants('y', -30)}
            animate="visible"
            initial="hidden"
            transition={getTransition(0.5)}
          >
            <Input
              fullWidth
              icon={<FontAwesomeIcon icon={faSearch} />}
              placeholder="Search for artists, songs, genres..."
            />
          </motion.div>
        </BannerContent>
      </Banner>
      <RecentContentBackground>
        <RecentContent>
          <header>
            <motion.h2
              variants={getVariants('x', -30)}
              animate="visible"
              initial="hidden"
              transition={getTransition(1)}
            >
              Recent uploads
            </motion.h2>
            <motion.span
              variants={getVariants('x', 30)}
              animate="visible"
              initial="hidden"
              transition={getTransition(1)}
            >
              <ShowAllLink to="/songs">
                <span>Show all</span>
                <FontAwesomeIcon icon={faChevronRight} />
              </ShowAllLink>
            </motion.span>
          </header>
          <motion.div
            variants={getVariants('y', 30)}
            animate="visible"
            initial="hidden"
            transition={getTransition(1)}
          >
            <RecentMediaContent audioCards={props.audioCards} />
          </motion.div>
          <motion.div
            variants={getVariants('y', 30)}
            animate="visible"
            initial="hidden"
            transition={getTransition(1.5)}
          >
            <FindMoreSoundsWrapper>
              <OutlinedButton>Find more sounds</OutlinedButton>
            </FindMoreSoundsWrapper>
          </motion.div>
        </RecentContent>
      </RecentContentBackground>
    </main>
  )
}

FrontPage.propTypes = {
  searchValue: PropTypes.string,
  handleSearchValue: PropTypes.func,
  audioCards: PropTypes.array
}

export default FrontPage
