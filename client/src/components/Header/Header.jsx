import React from 'react';
import './Header.css';
import { IoIosSearch } from "react-icons/io";
import { VscAccount } from "react-icons/vsc";
import { FiShoppingCart } from "react-icons/fi";
import { BiSolidShoppingBags } from "react-icons/bi";

function Header({ cart }) {
  const cartCount = cart.length;

  console.log(cart);
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
            <a href='/cart'>
              <FiShoppingCart />
              <span>{cartCount}</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
