import React from "react";
import Outline from "../components/Outline";
import FavoriteList from "../components/FavoriteList";

function Favorite() {
  return (
    <>
      <Outline />
      <section className="main">
        <FavoriteList />
      </section>
    </>
  );
}

export default Favorite;
