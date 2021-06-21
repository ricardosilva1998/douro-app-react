import React from "react";
import "./InfoFacts.css";
import LeftColumn from "../components/LeftColumn";
import RightColumn from "../components/RightColumn";
import Imagem from "../components/Imagem";

function printInfoFacts() {
  return (
    <div className="row">
      <LeftColumn />
      <RightColumn />
      <Imagem />
      <LeftColumn />
      <RightColumn />
      <Imagem />
    </div>
  );
}

export default printInfoFacts;
