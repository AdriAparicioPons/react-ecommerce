import React from "react";
import { Routes, Route } from "react-router-dom";
import {useState, useEffect} from 'react'
import Header from './Components/Header/Header'
import Body from './Components/Body/Body'
import Footer from './Components/Footer/Footer'


function App() {
  const [cart, cartAdd] = useState(
    JSON.parse(localStorage.getItem("shoppingCart")) || []
  );
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const adminUser = {
    email: "admin@mati.com",
    password: "kebab",
  };

  useEffect(() => {
    console.log("ënter useEffect");
    localStorage.setItem("shoppingCart", [JSON.stringify(cart)]);
    
  }, [cart]);

  const Login = (details) => {
    console.log(details);
    if (
      details.email == adminUser.email &&
      details.password == adminUser.password
    ) {
      setUser({
        name: details.name,
        email: details.email,
        password: details.password,
      });
    } else {
      setError(
        <div class="alert alert-danger" role="alert">
          Credentials do not match! Please try again
        </div>
      );
    }
  };

  return (
    <>
      <Header cart={cart} user={user} setUser={setUser} />
      <Body cart={cart} cartAdd={cartAdd} />
      <Footer />
    </>
  );
}

export default App;
