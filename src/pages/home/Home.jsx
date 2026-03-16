import React from 'react'
import ProductCard from '../../components/common/ProductCard'

const Home = () => {
  return (
    <div>
      This is home page
      <h2>Best Sellers</h2>

      <div className="row">

        <div className="col-md-3">
          <ProductCard/>
        </div>

        <div className="col-md-3">
          <ProductCard/>
        </div>

        <div className="col-md-3">
          <ProductCard/>
        </div>

        <div className="col-md-3">
          <ProductCard/>
        </div>

      </div>

    </div>
  )
}

export default Home
