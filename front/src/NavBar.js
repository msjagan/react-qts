import React from 'react';
import { NavLink } from 'react-router-dom';

// CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';

const NavBar = (props) => {
	const styles = {
		navBar: {
			background: '#ffffff'
		}
	}

  return (
<Navbar className={styles.navBar} collapseOnSelect expand="lg" bg="light" variant="light">
  <Navbar.Brand href="#home">QTS</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link as={NavLink} to="/" exact>Home</Nav.Link>
      <Nav.Link as={NavLink} to="/test" exact>About</Nav.Link>
      <Nav.Link as={NavLink} to="/form" exact>Form</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
  )
}

export default NavBar;