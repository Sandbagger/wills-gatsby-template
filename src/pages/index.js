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
    <StyledHeroImage/>
  </Layout>
)
  }

export default IndexPage;