import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getParkings } from "../../Actions/index";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import Card from "./Card.js";
import Loading from "../Loading/Loading.js";
import Style from "./Display.module.css";

export default function Display({ match }) {
  const searchQuery = match.params.city;
  console.log("SEARCH>>", searchQuery);
  const dispatch = useDispatch();
  const parkings = useSelector((state) => state.parkings);
  const noResults = useSelector((state) => state.noResults);
  console.log("PARKINGS>>>", parkings);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(async () => {
    console.log("ENTRE USEEFFECT");
    setLoading(true);
    await dispatch(getParkings(searchQuery));
    setLoading(false);
  }, [searchQuery]);

  function handlePageNext(e) {
    e.preventDefault();
    let max = Math.ceil(parkings.length / 20 - 1);
    if (max < 0) {
      max = 1;
    }
    if (page < max) {
      setPage(page + 1);
    }
  }

  function handlePagePrev(e) {
    e.preventDefault();
    if (page > 0) {
      setPage(page - 1);
    }
  }

  function sortScore(arg) {
    return (
      Math.round(
        ((arg.review_count * arg.rating) / (arg.review_count + 1)) * 100
      ) / 100
    );
  }
  return (
    <div className={Style.display}>
      <div className={Style.display__cards}>
        {loading ? (
          <Loading />
        ) : parkings.length > 0 ? (
          parkings
            .sort((a, b) => {
              return sortScore(a) - sortScore(b);
            })
            .slice(page * 20, page * 20 + 20)
            .map((parking) => {
              return <Card parking={parking} key={parking.id} />;
            })
        ) : noResults ? (
          <h4>Sorry, no parking lots were found</h4>
        ) : (
          <Loading />
        )}
      </div>
      {!loading ? (
        <div className={Style.display__pagination}>
          <button value="prev" onClick={handlePagePrev}>
            <GrFormPrevious />
          </button>
          <button>{page + 1}</button>
          <button value="next" onClick={handlePageNext}>
            <GrFormNext />
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
