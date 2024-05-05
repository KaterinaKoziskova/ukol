import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = ({ products }) => {
  const { id } = useParams();

  const product = products.find(product => product.id === parseInt(id));

  if (!product) {
    return <div>Produkt nebyl nalezen.</div>;
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <p>Cena: {product.price}</p>
    </div>
  );
};

export default ProductDetail;
