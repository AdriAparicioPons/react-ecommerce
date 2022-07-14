import logo from '../../img/logo.webp';
import './Header.css';
import CardModal from "../CardModal/CardModal"


const Header = () => {
  return (
    <>
    
    <div>
      
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
    <a className="nav-link">Log out</a>
  </li>
</ul>

    </div>
    </>
  )
}

export default Header