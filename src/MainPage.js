import React, { useState } from "react";
import "./MainPage.css";
import BlocoInfoDir from "./components/Blocks/BlocoInfoDir";
import BlocoInfoEsq from "./components/Blocks/BlocoInfoEsq";
import { Switch, Route } from "react-router";
import Reservations from "./components/Reservations/Reservation";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Blog from "./components/Blog/Blog";
import News from "./components/News/News";
import Facts from "./components/Facts/Facts";
import BlocoFinal from "./components/Blocks/BlocoFinal";
import imageDiscover from "./components/images/barrel.jpg";
import imageDiscoverBottom from "./components/images/redwine.jpg";
import imageRecipes from "./components/images/steak.png";
import imageRecipesBottom from "./components/images/paisagem.jpg";
import imageFreshSights from "./components/images/douro.jpg";
import imageFreshSightsBottom from "./components/images/app.jpg";
import imageHeader from "./components/images/head.jpg";
import imageApp from "./components/images/app-icon.png";

function MainPage({
  title,
  subTitle,
  text,
  imageBottom,
  imageInfo,
  imageUrl,
  linkSite,
}) {
  const [firstTitle] = useState("");
  const [bigTitle] = useState("");
  const [subtitle] = useState("");

  return (
    <div className="MainPage">
      <Switch>
        <Route exact path="/douro-app-test">
          <Header
            firstTitle="The True Taste of"
            bigTitle="Douro"
            subtitle="2021"
            imageUrl={imageHeader}
          />
          <div className="info_main">
            <div className="single_info">
              <BlocoInfoEsq
                title="Discover"
                subTitle="The Story"
                text="Douro’s vines have been growing since the Romans made wine on the hilly banks of the Douro river throughout their long occupation of the Iberian Peninsula. Later, following the establishment of the Portugal Kingdom in the 12th century, the country became an important exporter of wine. However it was not until mid 17th century, that the Douro Valley became the source of what we know has Port Wine"
                linkSite="/facts"
                imageInfo={imageDiscover}
                imageBottom={imageDiscoverBottom}
                imageTitle="Tasteful"
                imageSubtitle="Recipes"
              />
            </div>
            <div className="single_info">
              <BlocoInfoDir
                title="Check Out"
                subTitle="Our Recipes"
                text="For those with pure food indulgence in mind, we leave here the best combinations that you can make with Port Wine to make your meals tastier."
                linkSite="https://blog.winetourismportugal.com/easy-recipes-with-port-wine"
                imageInfo={imageRecipes}
                imageBottom={imageRecipesBottom}
                imageTitle="The Perfect"
                imageSubtitle="End"
              />
            </div>
            <div className="single_info">
              <BlocoInfoEsq
                title="Fresh"
                subTitle="New Sights"
                text="Now that you know the story and you tasted a bit of the wine, you can now maybe think of making a reservation to see the Douro Vines in person aswell as the big wooden containers where the wine is cured, with a finale of a tasting from one of our choice producers"
                linkSite="/reservations"
                imageInfo={imageFreshSights}
                imageBottom={imageFreshSightsBottom}
                imageTitle="Future"
                imageSubtitle="Projects"
              />
            </div>
            <BlocoFinal
              title="Check out"
              subTitle="Our App"
              text="To make things easier we built an app to be published in the future on Play Store that allows our costumers to access a network of multiple tours with the possibility of calling the owners and set navigation directly to the tour organizer office with a simple click"
              imageInfo={imageApp}
            />
          </div>
        </Route>
        <Route path="/news">
          <News />
        </Route>
        <Route path="/about">
          <About
            firstTitle={firstTitle}
            bigTitle={bigTitle}
            subtitle={subtitle}
          />
        </Route>
        <Route path="/reservations">
          <Reservations
            firstTitle={firstTitle}
            bigTitle={bigTitle}
            subtitle={subtitle}
          />
        </Route>
        <Route path="/blog">
          <Blog />
        </Route>
        <Route path="/facts">
          <Facts />
        </Route>
      </Switch>
    </div>
  );
}

export default MainPage;
