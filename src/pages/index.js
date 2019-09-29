import React from "react";
import { StyledHeroImage } from '../components/BackgroundImage';
import Layout from "../components/layout";
import SEO from "../components/seo";
import  { ThemeProvider } from 'styled-components';
import { theme } from '../theme'
require('react-dom');

const IndexPage = () => {
  
  return (
   <ThemeProvider theme={theme}>
  <Layout>
    <SEO title="Home" />
    <StyledHeroImage/>
  </Layout>
  </ThemeProvider> 
)
  }

export default IndexPage;