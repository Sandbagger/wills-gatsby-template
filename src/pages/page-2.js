import React, {useState} from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import { Pill } from "../components/Pill";
import { Items } from "../components/Items"
import styled from 'styled-components';
import SEO from "../components/seo";
import  { ThemeProvider } from 'styled-components';
import { theme } from '../theme';

const Container = styled.div`
padding-top: 100px;
display: flex;
flex-direction: column;
justify-content: center;
justify-items: center;
align-items: center;
`
const Flex = styled.div`
display: flex;
justify-content: center;
justify-items: center;
align-items: center;
& > div {
  color: ${theme.secondary}
}
`
const Grid = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
grid-gap: 3rem;
justify-content: center;
width: 80%;
`

const SecondPage = ({ data }) => {
 const items = data.allItemsJson.edges.map(edge => edge.node);
const [filteredItems, setFilteredItems] = useState(items);
 const catagories = new Set([...items.map(item => item.catagory)]);
 const filterItems = catagory => items.filter(catagory => items.catagory === catagory)
 const handleFilter = catagory => catagory === 'All' ? setFilteredItems(items) : setFilteredItems(items.filter(i => i.catagory === catagory ));


 console.log('items', items, catagories, filteredItems) 
  return (
    <ThemeProvider theme={theme}>
  <Layout>
    <SEO title="Page two" />
  
    <Container>
        <Flex>
          <div>Suggested catagories:</div>
          {[...catagories, 'All'].map((catagory, i) => <Pill key={i} onClick={() => handleFilter(catagory)}>{catagory}</Pill>)}
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
