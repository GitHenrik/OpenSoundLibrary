import React from 'react'
import PropTypes from 'prop-types'

import InputBase from './InputBase'

/**
 * Basic input component, which extends native input
 * @param {Props} props Props with icon component, value and onChange handler
 * @returns {React.ReactNode} Input component
 */
const Input = ({ icon, fullWidth, ...props }) => {
  return (
    <InputBase icon={icon} fullWidth={fullWidth}>
      <input {...props} />
    </InputBase>
  )
}

Input.propTypes = {
  icon: PropTypes.node,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  className: PropTypes.string,
  fullWidth: PropTypes.bool
}

export default Input
