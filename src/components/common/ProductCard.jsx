import React from 'react'
import { Button, Card } from 'react-bootstrap'

const ProductCard = () => {
  return (
    <div>
      This is Product card page
      <Card>
      <Card.Img variant="top" src="https://via.placeholder.com/200" />

      <Card.Body>

        <Card.Title>Product Name</Card.Title>

        <Card.Text>$100</Card.Text>

        <Button variant="primary">Add To Cart</Button>
        <Button variant="outline-danger" className="ms-2">
          Wishlist
        </Button>

      </Card.Body>
    </Card>
    </div>
  )
}

export default ProductCard
