import React from "react";
import {  Row,Col, Container } from 'reactstrap';
import axios from 'axios';

// import $ from "jquery";

export default class Registration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      password: "",
      resp: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUserInputChange = this.handleUserInputChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    axios.post('https://post-nithin.glitch.me/form', {
      name: this.state.name,
      password: this.state.password
    })
    .then((response) => {
      console.log(response.data, "axios");
      this.setState({
        'resp' : response.data
      });

      console.log(this.state.resp, 'working reps');
    })
    .catch(function (error) {
      console.log(error);
    });
    
    this.setState({
     name:  "",
     password: "",
    });
  }

  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
  }
  handleUserInputChange(e) {
    this.setState({ name: e.target.value });
  }
  render() {
    return (
      <Container id="Login" className='mb-3'>
         <main className="centered">
          <div className="centered2">
            <form onSubmit={this.handleSubmit}>
              <header className="row">
                <section className="col-sm-12 ">
                  <div className="form-group ml-3">
                    <Row>
                      <Col>
                       <h1 className="text-center text-success">{this.state.resp}</h1> 
                      </Col>
                    </Row>
                    
                    <br />
                    <label
                      htmlFor="username"
                      className="text-left font-small small"
                    >
                      {/* Username */}
                    </label>
                    <br />
                    <input
                      id="username"
                      name="username"
                      type="text"
                      value={this.state.name}
                      placeholder="Enter Username"
                      onChange={this.handleUserInputChange}
                    />
                    <hr />
                  </div>
                </section>
              </header>
              <header className="row">
                <section className="col-sm-12 ">
                  <div className="form-group ml-3">
                    <br />
                    <label htmlFor="username" className="text-left small">
                      {/* Password */}
                    </label>
                    <br />
                    <input
                      id="password"
                      type="password"
                      placeholder="Enter Password"
                      value={this.state.password}
                      name="password"
                      onChange={this.handlePasswordChange}
                    />
                    <hr />
                    <div className="text-center">
                      <br />
                      <button
                        action="/form"
                        method="post"
                        type="submit"
                        className="btn btn-success"
                      >
                        submit
                      </button>
                      <br />
                    </div>
                  </div>
                </section>
              </header>
            </form>
           </div>
         </main>
      </Container>
    );
  }
}

