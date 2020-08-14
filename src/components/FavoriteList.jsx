import React from "react";
import { useSelector } from "react-redux";
import Photo from "./Photo";

export default function FavoritePhotos() {
  const photos = useSelector((state) => state.photos.photos);
  return (
    <>
      <h1>My Favs</h1>
      <ul id="list-grid" style={{ overflow: "visible" }}>
        {photos
          .filter((photo) => photo.didIliked)
          .map((photo, i) => (
            <li key={i}>
              <Photo src={photo} popular />
            </li>
          ))}
      </ul>
    </>
  );
}
