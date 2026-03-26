// import React from "react";
// import ProductCard from "../../components/ProductCard";

// const Wishlist = () => {
//   return (
//     <div>
//       <h2>Wishlist</h2>

//       <div className="row">
//         <div className="col-md-3">
//           <ProductCard />
//         </div>

//         <div className="col-md-3">
//           <ProductCard />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Wishlist;


import { useContext } from "react";
import { StoreContext } from "../../context/Store";

function Wishlist() {

  const { wishlist } = useContext(StoreContext);

  return (
    <div className="container mt-4">

      <h3>Wishlist</h3>

      {wishlist.map((item) => (
        <div key={item.id}>
          <h6>{item.title}</h6>
        </div>
      ))}

    </div>
  );
}

export default Wishlist;