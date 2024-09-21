import React, { useState } from 'react';
import './Header.css';
import { IoIosSearch } from "react-icons/io";
import { VscAccount } from "react-icons/vsc";
import { FiShoppingCart } from "react-icons/fi";
import { BiSolidShoppingBags } from "react-icons/bi";
import { TbShoppingBagCheck } from "react-icons/tb";

function Header({ cart, setCart }) {
  const cartCount = cart.length;

  function removeCartItem(id) {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  }

  function changeCartQty(i, value) {
    console.log(`i: ${i}, New qty: ${value}`);
    const updatedCart = [...cart];
    updatedCart[i] = {
      ...updatedCart[i],
      quantity: value,
    };

    setCart(updatedCart);
  }
  return (
    <header>
      <nav>
        <div className='nav-logo'>
          <a href='#'>
            <i><BiSolidShoppingBags /></i>
            <p><span>A</span>ustral<span>S</span>hopping</p>
          </a>
        </div>
        <ul className='nav-menu'>
          <li><a href="/">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
          <li className='nav-search_icon'><IoIosSearch /></li>
        </ul>
        <ul className='nav-buy_icons'>
          <li>
            <a href=''><VscAccount /></a>
          </li>
          <li>
            <a href='/cart' className='cart'>
              <FiShoppingCart />
              <span>{cartCount}</span>
            </a>
            <div className="cart-summary">
              <div className='cart-summary_content'>
                {cart.length > 0 ? (
                  <ul>
                    {cart.map((item, i) => (
                      <li key={i}>
                        <p>
                          - {item.title} -
                          Qty:
                          <input
                            type="number"
                            value={cart[i].quantity}
                            min="1"
                            onChange={(e) => changeCartQty(i, parseInt(e.target.value, 10))}
                          />
                          Price: ${item.price * item.quantity}
                          <button onClick={() => removeCartItem(item.id)}>Delete</button>
                        </p>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>Your cart is empty</p>
                )}
              </div>
              <div className='cart-summary_buy-button'>
                <a href='/cart'>Buy <i><TbShoppingBagCheck /></i>
                </a>
              </div>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
