import logo from "../../img/logo.webp";
import "./Header.css";
import CardModal from "../CardModal/CardModal";
import { Link } from "react-router-dom";
import hand from "../../img/SntCruzLogo.png"

const Header = (props) => {
  const { cart, user, setUser } = { ...props };

  const logout = () => {
    setUser({ name: "", email: "", password: "" });
  };

  return (
    <>
      <nav className="wrapper d-flex ">
      <div className='logos'>
        <Link to="/">
                <img className="logotype2 d-inline-block align-top" src={hand} />
                <img className="logotype d-inline-block align-top" src={logo} />
              </Link>
      </div>
        <ul className="links d-flex">          
          <li className="bikesLi">
            <Link className="bikes" to="/">
              Bikes
            </Link>
          </li>
          <li className="ridersLi">
            <Link className="riders" to="/riders">
              Riders
            </Link>
          </li>
          <li className="shopsLi">
            <Link className="shops" to="/shops">
              Shops
            </Link>
          </li>
          <li className="">
            <Link to="/login">
              <button className=" logout btn btn-dark " onClick={logout}>
                Log out
              </button>
            </Link>
            </li>
          <li className="">
            <div className="cart">
            <CardModal />
            </div>
          </li>
          
          
        </ul>
      </nav>
    </>
  );
};

export default Header;
