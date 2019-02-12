import React, { Component } from 'react';
import '../App.css';
import Main from './Main.js'
import Links from './Links.js'
// import IntroPage from './components/IntroPage.js';
// import AboutPage from './components/AboutPage.js';
// import Footer from './components/Footer.js';
// import Tabs from './components/Tabs.js'
// import 'babel-polyfill';

class App extends Component {
  render() {
    return (
      <div>
        <Main auth={this.props.auth} />
       

      </div>
    );
  }
}

export default App;
