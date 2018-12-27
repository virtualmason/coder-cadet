import React from 'react';
import logo  from "../images/smallCoderCadet.png";
import img from '../images/blue-clouds.jpg';

import {
  
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
   } from 'reactstrap';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    
    return (
      <div>
        <Navbar color="light" light expand="md" className="bg-dark">
          <NavbarBrand href="/"><img src={logo} alt="logo" /></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
              <NavLink href="#" style={{color:'#3ba30f'}}>Log In</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#" style={{color:'#3ba30f'}}>Register</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}






