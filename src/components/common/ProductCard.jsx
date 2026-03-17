import React from 'react'
import { Button, Card } from 'react-bootstrap'

const ProductCard = () => {
  return (
    <div>
      
      <Card>
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4QaRqKWxfrGdQ9r5U5mWg-RWItNxzmphX-Q&s" />

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
