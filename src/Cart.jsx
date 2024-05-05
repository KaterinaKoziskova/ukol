import React, { useState, useEffect } from 'react';
import './Cart.css';

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  const updateCart = (updatedCart) => {
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const saveOrder = () => {
    updateCart([]);
    alert('Objednávka byla uložena.');
  };

  return (
    <div className="cart-container">
      <h2>Košík</h2>
      {cart.length === 0 ? (
        <p>Košík je prázdný</p>
      ) : (
        <div>
          <ul>
            {cart.map(product => (
              <li key={product.id}>
                {product.name} - {product.price} Kč
              </li>
            ))}
          </ul>
          <button onClick={saveOrder}>Dokončit objednávku</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
