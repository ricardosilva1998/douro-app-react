import React from "react";
import "./Header.css";

function printHeader({ firstTitle, bigTitle, subtitle, imageUrl }) {
  const styleBackground = { backgroundImage: `url(${imageUrl})` };
  return (
    <div className="bodyHeader" style={styleBackground}>
      <div className="title">{firstTitle}</div>
      <div className="big_title">{bigTitle}</div>
      <div className="subtitle">{subtitle}</div>
    </div>
  );
}

export default printHeader;
