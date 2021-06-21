import React from "react";
import "./Footer.css";
import { AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";
import { FaPinterestSquare, FaFacebookSquare, FaYoutube } from "react-icons/fa";
function printFooter() {
  return (
    <div className="footer">
      <a href="https://twitter.com/WineDouro">
        <AiOutlineTwitter />
      </a>
      <a href="https://www.instagram.com/dourowineguide2020/">
        <AiFillInstagram />
      </a>
      <a href="https://www.pinterest.pt/dourowineguide/">
        <FaPinterestSquare />
      </a>
      <a href="https://www.facebook.com/Douro-Wine-Guide-104963368158867">
        <FaFacebookSquare />
      </a>
      <a href="https://www.youtube.com/channel/UCxCR3rLkFD3Ejx_U4AemxDA">
        <FaYoutube />
      </a>
    </div>
  );
}

export default printFooter;
