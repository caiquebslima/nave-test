import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { AddUserPage, EditUserPage, HomePage, LoginPage } from './pages';

import './styles/app.scss';

function App() {
  const [login, setLogin] = React.useState(false);
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route exact path='/'>
            {login ? (
              <HomePage />
            ) : (
              <LoginPage setLogin={setLogin} login={login} />
            )}
          </Route>
          {/* <Route exact path='/login' component={LoginPage} /> */}
          <Route exact path='/user/add' component={AddUserPage} />
          <Route exact path='/user/:id' component={EditUserPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
