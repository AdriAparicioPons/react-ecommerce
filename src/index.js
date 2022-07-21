import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Bikes from "./Components/Bikes/Bikes";
import Riders from "./Components/Riders/Riders";
import Shops from "./Components/Shops/Shops";
import LoginForm from "./Components/LoginForm/LoginForm";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/riders" element={<Riders />} />
      <Route path="/shops" element={<Shops />} />
      <Route path="/login" element={<LoginForm />} />
    </Routes>
  </BrowserRouter>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
