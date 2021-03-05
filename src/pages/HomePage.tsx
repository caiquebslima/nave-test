import React, { useEffect, useState } from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

import { Header, Card } from '../components';
import '../styles/home-page.scss';
import { APIService, UserResponse } from '../library';

const HomePage: React.FC<any> = () => {
  const [users, setUsers] = useState([]);

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
          <Button
            variant='contained'
            className='nave-button'
            component={Link}
            to='/user/add'
          >
            Adicionar Naver
          </Button>
        </section>
        {}
        <section className='people__cards row'>
          {users.map((user: UserResponse) => {
            return (
              <Card
                id={user.id}
                name={user.name}
                job={user.job_role}
                photo={user.url}
              />
            );
          })}
        </section>
      </main>
    </React.Fragment>
  );
};

export default HomePage;
