import React from 'react';
import './Cart.css';

const Cart = ({ cart }) => {
  return (
    <div className='cart'>
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p>Price: ₳ {item.price}</p>
              <p>Quantity: {item.quantity}</p>
            </li>
          ))}
        </ul>
      )}
      <div>
        Lorem, ipsum dolor.
      </div>
    </div>
  );
};

export default Cart;
