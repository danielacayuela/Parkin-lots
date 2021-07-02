import React, { useState } from "react";
import { useHistory } from "react-router";
import Style from "./Search.module.css";

function Search() {
  const history = useHistory();
  const [search, setSearch] = useState("");
  function handleOnClick(e) {
    history.replace(`/${search}`);
  }
  return (
    <div className={Style.searchbar}>
      <input
        type="search"
        placeholder=" Type your search ... "
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={handleOnClick}>Search</button>
    </div>
  );
}

export default Search;
