import React from 'react'
import logo from '../../img/logo.webp';
import './Footer.css';


function Footer() {
  return ( 
        <div className="container">
  <footer>
    <div>
    <img className="footlogo"src={logo}/>
    </div>

    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
      <li><i className="fa-brands fa-facebook"></i></li>
      <li><i className="fa-brands fa-twitter"></i></li>
      <li>BsInstagram</i></li>
      <li><i className="fa-brands fa-youtube"></i></li>
      <li><i className="fa-thin fa-envelope"></i></li>
    </ul>
  </footer>
</div>
  )
}

export default Footer