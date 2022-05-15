import { APP_NAME } from '../../assets/strings';
import { AppName, Nav } from './Navbar.styled';
import React from 'react';

function Navbar (_props) {
  return (
    <Nav>
      <AppName>{APP_NAME}</AppName>
    </Nav>
  );
}

export default Navbar;
