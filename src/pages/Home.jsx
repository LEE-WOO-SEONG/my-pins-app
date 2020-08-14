import React from "react";
import Outline from "../components/Outline";
import useAuth from "../hooks/useAuth";
import PhotosContainer from "../containers/PhotosContainer";

function Home() {
  useAuth();

  return (
    <>
      <Outline />
      <section className="main">
        <PhotosContainer />
      </section>
    </>
  );
}

export default Home;
