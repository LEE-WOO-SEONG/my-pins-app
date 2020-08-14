import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled, { css } from 'styled-components';
import { togglePhotos } from '../redux/modules/photo';
import { IoMdHeartEmpty, IoMdHeart } from 'react-icons/io';

const PhotoCard = styled.div`
  position: relative;
  & img {
    border-radius: 12px;
    width: 210px;
    height: 300px;
    box-shadow: 1 1 3px lightgray;

    :hover {
      filter: brightness(0.85);
    }
    :active {
      transform: scale(0.994);
    }

    ${props =>
      props.popular === true &&
      css`
        width: 240px;
        height: 320px;
      `}
  }

  &:hover {
    & button {
      display: block;
      transition: all 400ms ease-in-out;
    }
  }
`;

const LikeButton = styled.button`
  display: none;
  z-index: 2;
  position: absolute;
  top: 0;
  right: 0;
  padding: 15px;
  background-color: transparent;
  border: none;
  color: #f03e3e;
  font-size: 36px;
  ${({ liked }) =>
    liked &&
    css`
      display: block;
    `}
`;

export default function Photo({ src, popular }) {
  const dispatch = useDispatch();
  const [liked, setLiked] = useState(false);

  const handleClick = React.useCallback(
    id => {
      dispatch(togglePhotos(id));
      setLiked(liked => !liked);
    },
    [dispatch, setLiked]
  );

  return (
    <PhotoCard popular={popular}>
      <LikeButton liked={liked}>
        {liked ? <IoMdHeart /> : <IoMdHeartEmpty />}
      </LikeButton>
      <img
        data-src=""
        src={src.url}
        alt="?"
        onClick={() => handleClick(src.id)}
      />
    </PhotoCard>
  );
}
