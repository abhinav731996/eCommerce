import React from "react";
import { Nav } from "react-bootstrap";

const CategoriesBar = () => {
  return (
    <div>
      This is categories bar page
      <Nav className="bg-dark p-2">
        <Nav.Link className="text-white">Electronics</Nav.Link>
        <Nav.Link className="text-white">Clothing</Nav.Link>
        <Nav.Link className="text-white">Shoes</Nav.Link>
        <Nav.Link className="text-white">Mobiles</Nav.Link>
      </Nav>
    </div>
  );
};

export default CategoriesBar;
