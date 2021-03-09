import React, { useEffect, useState } from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
// import { useDispatch } from 'react-redux';

import { Header, Card } from '../components';
import '../styles/home-page.scss';
import { APIService, UserInterface } from '../library';
// import { setActiveUsers } from '../library/store';

const HomePage: React.FC<any> = () => {
  // const dispatch = useDispatch();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    APIService.getUsers().then((res) => {
      // dispatch(
      //   setActiveUsers({
      //     ...res.data,
      //   })
      // );
      setUsers(res.data);
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
          {users?.map((user: UserInterface) => {
            console.log('user:', user);
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

export { HomePage };
