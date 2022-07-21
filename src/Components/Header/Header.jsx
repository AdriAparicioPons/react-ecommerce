import logo from '../../img/logo.webp';
import './Header.css';
import CardModal from "../CardModal/CardModal"
import {useState} from 'react'




const Header = (props) => {

  const {cart, user, setUser} = {...props}

  const logout = () => {
    setUser({name:'', email: '', password: ''})
  }
  // const logout = () => {
  //   setUser(prevUser => console.log(prevUser))
  // }

  return (
    <>
    
    <div className="wrapper">
      
    <ul className="nav justify-content-between">
  <li className="nav-item">
     <img className= "logotype"src={logo}/>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Bikes</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Riders</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Shops</a>
  </li>
  <li className="nav-item">
    <CardModal/>
  </li>
  <li className="nav-item">
    <button className="nav-link btn btn-dark " onClick={logout}>Log out</button>
  </li>
</ul>

    </div>
    </>
  )
}

export default Header