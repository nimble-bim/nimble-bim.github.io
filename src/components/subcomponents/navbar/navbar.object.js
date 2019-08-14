import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import './navbar.desktop.scss';
import './navbar.mobile.scss';

const defaultState = {
  collapsed: true,
}

class NavbarElement extends React.Component {
  constructor(props) {
    super(props);
    this.state = defaultState;
  }

  toggleNavbar(){
    this.setState({
      collapsed: !this.collapsed
    });
  }

  render(){
    const { app } = this.props.settings;
    const theme = 'bright';
    // const theme = app.useDarkTheme ? 'dark' : 'bright';

    return(
      <Navbar 
        className={ `${theme}` }
        sticky="top" 
        collapseOnSelect={true}
        expand='lg'>
        <Navbar.Brand href="/" className={ `${theme} ` }>
          <p className={ `${theme} brand-head` }>Nimble</p>
        </Navbar.Brand>
        <Navbar.Toggle 
          aria-controls="responsive-navbar-nav" 
          className={ `${theme} navbar__toggle` } 
        >
          <span className={`fa fa-bars ${theme}`}/>
        </Navbar.Toggle>
          <Navbar.Collapse>
            <Nav className="mr-auto">
              <Nav.Link href="about" className={theme}>About Us</Nav.Link>
              <Nav.Link href="try" className={theme}>Download</Nav.Link>
              <Nav.Link href="how" className={theme}>How It Works</Nav.Link>
            </Nav>    
          </Navbar.Collapse> 
      </Navbar>
    )
  }
}

export default NavbarElement;