// Cart.js
import React, { useState } from 'react';
import './add.css';

const Add = ({ groceryItems }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalSum, setTotalSum] = useState(0);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
    setTotalSum(totalSum + item.rate);
  };

  const renderCartItems = () => {
    return cartItems.map((item) => (
      <div key={item.id} className="cart-item">
        <img src={item.image} alt={item.name} />
        <h3>{item.name}</h3>
        <p>Rate: Rs{item.rate.toFixed(2)}</p>
      </div>
    ));
  };

  return (
    <div className="cart-page">
      <h2>Shopping Cart</h2>
      <div className="cart-container">
        {renderCartItems()}
        {cartItems.length > 0 && (
          <div className="total-sum">
            <p>Total: Rs{totalSum.toFixed(2)}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Add;
