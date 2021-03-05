import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import AddUserPage from './pages/AddUserPage';
import './styles/app.scss';

function App() {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(
  //     setUser({
  //       id: "01",
  //       email: "mats.vilas@gmail.com",
  //       token: "1111",
  //     })
  //   );
  // }, []);

  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/login' component={LoginPage} />
          <Route exact path='/user/add' component={AddUserPage} />
          <Route exact path='/user/:id' component={AddUserPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
