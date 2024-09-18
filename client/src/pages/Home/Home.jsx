import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Highlight from '../../components/Highlight/Highlight';
import Items from '../../components/Items/Items';
import './Home.css';

const Home = ({ addToCart, cart }) => {
  return (
    <>
      <Header cart={cart} />
      <Highlight />
      <Items addToCart={addToCart} />
      <Footer />
    </>
  );
};

export default Home;
