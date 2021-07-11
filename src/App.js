/* eslint-disable require-jsdoc */

import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import {useSelector} from 'react-redux';
import Cookies from 'js-cookie';

import {Login} from './pages/Login.page';
import {Register} from './pages/Register.page';
import {User} from './pages/User.page';
import {GlobalStyle} from './Theme/GlobalStyle.styled';

function App() {
  const isLoggedIn = Cookies.get('isLoggedIn');
  const isLoggedInState = useSelector((state) => state.user.loggedIn);
  let userPage; let registerPage; let loginPage;

  if (isLoggedIn === 'true' || isLoggedInState) {
    userPage = <User/>;
    registerPage = <Redirect to='/'/>;
    loginPage = <Redirect to='/'/>;
  } else {
    userPage = <Redirect to='/register'/>;
    registerPage = <Register/>;
    loginPage = <Login/>;
  }

  return (
    <div className="App">
      <GlobalStyle/>
      <Router>
        <Switch>
          <Route exact path='/'>
            {userPage}
          </Route>
          <Route exact path='/login'>
            {loginPage}
          </Route>
          <Route exact path='/register'>
            {registerPage}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
