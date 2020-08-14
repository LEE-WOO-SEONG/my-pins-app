import React from "react";
import Photo from "./Photo";
import styled from "styled-components";

const PopularListBlock = styled.div`
  width: 70vw;

  white-space: nowrap;
  overflow-x: scroll;

  ::-webkit-scrollbar {
    height: 12px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
    -webkit-border-radius: 10px;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb {
    height: 50px;
    width: 50px;
    background: rgba(0, 0, 0, 0.2);
    -webkit-border-radius: 8px;
    border-radius: 8px;
  }

  & #list-grid {
    display: grid;
    grid-auto-flow: column;
    column-gap: 20px;
  }
`;

export default function PopularList({ popPhotos }) {
  return (
    <PopularListBlock>
      <h1>PopularList</h1>
      <ul id="list-grid" style={{ overflow: "visible" }}>
        {popPhotos.map((photo, i) => (
          <li key={i}>
            <Photo src={photo} popular />
          </li>
        ))}
      </ul>
    </PopularListBlock>
  );
}
