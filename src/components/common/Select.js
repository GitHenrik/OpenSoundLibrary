import React, { useMemo, useRef, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'

import InputBase from './InputBase'

const SelectWrapper = styled.div`
  position: relative;
`

const Placeholder = styled.span`
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 20px;
  color: #777777;
  @media (min-width: 768px) {
    font-size: 1.125rem;
  }
`

const List = styled.ul`
  position: absolute;
  list-style: none;
  padding: 0;
  width: 100%;
  top: 0;
  box-shadow: 0px 2px 20px rgba(0, 0, 0, 1);
  border-radius: 2px;
  overflow: hidden;
  ${(props) => (props.open ? '' : 'display: none;')}

  li {
    background: white;
    color: #454545;
    padding: 0.75rem 1rem;
    cursor: pointer;
  }

  li:hover,
  li:focus {
    background-color: #e5e5e5;
  }
`

List.propTypes = {
  open: PropTypes.bool
}

/**
 * Custom Select component
 * @param {Props} props Props with id, placeholder, default selected option value, list of options and onChange event
 * @returns {React.ReactNode} Select component
 */
// #TODO: add keyboard support and improve accessibility
const Select = ({ id, placeholder = '', value, options = [], onChange }) => {
  const [open, setOpen] = useState(false)
  const selectRef = useRef(null)

  const buttonId = `${id}-button`
  const labelId = `${id}-label`
  const listId = `${id}-list`

  const optsByValue = useMemo(
    () =>
      options.reduce(
        (obj, curr) => ({ ...obj, [curr.value]: { ...curr } }),
        {}
      ),
    [options]
  )

  useEffect(() => {
    if (selectRef.current) {
      selectRef.current.addEventListener('click', handleSelectClick)
    }

    document.addEventListener('click', handleOutsideClick)

    return () => {
      if (selectRef.current) {
        selectRef.current.removeEventListener('click', handleSelectClick)
      }
      document.removeEventListener('click', handleOutsideClick)
    }
  })

  const handleSelectClick = (e) => {
    setOpen(!open)
  }

  const handleOutsideClick = (e) => {
    if (selectRef.current && !selectRef.current.contains(e.target)) {
      setOpen(false)
    }
  }

  const handleOptionSelection = (e) => {
    if ((e.type === 'keydown' && e.key === 'Enter') || e.type === 'click') {
      onChange({
        ...e,
        target: {
          ...e.target,
          value: e.target.id
        }
      })
      setOpen(false)
      selectRef.current.focus()
    }
  }

  const renderOption = (option, index) => (
    <li
      tabIndex="0"
      key={option.value}
      id={option.value}
      role="option"
      onClick={handleOptionSelection}
      onKeyDown={handleOptionSelection}
    >
      {option.label}
    </li>
  )

  return (
    <SelectWrapper ref={selectRef}>
      <InputBase icon={<FontAwesomeIcon icon={faChevronDown} />}>
        <button
          id={`${id}-toggle`}
          aria-haspopup="listbox"
          aria-labelledby={[buttonId, labelId].join(' ')}
        >
          {optsByValue[value] ? (
            optsByValue[value].label
          ) : (
            <Placeholder>{placeholder}</Placeholder>
          )}
        </button>
        <List
          id={listId}
          tabIndex="-1"
          role="listbox"
          aria-labelledby={labelId}
          open={open}
        >
          {options.map(renderOption)}
        </List>
      </InputBase>
    </SelectWrapper>
  )
}

Select.propTypes = {
  id: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string
    })
  ),
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func
}

export default Select
