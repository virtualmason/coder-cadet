import React, { Component } from 'react';
import './App.css';
import IntroPage from './components/IntroPage.js';
import AboutPage from './components/AboutPage.js';
import Login from './components/Login.js'
import Footer from './components/Footer.js';
class App extends Component {
  render() {
    return (
      <div>
        <IntroPage />
        <AboutPage />
        <Login />
        <Footer />
      </div>
    );
  }
}

export default App;
