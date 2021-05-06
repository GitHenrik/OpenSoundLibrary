import styled from 'styled-components'

import ButtonBase from './ButtonBase'

const OutlinedButton = styled(ButtonBase)`
  color: #eaf27c;
  border: 1px solid #eaf27c;
  border-radius: 2px;
  padding: 0.8rem 2.8rem;
  font-weight: 600;
  font-size: 1.25rem;
  transition-duration: 0.5s;
  box-shadow: 0px 0px 50px 0px rgba(0, 0, 0, 0.4);

  &:hover,
  &:focus,
  &:active {
    background-color: #eaf27c;
    color: black;
    box-shadow: none;
  }
`

export default OutlinedButton
