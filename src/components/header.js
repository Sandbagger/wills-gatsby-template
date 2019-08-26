import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';

const Nav = styled.div`
background-color: #fff;
border-bottom: 1px solid rgba(0, 0, 0, 0.0975);
max-width: 1010px;
padding: 26px 20px;
width: 100%;
display: flex;
align-items: center;
margin: 0 auto;
`;

const NavLeft = styled.div`
width: 50%;
text-align: left;
`
const NavRight = styled.div`
width: 50%;
text-align: right;
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
