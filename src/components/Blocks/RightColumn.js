import React from "react";
import "./RightColumn.css";
import Imagem from "../Imagem/Imagem";

function printRightColumn({ imageUrl }) {
  return (
    <div className="printRightColumn">
      <div className="row">
        <div className="column">
          <Imagem imageUrl={imageUrl} />
        </div>
      </div>
    </div>
  );
}

export default printRightColumn;
