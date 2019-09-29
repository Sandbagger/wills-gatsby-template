import React, {useState} from "react";
import styled from 'styled-components';
import { theme } from '../theme'

const Pill = styled.button`
  border: 2px solid ${theme.secondary};
  color: ${theme.secondary };
  background-color:transparent;
  padding: 2px 5px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 30px;
  width: 150px;
  font-size: 0.8rem;
`


export const Categories = props => (
<>
  {[...props.items, 'All'].map((catagory, i) => <Pill key={i}>{catagory}</Pill>)}
</>
);