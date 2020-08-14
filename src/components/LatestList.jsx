import React from "react";
import Photo from "./Photo";
import styled, { css } from "styled-components";
import useWindowWidth from "../hooks/useWindowWidth";
import { v4 as uuidv4 } from "uuid";

const LatestListBlock = styled.div`
  max-width: 1150px;

  & #feed-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: ${({ width }) => width / 40};

    ${({ width }) =>
      width < 800 &&
      css`
        grid-template-columns: repeat(2, 1fr);
      `}
  }
`;

function LatestList({ latPhotos }) {
  const width = useWindowWidth();
  console.log(width);
  return (
    <LatestListBlock width={width}>
      <h1>Latest Feed</h1>
      <ul id="feed-grid">
        {latPhotos.map((photo) => (
          <li key={photo.id}>
            <Photo src={photo} />
          </li>
        ))}
      </ul>
    </LatestListBlock>
  );
}

export default React.memo(LatestList);
