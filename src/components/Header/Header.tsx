import React from 'react';
import { Button } from '@material-ui/core';

import { NaveLogo } from '../../assets';
import './header.scss';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setAuth } from '../../library';

const Header: React.FC<any> = () => {
  const dispatch = useDispatch();
  return (
    <header>
      <figure className='header-element-spacing'>
        <Link to='/'>
          <NaveLogo />
        </Link>
      </figure>
      <Button
        className='header-element-spacing logout-button'
        onClick={() => {
          dispatch(
            setAuth({
              email: '',
              id: '',
              token: '',
            })
          );
        }}
      >
        Sair
      </Button>
    </header>
  );
};

export { Header };
