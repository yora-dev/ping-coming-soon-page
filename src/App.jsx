import { useState } from "react";
import Logo from "./assets/logo.svg";
import Illustration from "./assets/illustration-dashboard.png";

import "./App.css";

function App() {
  return (
    <>
      <div className="main-container">
        <img src={Logo} alt="" className="logo" />
        <h1 className="ping-header">
          We are Launching <span className="bold"> soon!</span>
        </h1>
        <p className="ping-msg">Subscribe and get notified</p>

        <div className="form-container">
          <input
            type="email"
            name=""
            id=""
            placeholder="Your email address..."
          />
          <button type="submit" className="submit-btn">
            Notify Me
          </button>
        </div>

        <img src={Illustration} alt="" className="dash-board" />
      </div>
    </>
  );
}

export default App;
