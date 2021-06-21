import React from "react";
import "./Facts.css";
import Header from "../Header/Header";
import BlocoInfoEsq from "../Blocks/BlocoInfoEsq";
import BlocoInfoDir from "../Blocks/BlocoInfoDir";
import imageHeaderFacts from "../images/paisagem.jpg";
import imageRabelo from "../images/rabelo.jpg";
import imageGrape from "../images/grape.jpg";
import imageBarrel from "../images/oakbarrel.jpg";
import imageValley from "../images/vineyards.jpg";

function Facts() {
  return (
    <div className="facts">
      <Header
        firstTitle="Learn"
        bigTitle="More"
        subtitle="More facts about what makes Port wine so good"
        imageUrl={imageHeaderFacts}
      />
      <div className="infofacts">
        <div className="single_info_facts">
          <BlocoInfoEsq
            title="The"
            subTitle="Rabelo Boat"
            text="One of the most popular symbols of Porto is the Rabelo boat. They were used like nautical horses that carried barrels of Porto wine from the vineyards to the Porto wine cellars in Vila Nova de Gaia"
            linkSite="https://portoalities.com/en/what-are-the-rabelo-boats/"
            imageInfo={imageRabelo}
            imageBottom={imageRabelo}
            imageTitle="Tasteful"
            imageSubtitle="Recipes"
          />
        </div>
        <div className="single_info_facts">
          <BlocoInfoDir
            title="The"
            subTitle="Wine Grapes"
            text="There are hundreds of varieties of grapes that are sanctioned for port production, although only five (Tinta Barroca, Tinto Cão, Tinta Roriz, Touriga Francesa and Touriga Nacional) are widely cultivated and used"
            linkSite="https://www.taylor.pt/en/what-is-port-wine/the-douro-valley/port-grape-varieties"
            imageInfo={imageGrape}
            imageBottom={imageGrape}
            imageTitle="The Perfect"
            imageSubtitle="End"
          />
        </div>
        <div className="single_info_facts">
          <BlocoInfoEsq
            title="The"
            subTitle="Oak Barrels"
            text="The famous Port Wine barrels are made of old oak and that is one of the things that gives the wine his taste and smell besides the condiments and the grapes"
            linkSite="https://quintadapacheca.com/pt-pt/pages/quinta-da-pacheca-wine-barrels"
            imageInfo={imageBarrel}
            imageBottom={imageBarrel}
            imageTitle="Future"
            imageSubtitle="Projects"
          />
        </div>
        <div className="single_info_facts">
          <BlocoInfoDir
            title="The"
            subTitle="Valley"
            text="Know more about the full story of the Douro valley"
            linkSite="https://www.taylor.pt/en/what-is-port-wine/the-douro-valley"
            imageInfo={imageValley}
            imageBottom={imageValley}
            imageTitle="The Perfect"
            imageSubtitle="End"
          />
        </div>
      </div>
    </div>
  );
}

export default Facts;
