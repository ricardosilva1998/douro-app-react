import React from "react";
import "./Profile.css";
import { FaWineBottle } from "react-icons/fa";

function Profile({ name, surname, quote, image, instagram }) {
  return (
    <div className="profile">
      <div className="image">{<img src={image} alt="" />}</div>
      <div className="descrition">
        <div className="Name">
          <div className="name">{name}</div>
          <div className="surname">{surname}</div>
          <div className="icon">
            <FaWineBottle />
          </div>
          <div className="quote">{quote}</div>
        </div>
        <a href={instagram} target="_">
          <input type="button" value="Click Me" />
        </a>
      </div>
    </div>
  );
}

export default Profile;
