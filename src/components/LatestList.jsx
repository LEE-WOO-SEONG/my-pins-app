import React from "react";
import Photo from "./Photo";
import styled from "styled-components";

const LatestFeedBlock = styled.div`
  width: 70vw;
  & #feed-grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 20px;
  }
`;
function LatestFeed({ latPhotos }) {
  return (
    <LatestFeedBlock>
      <h1>LatestFeed</h1>
      <ul id="feed-grid">
        {latPhotos.map((photo, i) => (
          <li key={i}>
            <Photo src={photo} />
          </li>
        ))}
      </ul>
    </LatestFeedBlock>
  );
}

export default React.memo(LatestFeed);
