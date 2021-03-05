import React, { useEffect, useState } from 'react';
import { Button, Modal } from '@material-ui/core';

import { Header, Card, ModalContent } from '../components';
import '../styles/home-page.scss';
import { APIService, UserResponse } from '../library';
// import { Link, Route } from 'react-router-dom';

const HomePage: React.FC<any> = () => {
  const [users, setUsers] = useState([]);
  const [open, setOpen] = useState(false);

  const handleOpen = (): void => {
    setOpen(true);
  };

  const handleClose = (): void => {
    setOpen(false);
  };

  useEffect(() => {
    APIService.getUsers().then((res) => {
      setUsers(res.data);
      console.log(res.data);
    });
  }, []);

  return (
    <React.Fragment>
      <Header />
      <main className='people'>
        <section className='people__action-bar mb-4'>
          <h2>Navers</h2>
          <Button variant='contained' className='nave-button'>
            Adicionar Naver
          </Button>
        </section>
        {}
        <section className='people__cards row'>
          {users.map((user: UserResponse) => {
            return (
              <React.Fragment>
                <button
                  className='card-button col-md-3 mb-3'
                  onClick={handleOpen}
                >
                  <Card name={user.name} job={user.job_role} photo={user.url} />
                </button>
                <Modal open={open} onClose={handleClose}>
                  <ModalContent user={user} setOpen={setOpen} />
                </Modal>
              </React.Fragment>
            );
          })}
        </section>
      </main>
    </React.Fragment>
  );
};

export default HomePage;
