import React, { useEffect, useState } from 'react';
import { Button, Modal } from '@material-ui/core';

import { Header, Card } from '../components';
import '../styles/home-page.scss';
import { APIService, UserResponse } from '../library';

const HomePage: React.FC<any> = () => {
  const [users, setUsers] = useState([]);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    APIService.getUsers().then((res) => {
      setUsers(res.data);
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
        <section className='people__cards row'>
          {users.map((person: UserResponse) => {
            return (
              <React.Fragment>
                <button className='card-button col-lg-3' onClick={handleOpen}>
                  <Card
                    name={person.name}
                    job={person.job_role}
                    photo={person.url}
                  />
                </button>
                <Modal open={open} onClose={handleClose}>
                  <Card
                    name={person.name}
                    job={person.job_role}
                    photo={person.url}
                  />
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
