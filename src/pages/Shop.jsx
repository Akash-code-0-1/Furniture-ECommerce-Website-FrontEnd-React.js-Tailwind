import React from "react";
import ShopHeading from "../components/ShopHeading";
import Products from "../components/Products";
import Support from '../components/Support'

// import { Link } from "react-router-dom";


const Shop = () => {
  // const products = [
  //   { id: 1, name: "Product 1", price: "$10" },
  //   { id: 2, name: "Product 2", price: "$20" },
  //   { id: 3, name: "Product 3", price: "$30" },
  // ];

  return (
    <div>
      <ShopHeading />
      <Products limit={16} page="shop"/>
      <Support/>




      {/* <h2>Shop</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border p-4">
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <Link
              to={`/shop/${product.id}`}
              className="bg-blue-500 text-white p-2 mt-2 inline-block"
            >
              View Details
            </Link>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default Shop;