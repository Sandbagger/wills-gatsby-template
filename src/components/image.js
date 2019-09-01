
import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import BackgroundImage from 'gatsby-background-image';
import styled from 'styled-components';

const useImageQuery = () => {
  const data = useStaticQuery(
    graphql`
    query {
      heroImage: file(relativePath: { eq: "hero.jpeg" }) {
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
  fluid={query}
  className={className} 
  backgroundColor={`#040e18`}
  >
    <h1>Hello gatsby-background-image</h1>
  </BackgroundImage>
  )
}
const StyledHeroImage = styled(HeroImage)`
  width: 100%;
  height: 100vh;
  position: relative;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
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

