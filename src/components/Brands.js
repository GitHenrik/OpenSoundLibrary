import styled from 'styled-components'

const Brand = styled.h1`
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 1.5rem;
  letter-spacing: -0.05em;
  color: #FFFFFF;
  margin: 0;
  @media (min-width: 768px) {
    font-size: 1.875rem;
  }
`

const LesserBrand = styled.h3`
font-family: Open Sans;
font-style: normal;
font-weight: bold;
font-size: 1.5rem;
margin-bottom: 1.25rem;
letter-spacing: -0.05em;
color: #FFFFFF;
`

export { Brand, LesserBrand }
