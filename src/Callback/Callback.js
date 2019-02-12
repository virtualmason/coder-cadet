import React, { Component } from 'react';
import loading from './loading.svg';
import {  Row,Col, Container } from 'reactstrap';

class Callback extends Component {
  render() {
    const style = {
      // position: 'absolute',
      // display: 'flex',
      // justifyContent: 'center',
      // height: '100vh',
      // width: '100vw',
      // top: 0,
      // bottom: 0,
      // left: 0,
      // right: 0,
      // backgroundColor: 'white',
    }
 const {auth} = this.props;
    return (
      <div style={style}>
        
            {
              auth.isAuthenticated() && (
               <Container >
                <Row>
                  <Col className="text-center">
                    <h1>You Are Athenticated</h1>
                    <p>Now let's set you your profile!</p>
                   </Col>
                </Row>
               </Container>     
 
              )
            }
      </div>
    );
  }
}

export default Callback;
