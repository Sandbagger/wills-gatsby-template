import { Link } from "gatsby";
import React from "react";
import { StyledHeroImage } from '../components/image';
import Layout from "../components/layout";
import SEO from "../components/seo";

require('react-dom');

const IndexPage = () => {
  
  return (
  <Layout>
    <SEO title="Home" />
    <StyledHeroImage>
    <h1>Hello gatsby-background-image</h1>
  </StyledHeroImage>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)
  }

export default IndexPage;