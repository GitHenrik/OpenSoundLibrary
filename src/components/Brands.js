import styled from 'styled-components'

const Brand = styled.h1`
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 1.5rem;
  letter-spacing: -0.05em;
  color: #ffffff;
  margin: 0;
  @media (min-width: 768px) {
    font-size: 1.875rem;
  }
`

const SloganBrand = styled.h2`
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 54px;
  color: #ffffff;
  padding: 4rem 0 2rem;
`

const LesserBrand = styled.h3`
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 1.5rem;
  margin-bottom: 1.25rem;
  letter-spacing: -0.05em;
  color: #ffffff;
`

const MinorBrand = styled.h5`
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 1rem;
  margin-bottom: 1.25rem;
  color: #b0b0b0;
`

export { Brand, SloganBrand, LesserBrand, MinorBrand }
