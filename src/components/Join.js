import React, { Component } from 'react';
import '../App.css';
import IntroPage from './IntroPage.js';
import AboutPage from './AboutPage.js';
import Footer from './Footer.js';
class Join extends Component {
  render() {
    return (
      <div>
        <IntroPage />
        <AboutPage />
        <Footer />
      </div>
    );
  }
}
//app.js to join
export default Join;