// src/routes.js

import React from 'react';
import { Route, Router } from 'react-router-dom';
import App from './App';
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
    <Router history={history} component={App}>
      <div>
        {/* <Route path="/" render={(props) => <App auth={auth} {...props} />} /> */}
        <Route path="/" render={(props) => <Home  {...props} />} />
        <Route path="/callback" render={(props) => {
          handleAuthentication(props);
          return <Callback auth={auth} {...props} /> 
        }}/>
      </div>
    </Router>
  );
}