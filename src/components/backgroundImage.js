import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import BackgroundImage from 'gatsby-background-image';
import styled from 'styled-components';

const useImageQuery = () => {
  const data = useStaticQuery(
    graphql`
    query {
      heroImage: file(relativePath: { eq: "heroImage.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return data.heroImage.childImageSharp.fluid
}


const HeroImage = ({ className }) => {
  const query = useImageQuery();
  return (
  <BackgroundImage Tag="section"
    fluid={[`linear-gradient(rgba(220, 15, 15, 0.35), rgba(4, 243, 67, 0.35))`, query]}
    className={className}>
      <StyledContainer>
       <h1>Some text to go in front of the image</h1>
        <h2>Hi.</h2>
      </StyledContainer>
  </BackgroundImage>
  )
}
const StyledHeroImage = styled(HeroImage)`
  width: 100%;
  height: 100vh;
  position: relative;
  z-index: -1;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`
const StyledContainer = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: flex-end;
 position: absolute;
 padding-bottom: 10%;
  & > h1, h2 {
    text-align: center;
    color: ${props => props.theme.primary};
  }
`


export { StyledHeroImage};

