import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import BackgroundImage from 'gatsby-background-image'
import styled from 'styled-components'


const HeroImage = () => {
  const data = useStaticQuery(graphql`
    query {
      heroImage: file(relativePath: { eq: "heroCropped.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, height:) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <BackgroundImage Tag="section"
  fluid={data.heroImage.childImageSharp.fluid}
  backgroundColor={`#040e18`}
  
>
<h1>Hello gatsby-background-image</h1>
</BackgroundImage>
 
}
const StyledHeroImage = styled(HeroImage)`
  width: 100%;
  height: 100vh;
  position: relative;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
`



export default StyledHeroImage;
