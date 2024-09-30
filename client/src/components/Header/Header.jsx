import React, { useState } from 'react';
import './Header.css';
import { VscAccount } from "react-icons/vsc";
import { FiShoppingCart } from "react-icons/fi";
import { BiSolidShoppingBags } from "react-icons/bi";
import { TbShoppingBagCheck } from "react-icons/tb";

function Header({ cart, setCart }) {
  const cartCount = cart.length;
  const [isCartVisible, setIsCartVisible] = useState(false);

  function toggleCartVisibility() {
    setIsCartVisible(!isCartVisible);
  }

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
          <li><a href="/">Inicio</a></li>
          <li><a href="#about">Sobre Nosotros</a></li>
          <li><a href="#contact">Contactanos</a></li>
        </ul>
        <ul className='nav-buy_icons'>
          <li>
            <a href='/account'><VscAccount /></a>
          </li>
          <li>
            <a href='#' className='cart' onClick={toggleCartVisibility}>
              <FiShoppingCart />
              <span>{cartCount}</span>
            </a>

          </li>

        </ul>
        <div className={`cart-summary ${isCartVisible ? 'active' : ''}`}>
          <div className={`cart-summary_content ${isCartVisible ? 'active' : ''}`}>
            {cart.length > 0 ? (
              <>
                <ul>
                  {cart.map((item, i) => (
                    <li key={i}>
                      <p>
                        {item.title} - Cantidad:
                        <input
                          type="number"
                          value={cart[i].quantity}
                          min="1"
                          onChange={(e) => changeCartQty(i, parseInt(e.target.value, 10))}
                        />
                        Precio: ${item.price * item.quantity}
                        <button onClick={() => removeCartItem(item.id)}>Borrar</button>
                      </p>
                    </li>
                  ))}
                </ul>
                <p>
                  Total del pedido: $
                  {cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}
                </p>
              </>
            ) : (
              <p>Tu carrito está vacío</p>
            )}
          </div>

          <div className='cart-summary_buttons'>
            <a href='/cart'>Comprar <i><TbShoppingBagCheck /></i>
            </a>
            <a onClick={toggleCartVisibility}> Cerrar
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
