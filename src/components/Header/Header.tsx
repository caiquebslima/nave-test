import React from 'react';
import { Button } from '@material-ui/core';

import { NaveLogo } from '../../assets';
import './header.scss';
import { Link } from 'react-router-dom';

const Header: React.FC<any> = () => {
  return (
    <header>
      <figure className='header-element-spacing'>
        <Link to='/'>
          <NaveLogo />
        </Link>
      </figure>
      <Button className='header-element-spacing logout-button'>Sair</Button>
    </header>
  );
};

export { Header };
