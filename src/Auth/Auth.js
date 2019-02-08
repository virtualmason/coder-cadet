// src/Auth/Auth.js

import auth0 from 'auth0-js';

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: 'coder-cadet.auth0.com',
    clientID: 'rDI0aPni1lCfuieQ0B3pVoGI22B3AU1G',
    redirectUri: 'http://localhost:3000/callback',
    responseType: 'token id_token',
    scope: 'openid'
  });

  login() {
    this.auth0.authorize();
  }
}

//https://coder-cadet.herokuapp.com/LoggedIn