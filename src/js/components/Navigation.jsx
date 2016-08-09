import React from "react";
import { IndexLink, Link } from "react-router";
import { connect } from "react-redux"

import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import { Navbar } from 'react-bootstrap';
import { NavItem } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { MenuItem } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';

import { getLoggedUser } from "../actions/loginActions";


@connect((store) => {
  return {
    currentUser: store.login.currentUser
  };
})


class Navigation extends React.Component {

  componentWillMount() {
    this.props.dispatch(getLoggedUser())
  }

  constructor() {
    super()    
  }  

  render() {   
 
   const { currentUser } = this.props;

    return (
      <div>
          <Navbar>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="#">Twitter Analytics</a>
              </Navbar.Brand>
            </Navbar.Header>
            <Nav>
              <NavItem eventKey={1} href="#settings">Settings</NavItem>
              <NavItem eventKey={2} href="#">Link</NavItem>
              <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                <MenuItem eventKey={3.1}>Action</MenuItem>
                <MenuItem eventKey={3.2}>Another action</MenuItem>
                <MenuItem eventKey={3.3}>Something else here</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.3}>Separated link</MenuItem>
              </NavDropdown>
            </Nav>
            <Nav pullRight>
            <NavItem eventKey={1} href="#">Welcome {currentUser.name}!</NavItem>
          </Nav>
          </Navbar>
        </div>
    );
  }
}

export default Navigation;