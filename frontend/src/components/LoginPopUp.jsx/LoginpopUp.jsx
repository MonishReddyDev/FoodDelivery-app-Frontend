import { useState } from "react";
import "./LoginpopUp.css";
import { assets } from "../../assets/assets";

const LoginpopUp = ({ setShowLogin }) => {
  const [currentState, setCurrentState] = useState("Login");

  return (
    <div className="LoginpopUp">
      <form action="" className="login-popup-Container">
        <div className="login-popup-title">
          <h2>{currentState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt="Close popup"
            style={{ cursor: "pointer" }}
          />
        </div>
        <div className="login-popup-input">
          {currentState === "Sign Up" && (
            <input type="text" placeholder="Full Name" required />
          )}
          <input type="email" placeholder="Email address" required />
          <input type="password" placeholder="Password" required />
        </div>
        <button type="submit">
          {currentState === "Sign Up" ? "Create Account" : "Login"}
        </button>
        {currentState === "Sign Up" && (
          <div className="login-popup-condition">
            <input type="checkbox" required />
            <p>
              I agree to the{" "}
              <a href="/terms" target="_blank" rel="noopener noreferrer">
                Terms & Conditions
              </a>
            </p>
          </div>
        )}
        {currentState === "Login" ? (
          <p>
            Don't have an account?{" "}
            <span
              onClick={() => setCurrentState("Sign Up")}
              style={{ cursor: "pointer", color: "tomato" }}
            >
              Sign up here
            </span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span
              onClick={() => setCurrentState("Login")}
              style={{ cursor: "pointer", color: "tomato" }}
            >
              Login here
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginpopUp;
