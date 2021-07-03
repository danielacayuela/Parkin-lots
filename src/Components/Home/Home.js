import React, { useEffect } from "react";
import Search from "../Search/Search.js";
import Style from "./Home.module.css";

function Home() {
  return (
    <div className={Style.home}>
      <div className={Style.home__container}>
        <div className={Style.home__welcome}>
          <p>
            {" "}
            Hi there! To find parking lots in the location you want, enter in
            the search bar the city, city code or address you want to search
            for. The closest results to your search criteria will be displayed,
            ordered by rating.{" "}
          </p>
        </div>
        <div className={Style.home__search}>
          <Search />
        </div>
      </div>
    </div>
  );
}

export default Home;
