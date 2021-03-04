import { Button } from '@material-ui/core';
import React, { useEffect, useState } from 'react';

import Header from '../components/Header';
import Card from '../components/Card';
import { sampleData } from '../components/sampleData';

import '../styles/home-page.scss';
import { APIService, UserResponse } from '../library';

const HomePage: React.FC<any> = () => {
  const [users, setUsers] = useState([]);
  APIService.getUsers().then((res) => {
    setUsers(res.data);
  });
  return (
    <React.Fragment>
      <Header />
      <main className='people'>
        <section className='people__action-bar'>
          <h2>Navers</h2>
          <Button variant='contained' className='nave-button'>
            Adicionar Naver
          </Button>
        </section>
        <section className='people__cards row'>
          {users.map((person: UserResponse) => {
            return (
              <Card
                name={person.name}
                job={person.job_role}
                photo={person.url}
              />
            );
          })}
        </section>
      </main>
    </React.Fragment>
  );
};

export default HomePage;
