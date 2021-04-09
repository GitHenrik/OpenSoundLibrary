import React from 'react'
import styled from 'styled-components'
import { LesserBrand } from './Brands'

const StyledFooter = styled.footer`
  background-color: #111111;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem;
  @media (min-width: 768px) {
    align-items: flex-start;
    width: 768px;
    margin: auto;
    padding: 3rem 0;
  }
`

const Wrapper = styled.div`
  background-color: #111111;
  width: 100%;
`

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 768px) {
    flex-direction: row;
    width: 429px;
    justify-content: space-between;
  }
`

const Link = styled.a`
  text-decoration: none;
  color: #E5E5E5;
  margin-bottom: 0.5rem;
  &:hover {
    color: white;
  }
`

const Footer = () => {
  return (
    <Wrapper>
      <StyledFooter>
          <LesserBrand>Open Sound Lib</LesserBrand>
          <Nav>
          <Link href="#">Find sounds</Link>
          <Link href="#">Upload</Link>
          <Link href="#">About</Link>
          <Link href="#">Source code</Link>
          </Nav>
      </StyledFooter>
      </Wrapper>
  )
}

export default Footer
