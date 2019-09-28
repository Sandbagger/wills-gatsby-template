import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';

const Nav = styled.div`
background-color:#E0EEEE;
border-bottom: 1px solid rgba(0, 0, 0, 0.0975);
padding: 26px 20px;
width: 100%;
display: flex;
align-items: center;
margin: 0 auto;
position: fixed;
`;

const NavLeft = styled.div`
width: 50%;
text-align: left;
color: white;
`
const NavRight = styled.div`
width: 50%;
text-align: right;
> div {
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
} 
`
const StyledLink = styled.div`
text-decoration: none;  
`


const Header = ({ siteTitle }) => (
  <>
  <Nav>
    <NavLeft data-testid="logo">
      <div>
      <StyledLink data-testid="nav-item-1" to="/">item1</StyledLink>
      <StyledLink data-testid="nav-item-2" to="/">item2</StyledLink>
      </div>
    </NavLeft>
    <NavRight>
      <div>
       <StyledLink data-testid="nav-item-3" to="/">item3</StyledLink>
       <StyledLink data-testid="nav-item-4" to="/">item4</StyledLink>
      </div>
      </NavRight>
  </Nav>
  </>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
