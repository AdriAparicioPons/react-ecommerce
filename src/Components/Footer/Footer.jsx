import React from "react";
import logo from "../../img/logo.webp";
import "./Footer.css";
import { GrFacebook } from "react-icons/gr";
import { IoLogoYoutube, IoLogoTwitter } from "react-icons/io";
import { BsInstagram } from "react-icons/bs";
import { FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
   

    <footer className="site-footer">
      <div className="container rounded ">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>Our Mission</h6>
            <p className="text-justify">
              Our mission at Santa Cruz Bicycles is to make the best bicycles,
              and to have fun doing it. For 25 years, we've been doing just
              that, and finding unique and innovative solutions for everything
              from suspension design to manufacturing processes along the way.
            </p>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Categories</h6>
            <ul className="footer-links">
              <li>
                <a href="">Bikes</a>
              </li>
              <li>
                <a href="">Riders</a>
              </li>
              <li>
                <a href="">Shops</a>
              </li>
            </ul>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Experience</h6>
            <ul className="footer-links">
              <li>
                <a href="">Stories</a>
              </li>
              <li>
                <a href="">Events</a>
              </li>
              <li>
                <a href="">
                  Tech Support
                </a>
              </li>
              <li>
                <a href="">
                  Lifetime Guarantee
                </a>
              </li>
              <li>
                <a href="">Carbon Experience</a>
              </li>
            </ul>
          </div>
        </div>
        <hr />
      </div>
      <div className="container">
      <img className="footlogo "src={logo}/>
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">
              Copyright &copy; 2022 All Rights Reserved by SantaCruz.
            </p>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="justify-content-end list-unstyled  d-flex">
              <li>
                <GrFacebook className="light" />
              </li>
              <li>
                <IoLogoTwitter className="light" />
              </li>
              <li>
                <BsInstagram className="light" />
              </li>
              <li>
                <IoLogoYoutube className="light" />
              </li>
              <li>
                <FaEnvelope className="light" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
