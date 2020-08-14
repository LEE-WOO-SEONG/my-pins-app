import React from 'react';
import Photo from './Photo';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

const LatestListBlock = styled.div`
  width: 70vw;
  & #feed-grid {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    column-gap: 20px;
  }
`;
function LatestList({ latPhotos }) {
  return (
    <LatestListBlock>
      <h1>LatestFeed</h1>
      <ul id="feed-grid">
        {latPhotos.map((photo, i) => (
          <li key={uuidv4()}>
            <Photo src={photo} />
          </li>
        ))}
      </ul>
    </LatestListBlock>
  );
}

export default React.memo(LatestList);
