import React from "react";
import { Link } from "react-router-dom";
import Search from "../Search/Search.js";
import Style from "./NavBar.module.css";

function NavBar() {
  return (
    <div className={Style.navbar}>
      <Link to="/">
        <div className={Style.navbar__logo}>
          <img
            src="https://www.iconpacks.net/icons/2/free-parking-sign-icon-2526-thumb.png"
            alt=""
          />
          <h1>PARKING LOT CHALLENGE</h1>
        </div>
      </Link>
      <div className={Style.navbar__right}>
        <div className={Style.navbar__options}>
          <Link to="/">
            <span>Home</span>
          </Link>
          {/* <Link to="/">
            <span>Map</span>
          </Link> */}
        </div>
      </div>
    </div>
  );
}

export default NavBar;
