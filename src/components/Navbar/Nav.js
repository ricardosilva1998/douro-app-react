import React from "react";
import "./Nav.css";
import { AiFillHome } from "react-icons/ai";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="menu">
      <Link to="/douro-app-test">
        <AiFillHome />
      </Link>
      <Link to="/news">News</Link>
      <Link to="/reservations">Reservations</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/facts">Facts</Link>
      <Link to="/about">About</Link>
    </div>
  );
}

export default Nav;
