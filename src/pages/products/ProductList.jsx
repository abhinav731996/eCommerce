import React from "react";
import ProductCard from "../../components/common/ProductCard";

const ProductList = () => {
  return (
    <div>
      This is product listing page
      <h2>Products</h2>
      <div className="row">
        <div className="col-md-3">
          <ProductCard />
        </div>

        <div className="col-md-3">
          <ProductCard />
        </div>
      </div>
    </div>
  );
};

export default ProductList;
