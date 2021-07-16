/* eslint-disable require-jsdoc */

import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import {Login} from './pages/Login.page';
import {Register} from './pages/Register.page';
import {User} from './pages/User.page';
import {Edit} from './pages/Edit.page';
import {GlobalStyle} from './Theme/GlobalStyle.styled';
import {useSelector} from 'react-redux';

function App() {
  const loggedInState = useSelector((state) => state.user.loggedIn);
  let userPage; let registerPage; let loginPage; let editPage;

  if (loggedInState) {
    userPage = <User/>;
    registerPage = <Redirect to='/login'/>;
    loginPage = <Redirect to='/'/>;
    editPage = <Edit/>;
  } else {
    userPage = <Redirect to='/register'/>;
    registerPage = <Register/>;
    loginPage = <Login/>;
    editPage = <Redirect to='/login'/>;
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
          <Route exact path='/edit'>
            {editPage}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
