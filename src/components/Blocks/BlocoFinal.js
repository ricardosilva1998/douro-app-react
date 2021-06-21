import React from "react";

import LeftColumn from "./LeftColumn";
import RightColumn from "./RightColumn";

function BlocoFinal({
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
      <div className="imagemAbaixo"></div>
    </div>
  );
}

export default BlocoFinal;
