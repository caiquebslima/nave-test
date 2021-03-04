import React from 'react';
import Header from '../components/Header';

const HomePage: React.FC<any> = () => {
  return (
    <React.Fragment>
      <Header />
      <main>
        <h1>Homepage</h1>
      </main>
    </React.Fragment>
  );
};

export default HomePage;
