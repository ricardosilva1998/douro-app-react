import React, { useState } from "react";
import jsonFile from "../../placeSearch/data.json";
import firebase from "firebase/app";
import "firebase/firestore";
import "./Reservation.css";
import styled from "styled-components";
import Header from "../Header/Header";
import reservationsHeader from "../images/douro.jpg";
import { AiFillStar } from "react-icons/ai";

import { useCollectionData } from "react-firebase-hooks/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyB7CldpDNnb4v2sQub9YIqn6-uqqMn9-OQ",
  authDomain: "douro-wines-app.firebaseapp.com",
  databaseURL:
    "https://douro-wines-app-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "douro-wines-app",
  storageBucket: "douro-wines-app.appspot.com",
  messagingSenderId: "862809019357",
  appId: "1:862809019357:web:d00771a18fef64f6bedc34",
  measurementId: "G-CTBD7NQFYK",
});

const firestore = firebase.firestore();

export default function Reservations() {
  const [jsonData, setJsonData] = new useState([]);
  const getData = () => {
    const infoJson = jsonFile.map((info) => {
      return info;
    });
    setJsonData([...jsonData, infoJson]);
  };

  const apiInfo = firestore.collection("placesInfo");
  const place = apiInfo.orderBy("id");
  const [placesInfo] = useCollectionData(place, { idField: "id" });
  const addApiInfoToFirestore = async () => {
    await jsonData.map((infoData) => {
      return infoData.map((placeInfo) => {
        return apiInfo.add(placeInfo);
      });
    });
  };

  return (
    <div className="main_reservations">
      <Header
        firstTitle="Make a"
        bigTitle="Reservation"
        subtitle="Booking a tour is easy and takes just a couple of minutes."
        imageUrl={reservationsHeader}
      />
      <div>
        <button
          className="buttonReservations"
          onClick={() => {
            getData();
            addApiInfoToFirestore();
          }}
        >
          <a>Show Information</a>
        </button>
      </div>

      <div className="reservations">
        {placesInfo &&
          placesInfo.map((info) => {
            return (
              <div key={info.id} className="reservation">
                <div className="infoHeader">
                  <div className="plain_text"></div>
                  {info.name}
                </div>
                <div className="info">
                  <div className="plain_text"></div> {info.rating}{" "}
                  <AiFillStar />
                </div>
                <div className="info">
                  <div className="plain_text"></div> {info.address}
                </div>
                <div className="info">
                  <div className="plain_text"></div> {info.contact}
                </div>
                <div className="info">
                  <div className="plain_text"></div>
                  {info.is_open === true ? "Yes" : "No"}
                </div>
                <div className="info">
                  <div className="plain_text"></div>
                  {info.status === "OPERATIONAL"
                    ? "Operational"
                    : "Out of Business"}
                </div>
                <a
                  href={"https://www.google.pt/maps/search/" + info.address}
                  target="_"
                >
                  <input type="button" value="Directions" />
                </a>
              </div>
            );
          })}
      </div>
    </div>
  );
}
