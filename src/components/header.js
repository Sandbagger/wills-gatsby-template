import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import { theme } from '../theme';

const Nav = styled.div`
background-color: white;
border-bottom: 1px solid rgba(0, 0, 0, 0.0975);
padding: 26px 20px;
width: 100%;
display: flex;
align-items: center;
margin: 0 auto;
position: fixed;
z-index: 10;
top: 0;
`;

const NavLeft = styled.div`
width: 50%;
text-align: left;
`
const NavRight = styled.div`
width: 50%;
text-align: right;
`
const NavItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  &:before {
    filter: blur(10px)
  };
  color: ${props => props.theme.primary};
  & > * + * {
    margin-left: 10px;
  }
`

const StyledLink = styled.div`
text-decoration: none;  
`
const Header = ({ siteTitle }) => (
  <>
  <Nav>
    <NavLeft data-testid="logo">
      <NavItemContainer>
        <StyledLink data-testid="nav-item-1" to="/">page1</StyledLink>
        <StyledLink data-testid="nav-item-2" to="/page-2">page2</StyledLink>
      </NavItemContainer>
    </NavLeft>
    <NavRight>
      <NavItemContainer>
        <StyledLink data-testid="nav-item-3" to="/">item3</StyledLink>
         <StyledLink data-testid="nav-item-4" to="/">item4</StyledLink>
       </NavItemContainer>
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
