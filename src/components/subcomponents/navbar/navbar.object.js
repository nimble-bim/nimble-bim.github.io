import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import './navbar.style.scss';

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
              <NavDropdown title="Revit Actions" id="collapsible-nav-dropdown" className={`${theme} navbar__dropdown`}>
                <NavDropdown.Item href="/revit/alerts" className={`${theme} navbar__dropdown__item`}>Alerts</NavDropdown.Item>
                <NavDropdown.Item href="/revit/backup" className={`${theme} navbar__dropdown__item`}>BIM 360 Backup</NavDropdown.Item>
                <NavDropdown.Item href="/revit/clashes" className={`${theme} navbar__dropdown__item`}>Clashes</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#how" className={theme}>How It Works</Nav.Link>
              <Nav.Link href="#try" className={theme}>Try It</Nav.Link>
            </Nav>    
          </Navbar.Collapse> 
      </Navbar>
    )
  }
}

export default NavbarElement;