
import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import Products from '../components/Products';

const Product = () => {
  const { productId } = useParams();
  const location = useLocation();
  const product = location.state?.product;

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div>

      <h2>Product Details</h2>
      <h3>{product.name}</h3>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>Price: Rp {product.price.toLocaleString('id-ID')}</p>
      {product.discount !== 0 && (
        <p>Discount: -{product.discount}%</p>
      )}


      <Products limit={4} page="product" />
    </div>
  );
};

export default Product;
