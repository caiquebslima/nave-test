import { Button } from '@material-ui/core';
import React from 'react';

import Header from '../components/Header';
import Card from '../components/Card';
import { sampleData } from '../components/sampleData';

import '../styles/home-page.scss';

const HomePage: React.FC<any> = () => {
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
          {sampleData.map((person) => {
            return (
              <Card name={person.name} job={person.job} photo={person.photo} />
            );
          })}
        </section>
      </main>
    </React.Fragment>
  );
};

export default HomePage;
