import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import AddPage from './pages/AddPage';
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
          <Route path='/add' component={AddPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
