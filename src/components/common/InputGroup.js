import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'

import InputBase from './InputBase'
import ButtonBase from './ButtonBase'

/**
 * Input with a button element
 * @returns
 */
const InputGroup = () => {
  return (
    <InputBase
      icon={
        <ButtonBase>
          <FontAwesomeIcon icon={faPlusCircle} />
        </ButtonBase>
      }
    >
      <input placeholder="asd" />
    </InputBase>
  )
}

export default InputGroup
