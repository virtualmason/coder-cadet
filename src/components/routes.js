// src/routes.js

import React from 'react';
import { Route, Router } from 'react-router-dom';
import Home from './Home';
import Callback from '../Callback/Callback';
import Auth from '../Auth/Auth';
import history from '../history';

const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
}

export default () => {
  return (
    <Router history={history} >
      <div>
        <Route path="/" render={(props) => <Home  auth={auth} {...props} />} />
        <Route path="/callback" render={(props) => {
          handleAuthentication(props);
          return <Callback auth={auth} {...props} /> 
        }}/>
      </div>
    </Router>
  );
}