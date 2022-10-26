import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Alert,
} from 'reactstrap';

function NavbarComponent(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Container>
      <Navbar {...args}>
        <NavbarBrand href="/">ITOMMEY</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Product</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      </Container>
      <Alert color="light">
      </Alert>
    </div>
  );
}

export default NavbarComponent;