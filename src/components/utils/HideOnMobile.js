import styled from 'styled-components'

const HideOnMobile = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
`

export default HideOnMobile
