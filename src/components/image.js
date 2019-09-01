
import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import BackgroundImage from 'gatsby-background-image';
import styled from 'styled-components';

const useImageQuery = () => {
  const data = useStaticQuery(
    graphql`
    query {
      heroImage: file(relativePath: { eq: "heroBlur2.png" }) {
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
  className={className} 
  >
    <h1>I'm a fullstack Javascript engineer called Will.</h1>
    
  </BackgroundImage>
  )
}
const StyledHeroImage = styled(HeroImage)`
  width: 100%;
  height: 100vh;
  position: relative;
  z-index: -1;
  > h1 {
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
  }
`


export { StyledHeroImage};

