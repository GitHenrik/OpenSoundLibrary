import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledLabel = styled.label`
  font-size: 0.875rem;
  font-weight: 400;
  color: #ffffff;
  margin-bottom: 0.25rem;
  @media (min-width: 768px) {
    font-size: 1.125rem;
  }
`

/**
 * Basic label component meant to be used with Input and Select components.
 * @param {Props} props Props containing input id and label text
 * @returns {React.ReactNode}
 */
const Label = ({ inputId, label }) => (
  <StyledLabel id={`${inputId}-label`}>{label}</StyledLabel>
)

Label.propTypes = {
  inputId: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
}

export default Label
