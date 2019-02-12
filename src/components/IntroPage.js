import React, { Component } from 'react';
import {  Row,Col, Container } from 'reactstrap';
import paratrooper from '../images/paratrooper.png'
import NavBar from './Navbar';
import img from '../images/blue-clouds.jpg';


class IntroPage extends Component {
  constructor(props) {
    super(props);
    this.state ={};
  }

  componentDidMount() {
    // var target = document.querySelector('.paratrooper');
    // var trooper = target.animate([
    // {transform: 'translate(0)'},
    // {transform: 'translate(2000px, 1000px)'}
    // ], 10000);
    // trooper.addEventListener('finish', function() {
    // target.style.transform = 'translate(800px, 800px)';
    // target.style.display='none';
    //});
  }

  componentWillUnmount() {
  }
  
  render() {
    const divStyle = {
      backgroundImage: `url(${img})`
    };
    return ( 
   <Container>
    <div className="overFlow">
      <img src={ paratrooper } alt="skydive icon" className="paratrooper img-fluid" /> 
        <NavBar />
          <main className="App-header App" style={divStyle}>
          <Container className="overflow">          
              <Row className="">
                <Col>
                  <h1 className='mainColor'>Waiting For The Perfect MERN Dev To Fall From The Sky?</h1>
                  <hr className="style-hr "/>
                  <p>Mongo | Express | React | Node | Javascript</p>
                </Col>
              </Row>
          </Container> 
          </main> 
      </div>
    </Container>    
    );
  }
}

export default IntroPage;