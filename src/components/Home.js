import React, { Component } from 'react';
import '../App.css';
import IntroPage from './IntroPage.js';
import AboutPage from './AboutPage.js';
import Footer from './Footer.js';
import Registration from './Registration'
import Tabs from './Tabs.js'
import 'babel-polyfill';
import Info from './Info'
class App extends Component {
  render() {
    const { auth } = this.props;
    return (
      <div>
        {auth && auth.isAuthenticated() && <h1>Authenticated!</h1>}
        <IntroPage />
        <AboutPage />
        < Registration />
        {/* <Tabs /> */}
        <Info />
        <Footer />
      </div>
    );
  }
}

export default App;