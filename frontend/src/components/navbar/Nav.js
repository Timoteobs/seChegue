import React from 'react';

import Navbar from './navbar';
import NavbarItem from './navItem';
import NavbarItems from './navItems';

function nav() {
  return (
    <Navbar>
      <NavbarItems>
        <NavbarItem label="Feed" source="/feed" />
        <NavbarItem label="Novos Amigos" source="/main" />
      </NavbarItems>
    </Navbar>
  )
}

export default nav;