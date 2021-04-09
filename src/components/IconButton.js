import styled from 'styled-components'
import PropTypes from 'prop-types'

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

export default IconButton
