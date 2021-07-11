/* eslint-disable require-jsdoc */

import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import Cookies from 'js-cookie';

import {Login} from './pages/Login.page';
import {Register} from './pages/Register.page';
import {User} from './pages/User.page';
import {GlobalStyle} from './Theme/GlobalStyle.styled';
import {ErrorModal} from './components/ErrorModal/ErrorModal.styled';


function App() {
  const isLoggedIn = Cookies.get('isLoggedIn');
  const isLoggedInState = useSelector((state) => state.user.loggedIn);
  const dispatch = useDispatch();
  let userPage; let registerPage; let loginPage;

  const modalIsOpen = useSelector((state) => state.user.userAlreadyExists);

  function closeModal() {
    dispatch({type: 'CLOSE_MODAL'});
  }

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
      <ErrorModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        ariaHideApp={false}
      >
      </ErrorModal>
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
