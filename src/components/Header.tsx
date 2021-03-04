import React from 'react';
import { Button } from '@material-ui/core';

import NaveLogo from '../assets/NaveLogo';
import '../styles/header.scss';

const Header: React.FC<any> = () => {
  return (
    <header>
      <figure className='header-element-spacing'>
        <NaveLogo />
      </figure>
      <Button className='header-element-spacing'>Sair</Button>
    </header>
  );
};

export default Header;
