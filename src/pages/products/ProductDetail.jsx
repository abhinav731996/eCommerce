import React from "react";
import { Button, Form } from "react-bootstrap";

const ProductDetail = () => {
  return (
    <div  className="row">
      This is product details page
      <div className="col-md-6">
        <img src="https://via.placeholder.com/400" />
      </div>
      <div className="col-md-6">
        <h3>Product Name</h3>

        <h4>$100</h4>

        <Form.Control type="number" defaultValue={1} />

        <Button className="mt-3">Add To Cart</Button>
      </div>
    </div>
  );
};

export default ProductDetail;
