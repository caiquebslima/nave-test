import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { AddUserPage, EditUserPage, HomePage, LoginPage } from './pages';

import './styles/app.scss';

export interface StateStructure {
  user: {
    auth: { email: string; id: string; token: string };
    users: [];
  };
}

function App() {
  const login = useSelector((state: StateStructure) => state.user.auth);

  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route exact path='/'>
            {login?.token === '' ? <LoginPage /> : <HomePage />}
          </Route>
          <Route exact path='/user/add' component={AddUserPage}>
            {login?.token === '' ? <LoginPage /> : <AddUserPage />}
          </Route>
          <Route exact path='/user/:id' component={EditUserPage}>
            {login?.token === '' ? <LoginPage /> : <EditUserPage />}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
