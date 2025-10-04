import { useState } from "react";
import { assets } from "../../assets/assets";
import "./Navbar.css";

const Navbar = () => {
  const [menu, setMenu] = useState("home");

  const handleClick = (value) => {
    setMenu(value);
  };

  return (
    <div className="navbar">
      <img src={assets.logo} alt="" className="logo" />
      <ul className="navbar-menu">
        <li
          onClick={() => handleClick("home")}
          className={menu === "home" ? "active" : ""}
        >
          home
        </li>
        <li
          onClick={() => handleClick("menu")}
          className={menu === "menu" ? "active" : ""}
        >
          menu
        </li>
        <li
          onClick={() => handleClick("mobile-app")}
          className={menu === "mobile-app" ? "active" : ""}
        >
          mobile-app
        </li>
        <li
          onClick={() => handleClick("contact us")}
          className={menu === "contact us" ? "active" : ""}
        >
          contact us
        </li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt="" />
          <div className="dot"></div>
        </div>
        <button>sign in</button>
      </div>
    </div>
  );
};

export default Navbar;
