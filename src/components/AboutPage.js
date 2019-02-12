import React, { Component } from 'react';
import { Row,Col, Container } from 'reactstrap';
import Roll from 'react-reveal/Roll';
import react from '../images/react-brands.svg';
import node from '../images/node-brands.svg';
import database from '../images/database-solid.svg';

class AboutPage extends Component {
  constructor(props) {
    super(props);
    this.state = { words: [] };
  }

  
  componentDidMount() {
  
  }
  
  componentWillUnmount() {
  }
  
  render() {
    
    return ( 
      <div>
        <Container>  
          <h1 className="text-center mt-2"> 
            We Make Hiring A Knowledgeable Dev Apprentice Easy!
         </h1>
          <Row className='App App-header'>
            <Col>
              <Roll>
                <div>
                <img src={database}  alt="database icon" style={{height:'200px',
      width: '200px'}}/>               
                 <h4 className="mt-3">Apprentices</h4>
                <p>You've been building side projects for yourself; now do it professionally. Work hard and grow with a great company!</p>     
                </div>
              </Roll>
            </Col>  
            <Col>
              <Roll>
                <img src={react} alt="react icon" style={{height:'200px',
      width: '200px'}}/>
                <h4 className="mt-3">Companies</h4>
              <p>Hire a cadet @ $16 per hour with monthly $1 raises. You will have a long term employee and great culture fit.</p>
              </Roll>
            </Col>
            <Col>
              <Roll>
                <img src={node} alt="node logo" style={{height:'200px',
      width: '200px'}}/>
                <h4 className="mt-3">History</h4>
              <p>Frustrated with how hard it is for talented US based devs to get entry level coding jobs, Coder Cadet was born.</p>
              </Roll>
            </Col>
          </Row>   
              
        </Container>  
      </div>
    );
  }
}

export default AboutPage;