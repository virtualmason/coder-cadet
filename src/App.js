import React, { Component } from 'react';
import './App.css';
import IntroPage from './components/IntroPage.js';
import AboutPage from './components/AboutPage.js';
import Login from './components/Login.js'
class App extends Component {
  render() {
    return (
      <div>
        <IntroPage />
        <AboutPage />
        <Login />
      </div>
    );
  }
}

export default App;
