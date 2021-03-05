import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core/';
import { ArrowBackIos } from '@material-ui/icons';

import '../styles/add-user-page.scss';
import { Header } from '../components';
import { Link } from 'react-router-dom';

// TODO: apply correct type to function component
const AddUserPage: React.FC<any> = () => {
  const [state, setState] = useState({
    job_role: '',
    admission_date: '',
    birthdate: '',
    project: '',
    name: '',
    url: '',
  });

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
    <React.Fragment>
      <Header />
      <main className='container form-area'>
        <div className='row'>
          <div className='col-md-12 form-area__header mb-3'>
            <Link to='/'>
              <ArrowBackIos />
            </Link>
            <h2> Adicionar Naver</h2>
          </div>
        </div>

        <form className='row' onSubmit={handleSubmit}>
          <div className='col-md-6 p-3'>
            <TextField
              value={state.name}
              id='name'
              label='Nome'
              variant='outlined'
              className='mb-4'
              fullWidth={true}
              onChange={handleChange}
            />
            <TextField
              value={state.birthdate}
              id='birthdate'
              label='Data de Nascimento'
              variant='outlined'
              className='mb-4'
              fullWidth={true}
              onChange={handleChange}
            />
            <TextField
              value={state.project}
              id='project'
              label='Projetos que participou'
              variant='outlined'
              className='mb-4'
              fullWidth={true}
              onChange={handleChange}
            />
          </div>
          <div className='col-md-6 p-3'>
            <TextField
              value={state.job_role}
              id='job_role'
              label='Cargo'
              variant='outlined'
              className='mb-4'
              fullWidth={true}
              onChange={handleChange}
            />
            <TextField
              value={state.admission_date}
              id='admission_date'
              label='Tempo de Empresa'
              variant='outlined'
              className='mb-4'
              fullWidth={true}
              onChange={handleChange}
            />
            <TextField
              value={state.url}
              id='url'
              label='URL da foto do Naver'
              variant='outlined'
              className='mb-4'
              fullWidth={true}
              onChange={handleChange}
            />
          </div>
          <Button type='submit' className=' nave-button mb-4 mr-4'>
            Salvar
          </Button>
        </form>
      </main>
    </React.Fragment>
  );
};

export default AddUserPage;
