import React from 'react'
import styled from 'styled-components'

const AboutPage = () => {
  const AboutPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: linear-gradient(#65005a, #0b0033);
  `
  const About = styled.div`
    width: 100%;
    padding: 0.5rem;
    color: #ffffff;
    @media (min-width: 768px) {
      width: 768px;
    }
  `

  return (
    <AboutPageContainer>
      <About>This application was a weekend hackathon project in 2021.</About>
    </AboutPageContainer>
  )
}

export default AboutPage
