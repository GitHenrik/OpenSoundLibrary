import React from 'react'
import '../css/base.css'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompactDisc } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import PropTypes from 'prop-types'

const Wrapper = styled.div`
  background-color: #111111;
  width: 100%;
  height: 5.1875rem;
`

const Header = styled.header`
  height: 100%;
  display: flex;
  justify-content: space-between;
  background: #111111;
  position: sticky;
  top: 0;
  padding: 1rem; 
  align-items: center;
  @media (min-width: 768px) {
    width: 768px;
    margin: auto;
    padding: 2rem 0;
  }
`

const Brand = styled.h1`
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 33px;
  letter-spacing: -0.05em;
  color: #FFFFFF;
  margin: 0;
`

const IconButton = styled.button`
  background: none;
  border: none;
  display: ${props => props.hideOnMobile ? 'none' : 'block'};
  @media (min-width: 768px) {
    display: block;
  }
`

IconButton.propTypes = {
  hideOnMobile: PropTypes.bool
}

const MainHeader = () => {
  return (
    <Wrapper>
      <Header>
        <IconButton hideOnMobile>
          <FontAwesomeIcon icon={faCompactDisc} />
        </IconButton>
        <Brand>Open Sound Lib</Brand>
        <IconButton>
          <FontAwesomeIcon size="lg" icon={faUser} />
        </IconButton>
      </Header>
    </Wrapper>
  )
}

export default MainHeader
