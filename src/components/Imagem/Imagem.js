import React from "react";
import "./Imagem.css";

function Imagem({ imageTitle, imageSubtitle, imageUrl }) {
  const styleBackground = { backgroundImage: `url(${imageUrl})` };
  return (
    <div className="Imagem" style={styleBackground}>
      <div className="imageText">
        <div className="imageTitle">{imageTitle}</div>
        <div className="imageSubtitle">{imageSubtitle}</div>
      </div>
    </div>
  );
}

export default Imagem;
