import React from 'react'
import { Table, Button } from "react-bootstrap";

const Cart = () => {
  return (
    <div>
      <h2>Shopping Cart</h2>

<Table striped>

<thead>

<tr>
<th>Product</th>
<th>Price</th>
<th>Qty</th>
<th>Total</th>
</tr>

</thead>

<tbody>

<tr>
<td>Product Name</td>
<td>$100</td>
<td>1</td>
<td>$100</td>
</tr>

</tbody>

</Table>

<Button>Proceed to Checkout</Button>
    </div>
  )
}

export default Cart
