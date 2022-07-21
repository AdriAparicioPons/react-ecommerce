import React from "react";
import "./LoginForm.css";
import { useState } from "react";
import logo from "../../img/logo.webp";
import { useNavigate } from "react-router-dom";

const registeredUsers = [
    {email: "matias@fullstack.cocina", password:"123456"},
    {email: "ivan@fullstack.cocina", password:"123456"},
    {email: "miguel@farinha.lisboa", password:"mrtula"},
    {email: "adria@desaparicio.basket", password:"123456"},
    {email: "roger@aerodinamixs.calvo", password:"123456"},
    {email: "reduan@ramadan.dingdong", password:"123456"},
    {email: "adria@valles.festivales247", password:"123456"}
];

function LoginForm({ Login, error }) {
  const [user, setUser] = useState({email: "", password: "" });
  const navigate = useNavigate()

  const authUser = (credentials) => {
    const matchedUser = registeredUsers.find(user => user.email === credentials.email);
    return matchedUser.password === credentials.password
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target)
    const user = Object.fromEntries(formData)
    if(authUser(user)){
        navigate('/')
        
    };
  };
  return (
    <div className="container-md">
      <div className="login-dark p-3 shadow-lg rounded mx-auto mt-5 w-100">
        <div className="pt-3">
          <img src={logo} className="w-50" />
          <h2 className="text-white title">Send it!</h2>
        </div>

        <form onSubmit={submitHandler} className="mt-5">
          <div className="form-group">
            {error != "" ? <div className="error">{error}</div> : ""}
            <input
              type="email"
              name="email"
              className="form-control form-control-sm bg-light w-25 mb-3"
              placeholder="Email Id"
              onChange={(e) =>
                setUser({ ...user, email: e.target.value })
              }
              value={user.email}
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              name="password"
              className="form-control form-control-sm bg-light w-25"
              placeholder="Password"
              onChange={(e) =>
                setUser({ ...user, password: e.target.value })
              }
              value={user.password}
            />
          </div>

          <div className="form-group form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="rememberCheckBox"
            />
            <label
              className="form-check-label text-light"
              for="rememberCheckBox"
            >
              Remember me?
            </label>
          </div>

          <div className="mt-5">
            <input
              type="submit"
              value="Login"
              className="btn btn-sm btn-light col"
            />
          </div>

          <div className="text-center mt-2">
            <a href="#" className="text-warning">
              Forgot Password?
            </a>
          </div>

          <div className="mt-5">
            <p className="text-white text-center">
              Don't have an account?
              <a href="#" className="text-warning">
                Click here to register
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
