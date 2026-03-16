import React from 'react'
import { Navbar, Nav, Container, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Navbar bg="light">
      <Container>

        <Navbar.Brand as={Link} to="/">E-Shop</Navbar.Brand>

        <Nav className="ms-auto">
          <Nav.Link as={Link} to="/wishlist">
            Wishlist <Badge bg="danger">0</Badge>
          </Nav.Link>

          <Nav.Link as={Link} to="/cart">
            Cart <Badge bg="primary">0</Badge>
          </Nav.Link>

          <Nav.Link as={Link} to="/auth/login">
            Login
          </Nav.Link>
        </Nav>

      </Container>
    </Navbar>
    </div>
  )
}

export default Header
