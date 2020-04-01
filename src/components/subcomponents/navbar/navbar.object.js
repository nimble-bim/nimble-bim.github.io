import React from "react";
import "./navbar.mobile.scss";
import "./navbar.desktop.scss";
import "./navbar.general.scss";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

const defaultState = {
  collapsed: true
};

class NavbarElement extends React.Component {
  constructor(props) {
    super(props);
    this.state = defaultState;
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.collapsed
    });
  }

  render() {
    // const { app } = this.props.settings;
    const theme = "bright";
    // const theme = app.useDarkTheme ? 'dark' : 'bright';

    return (
      <Navbar
        className={`${theme}`}
        sticky="top"
        collapseOnSelect={true}
        expand="lg"
      >
        <Navbar.Brand href="/" className={`${theme} `}>
          <p className={`${theme} brand-head`}>Nimble</p>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className={`${theme} navbar__toggle`}
        >
          <span className={`fa fa-bars ${theme}`} />
        </Navbar.Toggle>
        <Navbar.Collapse>
          <Nav variant="pills" className="mr-auto">
            <Nav.Item>
              <Nav.Link href="/about" className={theme}>
                About Us
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/features" className={theme}>
                Features
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="news" className={theme}>
                News
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Nav variant="pills" className="navbar-nav-left justify-content-end">
            <Nav.Link href="try" className={`nav-link-left ${theme}`}>
              Download
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavbarElement;
