import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const InputWrapper = styled.div`
  height: 34px;
  min-width: 100%;
  background: #ffffff;
  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.75);
  transition: 80ms ease-out;
  display: flex;
  align-items: center;

  path {
    fill: #454545;
  }

  &:focus-within {
    outline: 2px solid rgba(234, 242, 124, 0.8);
    box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.8);
  }

  @media (min-width: 768px) {
    height: 48px;
    min-width: 180px;
    &:focus-within {
      outline: 4px solid rgba(234, 242, 124, 0.8);
    }
  }

  input,
  button {
    border: none;
    color: #454545;
    height: 100%;
    background: none;
    padding: 0.5rem 0 0.5rem 0.5rem;
    outline: none;
    @media (min-width: 768px) {
      padding: 0.75rem 0 0.75rem 0.75rem;
    }
  }

  input,
  button,
  input::placeholder {
    font-size: 0.875rem;
    font-weight: 500;
    line-height: 20px;
    @media (min-width: 768px) {
      font-size: 1.125rem;
    }
  }

  input::placeholder {
    color: #777777;
  }

  button {
    flex-grow: 1;
    text-align: left;
  }
`

const IconWrapper = styled.div`
  width: 30px;
  text-align: center;
  font-size: 0.75rem;
  @media (min-width: 768px) {
    font-size: 1rem;
    width: 35px;
  }
`

const InputBase = ({ icon, children }) => {
  const hasIcon = Boolean(icon)

  return (
    <InputWrapper>
      {children}
      {hasIcon && <IconWrapper>{icon}</IconWrapper>}
    </InputWrapper>
  )
}

InputBase.propTypes = {
  icon: PropTypes.node,
  children: PropTypes.node
}

export default InputBase
