import React from "react";
import Header from "./../Header/Header";
import Footer from "./../Footer/Footer";
import RidersObj from "./RidersObj.js";
import MacAskill from "../../img/Rider4.avif";
import Anonymus from "../../img/Rider1.jpg";
import Marinelli from "../../img/Rider7.jpg";
import Hildred from "../../img/Rider3.jpg";
import Wibmer from "../../img/Rider5.jpg";
import Lewis from "../../img/Rider6.jpg";
import Garay from "../../img/Rider8.jpg";
import "./Riders.css";

function Riders(props) {
  const { cart, user, setUser } = { ...props };

  return (
    <>
      <Header cart={cart} user={user} setUser={setUser} />
      <div className="content bg-dark">
        <div className="row pt-3">
          <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
            <div className="wrapp">
              <img
                src={Hildred}
                className="w-100  rounded mb-4"
                alt="Boat on Calm Water"
              />
              <p className="carousel-caption bill">Bill Hildred</p>
            </div>
            <div className="wrapp">
              <img
                src={Lewis}
                className="w-100 shadow-1-strong rounded mb-4"
                alt="Wintry Mountain Landscape..."
              />
              <p className="carousel-caption lewis">Josh Lewish</p>
            </div>
          </div>
          <div className="col-lg-4 mb-4 mb-lg-0">
            <div className="wrapp">
              <img
                src={Marinelli}
                className="w-100 shadow-1-strong rounded mb-4"
                alt="Mountains in the Clouds"
              />
              <p className="carousel-caption marinelli">Andrea Marinelli</p>
            </div>
            <div className="wrapp">
              <img
                src={MacAskill}
                className="w-100 shadow-1-strong rounded mb-4"
                alt="Boat on Calm Water"
              />
              <p className="carousel-caption macaskill">Danny MacAskill</p>
            </div>
          </div>
          <div className="col-lg-4 mb-4 mb-lg-0">
            <div className="wrapp">
              <img
                src={Wibmer}
                className="w-100 shadow-1-strong rounded mb-4"
                alt="Waves at Sea"
              />
              <p className="carousel-caption wibmer">Fabio Wibmer</p>
            </div>
            <div className="wrapp">
              <img
                src={Garay}
                className="w-100 shadow-1-strong rounded mb-4"
                alt="Yosemite National Park"
              />
              <p className="carousel-caption garay">Iago Garay</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Riders;
