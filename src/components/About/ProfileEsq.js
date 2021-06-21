import React from "react";
import "./ProfileEsq.css";
import { FaWineBottle } from "react-icons/fa";

function ProfileEsq({ name, surname, quote, image, instagram }) {
  return (
    <div className="profile">
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
      <div className="image">{<img src={image} alt="" />}</div>
    </div>
  );
}

export default ProfileEsq;
