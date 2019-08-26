import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components';
import Layout from "../components/layout"
import HeroImage from "../components/image"
import SEO from "../components/seo"
require('react-dom');

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HeroImage/>
    
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage