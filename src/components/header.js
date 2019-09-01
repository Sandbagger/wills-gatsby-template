import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';

const Nav = styled.div`
background-color: transparent;
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
color: white;
`


const Header = ({ siteTitle }) => (
  <>
  <Nav>
    <NavLeft>William Neal</NavLeft>
    <NavRight>Nav items</NavRight>
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
