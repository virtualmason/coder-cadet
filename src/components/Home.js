import React, { Component } from 'react';
import '../App.css';
import IntroPage from './IntroPage.js';
import AboutPage from './AboutPage.js';
import Footer from './Footer.js';
import Registration from './Registration'
import 'babel-polyfill';
// import Info from './Info'
class App extends Component {
  render() {
    const { auth } = this.props;
    return (
      <div >
        { !auth.isAuthenticated()
         &&(<React.Fragment>
            <IntroPage />
            <AboutPage />
            < Registration />
            <Footer />
        </React.Fragment>
        )}

      </div>
    );
  }
}

export default App;