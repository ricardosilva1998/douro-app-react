import React from "react";
import "./Info.css";
import LeftColumn from "./LeftColumn";
import RightColumn from "./RightColumn";
import Imagem from "../Imagem/Imagem";

function BlocoInfoEsq({
  title,
  subTitle,
  text,
  imageBottom,
  imageInfo,
  imageTitle,
  imageSubtitle,
  linkSite,
}) {
  return (
    <div className="InfoEsq">
      <div className="blocoInfo">
        <LeftColumn
          title={title}
          subTitle={subTitle}
          text={text}
          linkSite={linkSite}
        />
        <RightColumn imageUrl={imageInfo} />
      </div>
      <div className="imagemAbaixo">
        <Imagem
          imageUrl={imageBottom}
          imageTitle={imageTitle}
          imageSubtitle={imageSubtitle}
        />
      </div>
    </div>
  );
}

export default BlocoInfoEsq;
