import React from 'react'
import styled from 'styled-components'
import { LesserBrand } from './Brands'
import { FooterLink } from './common/Links'
import Constants from '../Constants'

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

const Footer = () => {
  return (
    <Wrapper>
      <StyledFooter>
          <LesserBrand>Open Sound Lib</LesserBrand>
          <Nav>
          <FooterLink to={Constants.songPage}>Find sounds</FooterLink>
          <FooterLink to={Constants.uploadPage}>Upload</FooterLink>
          <FooterLink to={Constants.aboutPage}>About</FooterLink>
          <FooterLink as="a" href={Constants.sourceCodePage}>Source code</FooterLink>
          </Nav>
      </StyledFooter>
      </Wrapper>
  )
}

export default Footer
