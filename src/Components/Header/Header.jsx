import logo from '../../img/logo.webp';
import './Header.css';
import CardModal from "../CardModal/CardModal"
import {useState} from 'react'




const Header = () => {
 
  const logoutHandler = e =>{
    e.preventDefault();
    // Logout();
  }
  return (
    <>
    
    <div className="wrapper">
      
    <ul className="nav justify-content-between">
  <li className="nav-item">
     <img className= "logotype"src={logo}/>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Home</a>
  </li>
  <li className="nav-item">
    <CardModal/>
  </li>
  <li className="nav-item">
    <form onSubmit={logoutHandler}>
    <button className="nav-link" type='submit' >Log out</button>
    </form>
  </li>
</ul>

    </div>
    </>
  )
}

export default Header