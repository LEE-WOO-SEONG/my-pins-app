import React from "react";
import { useSelector } from "react-redux";
import Photo from "./Photo";
import styled, { css } from "styled-components";
import useWindowWidth from "../hooks/useWindowWidth";

const FavoritePhotosBlock = styled.div`
  max-width: 1150px;

  & #feed-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 30px;

    ${({ width }) =>
      width < 1200 &&
      css`
        grid-template-columns: repeat(2, 1fr);
      `}
  }
`;

export default function FavoritePhotos() {
  const photos = useSelector((state) => state.photos.photos);
  const width = useWindowWidth();
  return (
    <FavoritePhotosBlock width={width}>
      <h1>My Favs</h1>
      <ul id="list-grid" style={{ overflow: "visible" }}>
        {photos
          .filter((photo) => photo.didIliked)
          .map((photo) => (
            <li key={photo.id}>
              <Photo src={photo} />
            </li>
          ))}
      </ul>
    </FavoritePhotosBlock>
  );
}
