import React, { Component } from "react";
import {
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavItem,
  Jumbotron,
} from "reactstrap";
import { NavLink } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);

    this.toggleNav = this.toggleNav.bind(this);
    this.state = {
      isNavOpen: false,
    };
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  }
  render() {
    return (
      <div>
        <Navbar dark expand="md">
          <div className="d-flex container">
            <NavbarToggler onClick={this.toggleNav} />
            <NavbarBrand className="mr-auto" href="/">
              <img
                src="assets/images/avartar.png"
                height="30"
                width="41"
                alt="Ristorante Con Fusion"
              />
            </NavbarBrand>
            {/* router switch route */}
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink className="nav-link" to="/home">
                    <span className="fa fa-home fa-lg"></span> Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/menu">
                    <span className="fa fa-list fa-lg"></span> Photo Gallery
                  </NavLink>

                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/contactus">
                    <span className="fa fa-address-card fa-lg"></span> About Me

                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </div>
    );
  }
}

export default Header;
