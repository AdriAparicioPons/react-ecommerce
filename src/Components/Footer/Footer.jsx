import React from 'react'
import logo from '../../img/logo.webp';
import './Footer.css';
import {GrFacebook} from "react-icons/gr"
import {IoLogoYoutube, IoLogoTwitter} from "react-icons/io"
import {BsInstagram } from "react-icons/bs"
import {FaEnvelope } from "react-icons/fa"

function Footer() {
  return ( 
        <div className="container ">
  <footer>
    <div>
    <img className="footlogo"src={logo}/>
    </div>
    <ul className="justify-content-end list-unstyled d-flex">
      <li><GrFacebook className="light"/></li>
      <li><IoLogoTwitter className="light"/></li>
      <li><BsInstagram className="light"/></li>
      <li><IoLogoYoutube className="light" /></li>
      <li><FaEnvelope className="light"/></li> 
    </ul>
  </footer>
</div>
  )
}

export default Footer