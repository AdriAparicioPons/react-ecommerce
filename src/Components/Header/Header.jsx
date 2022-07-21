import logo from "../../img/logo.webp";
import "./Header.css";
import CardModal from "../CardModal/CardModal";
import { Link } from "react-router-dom";

const Header = (props) => {
  const { cart, user, setUser } = { ...props };

  const logout = () => {
    setUser({ name: "", email: "", password: "" });
  };

  return (
    <>
      <div className="wrapper">
        <ul className="nav justify-content-between">
          <li className="nav-item">
            <Link to="/">
              <img className="logotype" src={logo} />
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Bikes
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/riders">
              Riders
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/shops">
              Shops
            </Link>
          </li>
          <li className="nav-item">
            <CardModal />
          </li>
          <li className="nav-item">
            <Link to="/login">
              <button className="nav-link btn btn-dark " onClick={logout}>
                Log out
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
