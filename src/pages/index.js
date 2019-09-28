import React from "react";
import { StyledHeroImage } from '../components/BackgroundImage';
import Layout from "../components/layout";
import SEO from "../components/seo";
import  { ThemeProvider } from 'styled-components';

require('react-dom');

const theme = {
  primary: '#0B3954', 
  secondary: '#BFD7EA',
  background: 'FEFFFE'
}

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