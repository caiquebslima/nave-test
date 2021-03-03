import React from 'react';
import { TextField, Button } from '@material-ui/core/';

import NaveLogo from '../assets/NaveLogo';
import '../styles/login-page.scss';

// TODO: apply correct type to function component
const LoginPage: React.FC<any> = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log('form submitted!');
  };

  return (
    <main className='container login'>
      <section className='login__box'>
        <figure>
          <NaveLogo />
        </figure>
        <form onSubmit={handleSubmit}>
          <TextField
            id='email'
            label='E-mail'
            variant='outlined'
            className='input-spacing'
            fullWidth={true}
          />
          <TextField
            id='password'
            label='Senha'
            variant='outlined'
            className='input-spacing'
            fullWidth={true}
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
