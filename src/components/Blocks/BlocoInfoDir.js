import React from "react";

import LeftColumn from "./LeftColumn";
import RightColumn from "./RightColumn";
import Imagem from "../Imagem/Imagem";

function BlocoInfoDir({
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
        <RightColumn imageUrl={imageInfo} />
        <LeftColumn
          title={title}
          subTitle={subTitle}
          text={text}
          linkSite={linkSite}
        />
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

export default BlocoInfoDir;
