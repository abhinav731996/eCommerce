import React from "react";
import ProductCard from "../../components/common/ProductCard";

const Wishlist = () => {
  return (
    <div>
      <h2>Wishlist</h2>

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

export default Wishlist;
