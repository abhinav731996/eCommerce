import { useEffect, useState } from "react";
import { getProducts } from "../../services/api";
import ProductCard from "../../components/ProductCard";


function Products() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((res) => {
      setProducts(res.data.products);
    });
  }, []);

  return (
    <div className="row">

      {products.map((item) => (
        <div className="col-md-3 mb-4" key={item.id}>
          <div className="card">
            <ProductCard item={item} />
            <img src={item.thumbnail} className="card-img-top" />

            <div className="card-body">

              <h6>{item.title}</h6>
              <p>${item.price}</p>

              <button className="btn btn-primary">
                Add To Cart
              </button>

            </div>

          </div>
        </div>
      ))}

    </div>
  );
}

export default Products;