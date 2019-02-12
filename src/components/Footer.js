import React from 'react';
import { Nav, NavLink } from 'reactstrap';

export default class Footer extends React.Component {
  render() {
    return (
      <div className="bg-dark">
        <Nav>
          {/* <NavLink href="#">Link</NavLink> <NavLink href="#">Link</NavLink> <NavLink href="#">Another Link</NavLink>*/} <NavLink disabled href="#" className="text-center">Copyright &copy; 2018</NavLink> 
        </Nav>
      </div>
    );
  }
}