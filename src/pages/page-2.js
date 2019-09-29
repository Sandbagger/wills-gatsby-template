import React, {useState} from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import {Categories} from "../components/Categories";
import {Items} from "../components/Items"
import styled from 'styled-components';
import SEO from "../components/seo";
import  { ThemeProvider } from 'styled-components';
import { theme } from '../theme'

const Container = styled.div`
display: flex;
padding-top: 100px;
flex-direction: column;
`
const Flex = styled.div`
display: flex;
justify-content: center;
justify-items: center;
align-items: center;
`
const Grid = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
grid-gap: 1rem;
align-items: center;
`

const SecondPage = ({ data }) => {
 const items = data.allItemsJson.edges.map(edge => edge.node);
const [filteredItems, setFilteredItems] = useState(items);
 const catagories = new Set([...items.map(item => item.catagory)]);
 const filterItems = catagory => items.filter(catagory => items.catagory === catagory)
 console.log('items', items, catagories, filteredItems) 
  return (
    <ThemeProvider theme={theme}>
  <Layout>
    <SEO title="Page two" />
  
    <Container>
        <Flex>
          <div>Suggested catagories:</div>
          <Categories items={[...catagories]}/>
        </Flex>
    
      <Grid>
        <Items items={filteredItems}/>
      </Grid>
    </Container>
 
  </Layout>
  </ThemeProvider>
)
  };

  export const query = graphql`
  query SecondPage {
    allItemsJson {
      edges {
        node {
          name
          catagory
          image {
            publicURL
            childImageSharp {
              fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
  `


export default SecondPage
