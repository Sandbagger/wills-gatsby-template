import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import Img from "gatsby-image"
import styled from 'styled-components';
import { theme } from '../theme';

const Result = styled.div`
 grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(4, 1fr);
 box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  display: grid;
  font-family: 'Trebuchet MS', sans-serif;
  height: 150px;
  margin: 20px auto;
  width: 250px;
`
const Secondary = styled.div`
  background-color: ${theme.secondary};
  grid-column: 8 / span 5;
  grid-row: 1 / span 4;
`

const Primary =styled.div`
  background-color: ${theme.primary};
  grid-column: 1 / span 7;
  grid-row: 1 / span 4;
`

const Skewed = styled.div`
  clip-path: polygon(0% 0%, 100% 0%, 0% 100%);
  grid-row: 1 / span 3;
  grid-column: 1 / span 11;
  position: relative;
  z-index: 1;
  background-color: red;
`

const StyledImg = styled(Img)`
  display: flex;
  flex-direction: column;
  grid-column: 4 / span 6;
  grid-row: 2 / span 2;
  justify-content: center;
  text-align: center;
  z-index: 3;
`

export const Items = ({items}) => (
<>
  {items.map((item, i) => {
  return (
    <Result key={i}>
      <Secondary/>
      <Primary/>
      <Skewed/>
      <StyledImg fluid={item.image.childImageSharp.fluid}/>
     
    </Result>
  )
  })}
</>
  );
