import React from "react";
import {  Row,Col, Container } from 'reactstrap';
import axios from 'axios';
import Auth from '../Auth/Auth.js';
const auth = new Auth();

// import $ from "jquery";

export default class Registration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      resp: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUserInputChange = this.handleUserInputChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }
//signup
  handleSubmit(event) {
    event.preventDefault();
    axios.post('http://localhost:3001/signup', {
      username: this.state.username,
      password: this.state.password})
      // {headers: {'Content-Type': 'application/x-www-form-urlencoded'}})
    
    .then((response) => {
      this.setState({
        'resp' : response.data
      });

    })
    .catch(function (error) {
      console.log(error);
    });
    
    this.setState({
     username:  "",
     password: "",
    });
  }

  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
  }

  handleUserInputChange(e) {
    this.setState({ username: e.target.value });
  }

  auth() {
    auth.login();
  }
  render() {

    return (
      <Container id="Login" className='mb-3 '>
         <Row className="text-center">
         <Col >
          <button center onClick={this.auth.bind(this)}>LogIn / Register</button>
          </Col>
         </Row>
      </Container>
    );
  }
}

