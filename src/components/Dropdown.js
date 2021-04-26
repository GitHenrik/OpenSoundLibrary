import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import ButtonBase from './common/ButtonBase'
import useWindowSize from '../hooks/useWindowSize'
import { Link } from 'react-router-dom'

const DropdownWrapper = styled.div`
  position: relative;
`

const DropdownMenu = styled.ul`
  display: ${(props) => (props.open ? 'block' : 'none')};
  position: absolute;
  background-color: #2e2e2e;
  padding: 0.75rem;
  margin: 0;
  top: ${(props) => props.topOffset || 0};
  ${(props) =>
    props.position === DropdownPosition.RIGHT ? 'left: 0' : 'right: 0'};
  text-align: ${(props) =>
    props.position === DropdownPosition.RIGHT ? 'left' : 'right'};
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.5);
  width: 200px;

  li {
    list-style: none;
    margin-bottom: 0.5rem;
  }

  li:last-child {
    margin: 0;
  }

  a {
    font-weight: 300;
    font-size: 18px;
    letter-spacing: -0.05em;
    color: #ffffff;
    display: block;
    text-decoration: none;
  }

  a:hover,
  a:focus {
    color: #eaf27c;
  }
`

DropdownMenu.propTypes = {
  open: PropTypes.bool,
  topOffset: PropTypes.number,
  position: PropTypes.string
}

const DropdownPosition = {
  LEFT: 'LEFT',
  RIGHT: 'RIGHT'
}

const getInitialDropdownState = () => ({ expanded: false, position: null })

// #TODO add keyboard support
const Dropdown = ({ children, links }) => {
  const [dropdownState, setDropdownState] = useState(getInitialDropdownState())
  const dropdownRef = useRef(null)
  const { width: screenWidth } = useWindowSize()

  useEffect(() => {
    document.addEventListener('click', captureOutsideClick)

    return () => {
      document.removeEventListener('click', captureOutsideClick)
    }
  }, [])

  const calcPosition = () =>
    screenWidth / 2 > dropdownRef.current.getBoundingClientRect().x
      ? DropdownPosition.RIGHT
      : DropdownPosition.LEFT

  const resetDropdown = () => setDropdownState(getInitialDropdownState())

  const toggleClick = () => {
    if (!dropdownState.expanded) {
      setDropdownState({ expanded: true, position: calcPosition() })
      return
    }
    resetDropdown()
  }

  const captureOutsideClick = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      resetDropdown()
    }
  }

  const renderMenuItem = (listItem, index) => {
    if (listItem.to) {
      return (
        <li key={index} role="menuitem">
          <Link to={listItem.to}>{listItem.label}</Link>
        </li>
      )
    }

    if (listItem.onClick) {
      const handleClick = (e) => {
        e.preventDefault()
        listItem.onClick()
      }

      return (
        <li key={index} role="menuitem">
          <a href="#" onClick={handleClick}>
            {listItem.label}
          </a>
        </li>
      )
    }

    return (
      <li key={index} role="menuitem">
        <a href={listItem.href}>{listItem.label}</a>
      </li>
    )
  }

  return (
    <DropdownWrapper ref={dropdownRef}>
      <ButtonBase
        aria-haspopup="true"
        aria-expanded={dropdownState.expanded}
        onClick={toggleClick}
      >
        {children}
      </ButtonBase>
      <DropdownMenu
        role="menu"
        open={dropdownState.expanded}
        topOffset={dropdownRef.current?.offsetHeight}
        position={dropdownState.position}
      >
        {links.map(renderMenuItem)}
      </DropdownMenu>
    </DropdownWrapper>
  )
}

Dropdown.propTypes = {
  children: PropTypes.node,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      href: PropTypes.string,
      onClick: PropTypes.func,
      to: PropTypes.string
    })
  )
}

export default Dropdown
