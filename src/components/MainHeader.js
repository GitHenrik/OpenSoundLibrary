import React, { useMemo } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompactDisc } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { Auth } from 'aws-amplify'
import '../css/base.css'
import { Brand } from './Brands'
import Dropdown from './Dropdown'
import useUser from '../hooks/useUser'
import Constants from '../Constants'

const Wrapper = styled.div`
  background-color: #111111;
  width: 100%;
  height: 5.1875rem;
`
const Divider = styled.div`
  height: 4px;
  width: 100%;
  background: linear-gradient(to right, #370031, #eaf27c);
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
    to: '/songs'
  },
  {
    label: 'Upload',
    to: '/upload'
  },
  {
    label: 'About',
    to: '/about'
  },
  {
    label: 'Source code',
    href: Constants.sourceCodePage
  }
]

/**
 * Return user menu links depending whether user is authenticated or not
 * @param {Boolean} isAuthenticated
 */
const getUserMenuLinks = (isAuthenticated) => {
  if (isAuthenticated) {
    return [
      {
        label: 'My sounds',
        href: '/'
      },
      {
        label: 'Logout',
        onClick: () => Auth.signOut()
      }
    ]
  }

  return [
    {
      label: 'Sign in with Google',
      onClick: () => Auth.federatedSignIn({ provider: 'Google' })
    }
  ]
}

const MainHeader = () => {
  const user = useUser()
  const userLinks = useMemo(() => getUserMenuLinks(Boolean(user)), [user])

  return (
    <>
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
      <Divider />
    </>
  )
}

export default MainHeader
