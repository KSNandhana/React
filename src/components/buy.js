// Buy.js
import React, { useState } from 'react';
import './cart.css';

const Buy = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalSum, setTotalSum] = useState(0);

  const groceryItems = [
    { id: 1, name: 'Medtronic', rate: 2999, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8paVH1k3NqQIQkD1b3KPq7s0ZldigsxGgdw&usqp=CAU" },
    { id: 2, name: 'Johnson & Johnson', rate: 1999, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYg5GwoFUYts9tey5eVG2tsdACjE715s4-iw&usqp=CAU' },
    { id: 3, name: 'Abbot', rate: 1999, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbNbVj92FU8ynkdb3RV3BHpb1ZrqPtndiuNw&usqp=CAU' },
    { id: 4, name: 'Drive', rate: 1949, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyBLBxpdiwCCfK7hoEG6Gg0jFKuHoBq_uoOQ&usqp=CAU'},
    { id: 5, name: 'Seimens Healthineers', rate: 1999, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX6Rns6bVDDtIvVav6CMY02HXbnMODE4vGow&usqp=CAU'},
    { id: 6, name: 'Cardinal Health', rate: 3999,image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB5ZELwTwNvGFmAji-nedUg9qnx5u-s0T5WA&usqp=CAU'},
    { id: 7, name: 'Stryker', rate: 1900.,image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMhR3IcMTnJTx9StZSobLStewDhHdWOpWoNg&usqp=CAU'},
    { id: 8, name: 'Philips', rate: 1000., image:  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJt9OQ-s_a__EVPR7EXE38eeXn9BrvoTTq2w&usqp=CAU'},
    { id: 9, name: 'Baxter', rate: 20000., image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt-a4DlR76-dHXMFBwaK7ksGhjTTCWV1kEaA&usqp=CAU'},
    { id: 10, name: 'Beckton Dickinson', rate: 2989., image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd25J29IozBywz-JdmcJkiPdFhr7YTmoeHxA&usqp=CAU'},
    { id: 11, name: 'Poly Medicure', rate: 18676.99,image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkZeu8ZWqSsuOm6vHUGYesCaB6nMFwHri6iA&usqp=CAU'},
    { id: 12, name: 'Danaher', rate: 2768.49,image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAgVBMVEX///8KQ4ULSI6wwtgGQIObss4mWZMCPYEAO4ANRYbr8PUAOX8kV5IMRIYFP4McUY4XTYt9m74zYpnl6/Jfha9GcaM5Z52ht9DT3enz9vmQqsjS3OnG0+O+zd8AMnqHo8NukLdSeqlih7CzxdlKdKVXfqt3lrve5e6MpsXAz+CBnsHZ5bkuAAAEm0lEQVR4nO2Y65KiMBCFwxoIEQS8ISiOircZ3/8Bt5NwU5kZ3SqrsjPn+4OEJPTp7nSCjAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwA7+/BCY80OAENuAENuAENuAENuAENuAENuAENuAENuAENuAENuAENv4dUK4Hzje4bjdzuZJ4L/UpH/jESE8CnenRTYc5tW/k6vxRLzcsid5REh6mcWBECISvu8th1rLQL7ctOd4OLV4/Wsk10pJ/iKD/pXvhfAg3l4+smHctERbpSR7pVnP840QP5kN9uNwRRHo5JJYKiXhay17ki+FyLRg6yRyZH4TgFgJ2b7Wsif5SsiJjNVLI7k1WzWw2UsNe5ZPhQSDnO2k1sEvZPZVvdVC7KpbnwkZ52yQVL8FZdYq6j6dkI7zaw17ll4hPJyy/NjEwCOz3e7zqKCWeX0n43CSppPrtS89z2vr3Cis7uja9kmoT9IdYaaor7q3Rtb96UWTmDt99AmRRypS7RucXddsBT1nl6vHmnTUtPEF3RdNFFVxmCpBNHHQvIZdOWjM2KKafG9aRD3xRN9G1cFimD4qZE+dOzrEgEYHnecqQovGLyKjde/NN2praSzfsDxnw/pMxk9VcUgZe68HBgWbTtsEHU0ZUy8VdN2ZJtquihlRGgeF5IzYe/9kdd4L8ZUz426Dsruz1r288p1BeZsE8LgTtzmZTft/ozVnZ8rGhI/bLpyUx2c2rI1KqM9bEASqjlQOoN0r9olK+oGxjeO8nY3gb4Vo7x26LWQV2zV3Ec3Hxp08nZEsFQm/qKu1KmprsWlHUQiXlDHbYNp6k6a58KLdZ+kt+ZSgo9zABJaTw/br9XpvuviUKKdDudJyHhCiCtLHVa11r3Zx0pl313VEiaeTVjQRUftnEh/bBVDSE1X6ksZIFYBVHO8b7wpyw1DRblBkSa5aitpUw7L/4H0nJGsWV4VaA3k9eESBHV+laMCMMUpQrgMiFvUirU4D4kPlKrl80Uwt6y8CVjZBZL6Ukjd5zSk3S2qRVQkhxyykpPeXDwlRE93kIDWczMbIKThufD2Aatbq7S2+0Bsyo5Bi5qp6bAqVo8tTRp5Qzq6KYUBGntI0pfTbGyEkcyDMNfPrUUzX30qX9gI/Xq3PL4TM7oRsKx8Jb8ny9yS6GbCuXXs+BbVJuXKiyiVZz7BzTLEz0tRRYeCbvsxE0a1WFB1Hj0aaV09sFmyQa7uodBW9uXUrpLw716rMklxO1uw8C5w7ju8ucZmLutYu3YX2IacHlStcVyvauK4xSi6qlqT+IapR/OK6xo187lYYu6nrUg113eWtL3uF6F1q0ylKI/JEQftCduwbbg93i12dPtipjV7I8v127iX9BwN7uBMyWulP8thvdmA/4pHtMvp2drHUpbEoJ2EiOZdhejjM5j1D7aLvrMXLLG/qPFuX0v54fPY9wkdJEodhHCfS+R9UOL/wL1PrgRDbgBDbgBDbgBDbgBDbgBDbgBDbgBDbgBDbgBDbgBDbgBDbYIMfAgMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgB38Bdl0a98XjVrdAAAAAElFTkSuQmCC'},
  ];

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
    setTotalSum(totalSum + item.rate);
  };

  const removeFromCart = (item) => {
    const updatedCart = cartItems.filter((cartItem) => cartItem.id !== item.id);
    setCartItems(updatedCart);
    setTotalSum(totalSum - item.rate);
  };

  const renderGroceryCards = () => {
    return groceryItems.map((item) => (
      <div key={item.id} className="grocery-card">
        <img src={item.image} alt={item.name} />
        <h3>{item.name}</h3>
        <p>Rate: Rs.{item.rate.toFixed(2)}</p>
        <button className="explore-btn" onClick={() => addToCart(item)}>
          Add to cart
        </button>
      </div>
    ));
  };

  const renderCartItems = () => {
    return cartItems.map((cartItem) => (
      <div key={cartItem.id} className="cart-item">
        <img src={cartItem.image} alt={cartItem.name} />
        <h3>{cartItem.name}</h3>
        <p>Rate: Rs.{cartItem.rate.toFixed(2)}</p>
        <button className="remove-btn" onClick={() => removeFromCart(cartItem)}>
          Remove from cart
        </button>
      </div>
    ));
  };

  return (
    <div className="grocery-page">
      <h2>Start Purchasing</h2>
      <div className="grocery-container">{renderGroceryCards()}</div>

      <div className="cart-section">
        { <h2>Shopping Cart</h2> }
        <div className="cart-container">
          {renderCartItems()}
        </div>
        {cartItems.length > 0 && (
          <div className="total-sum">
            <p>Total: Rs.{totalSum.toFixed(2)}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Buy;
