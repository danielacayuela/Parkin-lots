import React from "react";
import { getStar, getStars } from "./functions";

function Rating({ value }) {
  return <span>{getStars(value).map((val) => getStar(val))}</span>;
}

export default Rating;
