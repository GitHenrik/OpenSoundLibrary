import React from 'react'
import '../css/base.css'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompactDisc } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'

import { Brand } from './Brands'
import Dropdown from './Dropdown'

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
    padding: 1rem 0;
  }
`

const menuLinks = [
  {
    label: 'Find sounds',
    href: '/'
  },
  {
    label: 'Upload',
    href: '/'
  },
  {
    label: 'About',
    href: '/'
  },
  {
    label: 'Source code',
    href: '/'
  }
]

const userLinks = [
  {
    label: 'Sign in with Google',
    href: '/'
  },
  {
    label: 'About',
    href: '/'
  }
]

const MainHeader = () => {
  return (
    <Wrapper>
      <Header>
        <Dropdown links={menuLinks}>
          <FontAwesomeIcon size="lg" icon={faCompactDisc} />
        </Dropdown>
        <Brand>Open Sound Lib</Brand>
        <Dropdown links={userLinks}>
          <FontAwesomeIcon size="lg" icon={faUser} />
        </Dropdown>
      </Header>
    </Wrapper>
  )
}

export default MainHeader
