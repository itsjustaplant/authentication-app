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

import './App.css';

// import {Input} from './components/Form/Input.styled';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'>
            <Redirect to='/login'/>
          </Route>
          <Route exact path='/login'>
            <Login/>
          </Route>
          <Route exact path='/register'>
            <Register/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
