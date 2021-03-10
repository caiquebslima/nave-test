import React from 'react';
import { TextField, Button, Dialog, DialogTitle } from '@material-ui/core/';
import { ArrowBackIos } from '@material-ui/icons';
import * as yup from 'yup';

import '../styles/add-user-page.scss';
import { Header } from '../components';
import { Link } from 'react-router-dom';
import { APIService } from '../library';
import { useFormik } from 'formik';

// TODO: apply correct type to function component
const AddUserPage: React.FC<any> = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const validationSchema = yup.object({
    name: yup.string().required('Este é um campo obrigatório'),
    job_role: yup.string().required('Este é um campo obrigatório'),
    birthdate: yup.string().required('Este é um campo obrigatório'),
    admission_date: yup.string().required('Este é um campo obrigatório'),
    project: yup.string().required('Este é um campo obrigatório'),
    url: yup
      .string()
      .url('Precisa ser uma URL válida')
      .required('Este é um campo obrigatório'),
  });
  const formik = useFormik({
    initialValues: {
      name: '',
      job_role: '',
      birthdate: '',
      admission_date: '',
      project: '',
      url: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        APIService.createUser(
          values.name,
          values.job_role,
          values.birthdate,
          values.admission_date,
          values.project,
          values.url
        ).then((res) => console.log(res.data));
      } catch (e) {
        console.log('error', e);
      } finally {
        handleClickOpen();
        console.log('user created sucessfully');
      }
    },
  });

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

        <form className='row' onSubmit={formik.handleSubmit}>
          <div className='col-md-6 p-3'>
            <TextField
              id='name'
              label='Nome'
              variant='outlined'
              className='mb-4'
              fullWidth={true}
              required
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
            <TextField
              id='birthdate'
              label='Data de Nascimento'
              variant='outlined'
              className='mb-4'
              fullWidth={true}
              required
              value={formik.values.birthdate}
              onChange={formik.handleChange}
              error={
                formik.touched.birthdate && Boolean(formik.errors.birthdate)
              }
              helperText={formik.touched.birthdate && formik.errors.birthdate}
            />
            <TextField
              id='project'
              label='Projetos que participou'
              variant='outlined'
              className='mb-4'
              fullWidth={true}
              required
              value={formik.values.project}
              onChange={formik.handleChange}
              error={formik.touched.project && Boolean(formik.errors.project)}
              helperText={formik.touched.project && formik.errors.project}
            />
          </div>
          <div className='col-md-6 p-3'>
            <TextField
              id='job_role'
              label='Cargo'
              variant='outlined'
              className='mb-4'
              fullWidth={true}
              required
              value={formik.values.job_role}
              onChange={formik.handleChange}
              error={formik.touched.job_role && Boolean(formik.errors.job_role)}
              helperText={formik.touched.job_role && formik.errors.job_role}
            />
            <TextField
              id='admission_date'
              label='Tempo de Empresa'
              variant='outlined'
              className='mb-4'
              fullWidth={true}
              required
              value={formik.values.admission_date}
              onChange={formik.handleChange}
              error={
                formik.touched.admission_date &&
                Boolean(formik.errors.admission_date)
              }
              helperText={
                formik.touched.admission_date && formik.errors.admission_date
              }
            />
            <TextField
              id='url'
              label='URL da foto do Naver'
              variant='outlined'
              className='mb-4'
              fullWidth={true}
              required
              value={formik.values.url}
              onChange={formik.handleChange}
              error={formik.touched.url && Boolean(formik.errors.url)}
              helperText={formik.touched.url && formik.errors.url}
            />
          </div>
          <Button type='submit' className=' nave-button mb-4 mr-4'>
            Salvar
          </Button>
          <Dialog
            onClose={handleClose}
            aria-labelledby='simple-dialog-title'
            open={open}
          >
            <DialogTitle id='simple-dialog-title'>
              Naver criado com sucesso
            </DialogTitle>
          </Dialog>
        </form>
      </main>
    </React.Fragment>
  );
};

export { AddUserPage };
