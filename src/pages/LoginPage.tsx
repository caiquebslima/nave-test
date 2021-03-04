import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core/';

import { NaveLogo } from '../assets';
import '../styles/login-page.scss';

// TODO: apply correct type to function component
const LoginPage: React.FC<any> = () => {
  const [state, setState] = useState({ email: '', password: '' });

  const handleChange = (e: any) => {
    const { id, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(state);
  };

  return (
    <main className='container login'>
      <section className='login__box'>
        <figure>
          <NaveLogo />
        </figure>
        <form onSubmit={handleSubmit}>
          <TextField
            value={state.email}
            id='email'
            label='E-mail'
            variant='outlined'
            className='input-spacing'
            fullWidth={true}
            onChange={handleChange}
          />
          <TextField
            value={state.password}
            id='password'
            label='Senha'
            variant='outlined'
            className='input-spacing'
            fullWidth={true}
            onChange={handleChange}
          />
          <Button
            type='submit'
            className='input-spacing nave-button'
            fullWidth={true}
          >
            Entrar
          </Button>
        </form>
      </section>
    </main>
  );
};

export default LoginPage;
