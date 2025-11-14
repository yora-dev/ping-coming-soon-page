import { useState } from "react";
import Logo from "./assets/logo.svg";
import Illustration from "./assets/illustration-dashboard.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [isValid, setIsValid] = useState(true);

  function handleSubmit() {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input)) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  }
  return (
    <>
      <div className="main-container">
        <img src={Logo} alt="" className="logo" />
        <h1 className="ping-header">
          We are Launching <span className="bold"> soon!</span>
        </h1>
        <p className="ping-msg">Subscribe and get notified.</p>

        <form className="form-container">
          <div className="input-container">
            <input
              type="email"
              placeholder="Your email address..."
              className="input-field"
              value={input}
              onChange={(event) => setInput(event.target.value)}
            />
            {!isValid && (
              <p className="error-msg">Please provide a valid email address.</p>
            )}
          </div>
          <button
            type="submit"
            className="submit-btn"
            disabled={input.length <= 0}
            onClick={handleSubmit}
          >
            Notify Me
          </button>
        </form>

        <img src={Illustration} alt="" className="dash-board" />

        <div className="footer">
          <div className="social-container">
            <FontAwesomeIcon className="icon" icon={faFacebookF} />
            <FontAwesomeIcon className="icon" icon={faTwitter} />
            <FontAwesomeIcon className="icon" icon={faInstagram} />
          </div>

          <p className="copyright">
            &copy; Copyright Ping. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
