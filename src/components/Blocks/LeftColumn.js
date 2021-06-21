import React from "react";
import "./LeftColumn.css";
import { BiWine } from "react-icons/bi";

function printLeftColumn({ title, subTitle, text, linkSite }) {
  return (
    <div className="printLeftColumn">
      <div className="leftColTitle">{title}</div>
      <div className="leftColSubTitle">{subTitle}</div>
      <div className="wineIcon">
        <BiWine />
      </div>
      <div className="text">{text}</div>
      <button className="button">
        <a href={linkSite}>Click Me!</a>
      </button>
    </div>
  );
}

export default printLeftColumn;
