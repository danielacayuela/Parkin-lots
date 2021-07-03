import React from "react";
import Rating from "../Rating/Rating.js";
import Style from "./Card.module.css";

function Card({ parking }) {
  return (
    <div className={Style.card__container}>
      <h1 className={Style.card__title}>{parking.name}</h1>
      <div className={Style.card__info}>
        <div className={Style.card__left}>
          <div className={Style.card__image}>
            <img
              src={
                parking?.image_url ||
                "https://www.iconpacks.net/icons/2/free-parking-sign-icon-2526-thumb.png"
              }
            />
          </div>
        </div>
        <div className={Style.card__rigth}>
          <div className={Style.card__section}>
            <strong>Adress:</strong>
            <small>{parking?.location.display_address.join(",")}</small>
          </div>
          <div className={Style.card__section}>
            <strong>Rating:</strong>
            <small>
              <Rating value={parking?.rating} />
            </small>
          </div>
          <div className={Style.card__section}>
            <strong>Reviews:</strong>
            <small>{parking.review_count}</small>
          </div>
          <div className={Style.card__section}>
            <strong> Score:</strong>
            <small>
              {Math.round(
                ((parking?.review_count * parking?.rating) /
                  (parking?.review_count + 1)) *
                  100
              ) / 100}
            </small>
          </div>
          <div className={Style.card__button}>
            <button>
              <a href={parking?.url}>Yelp</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
