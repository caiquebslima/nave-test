import React from 'react';
import { TextField, Button } from '@material-ui/core/';
import * as yup from 'yup';
import { useFormik } from 'formik';

import { NaveLogo } from '../assets';
import '../styles/login-page.scss';
import { APIService } from '../library';

// TODO: apply correct type to function component
const LoginPage: React.FC<any> = () => {
  const validationSchema = yup.object({
    email: yup
      .string()
      .email('Insira um e-mail válido')
      .required('Email é obrigatório'),
    password: yup.string().required('Senha é obrigatória'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        APIService.login(values.email, values.password).then((res) =>
          console.log(res.data)
        );
      } catch (e) {
        console.log('error', e);
      } finally {
        console.log('userhas logged in succesfully');
      }
    },
  });

  return (
    <main className='container login'>
      <section className='login__box'>
        <figure>
          <NaveLogo />
        </figure>
        <form onSubmit={formik.handleSubmit}>
          <TextField
            id='email'
            label='E-mail'
            variant='outlined'
            className='input-spacing'
            fullWidth
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            id='password'
            label='Senha'
            variant='outlined'
            className='input-spacing'
            type='password'
            fullWidth
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <Button type='submit' className='input-spacing nave-button' fullWidth>
            Entrar
          </Button>
        </form>
      </section>
    </main>
  );
};

export default LoginPage;
