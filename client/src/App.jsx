import React, { useState, useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home/Home';
import ErrorPage from './pages/ErrorPage/ErrorPage';

function App() {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item) => {
    setCart((prevCart) => {
      const itemExistsIndex = prevCart.findIndex(cartItem => cartItem.id === item.id);

      if (itemExistsIndex > -1) {
        const updatedCart = [...prevCart];
        updatedCart[itemExistsIndex] = {
          ...updatedCart[itemExistsIndex],
          quantity: updatedCart[itemExistsIndex].quantity + 1
        };
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        return updatedCart;
      } else {
        const updatedCart = [...prevCart, { ...item, quantity: 1 }];
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        return updatedCart;
      }
    });
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home addToCart={addToCart} cart={cart} />,
    },
    {
      path: "*",
      element: <ErrorPage />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
