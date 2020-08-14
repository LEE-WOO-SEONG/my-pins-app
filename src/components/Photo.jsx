import React from "react";
import { useDispatch } from "react-redux";
import styled, { css } from "styled-components";
import { togglePhotos } from "../redux/modules/photo";

const PhotoCard = styled.div`
  & img {
    border-radius: 12px;
    width: 210px;

    box-shadow: 1 1 3px lightgray;

    :hover {
      filter: brightness(0.85);
    }
    :active {
      transform: scale(0.994);
    }

    ${(props) =>
      props.popular === true &&
      css`
        height: 300px;
      `}
  }
`;

export default function Photo({ src, popular }) {
  const dispatch = useDispatch();
  return (
    <PhotoCard popular={popular}>
      <img
        data-src=""
        src={src.url}
        alt="?"
        onClick={() => handleClick(src.id)}
      />
    </PhotoCard>
  );
  function handleClick(id) {
    dispatch(togglePhotos(id));
    console.log("i like this");
    // onclick();
  }
}
