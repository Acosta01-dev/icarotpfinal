import React from 'react'
import './Footer.css'
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareEnvelope } from "react-icons/fa6";

function Footer() {
  return (
    <footer>
      <div>
        <FaInstagramSquare />
        <FaSquareXTwitter />
        <FaSquareEnvelope />
      </div>
      <p>Lorem Ipsum Disclaimer:
        By accessing and using this website,
        you hereby acknowledge that all Lorem Ipsum content,
        including but not limited to, dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua.
      </p>
    </footer>
  )
}

export default Footer