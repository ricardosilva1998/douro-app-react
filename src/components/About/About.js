import React from "react";
import Header from "../Header/Header";
import "./About.css";
import Profile from "./Profile";
import ProfileEsq from "./ProfileEsq";
import imagemRicardo from "../images/ricardo.png";
import aboutHeader from "../images/staff.jpg";

function About() {
  return (
    <div>
      <Header
        firstTitle="About"
        bigTitle="Us"
        subtitle="More About Our Staff and Company Opinion and Info"
        imageUrl={aboutHeader}
      />
      <Profile
        name="Ricardo"
        surname="Silva"
        quote="“Café para mudar o que posso. Vinho para aceitar o que não posso”"
        image={imagemRicardo}
        instagram="https://www.instagram.com/r1c4rd0r6/"
      />
    </div>
  );
}

export default About;
