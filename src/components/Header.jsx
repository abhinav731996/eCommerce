import React from 'react'
import { Navbar, Nav, Container, Badge, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

const logout = () => {
localStorage.removeItem("login");
navigate("/auth/login");
};
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

          <Nav.Link as={Link} to="/profile">
                  My Account
                </Nav.Link>
        </Nav>

        <Button onClick={logout}>Logout</Button>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header
