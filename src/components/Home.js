import React, { Component } from 'react';
import '../App.css';
import IntroPage from './IntroPage.js';
import AboutPage from './AboutPage.js';
import Footer from './Footer.js';
import Registration from './Registration'
import Tabs from './Tabs.js'
import 'babel-polyfill';

class App extends Component {
  render() {
    return (
      <div>
        <IntroPage />
        <AboutPage />
        < Registration />
        {/* <Tabs /> */}
        <Footer />
      </div>
    );
  }
}

export default App;