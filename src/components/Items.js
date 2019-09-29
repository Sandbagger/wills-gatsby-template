import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import Img from "gatsby-image"
import styled from 'styled-components';

const Result = styled.div`
display: flex;
flex-direction: column;

`

export const Items = ({items}) => (
<>
  {items.map((item, i) => {
  return (
    <Result>
      <Img src={item.image.childImageSharp.fluid.src}/>
      <p>{item.name}</p>
    </Result>
  )
  })}
</>
  );
