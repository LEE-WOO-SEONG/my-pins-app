import React from 'react';
import { Link } from 'react-router-dom';
import { GoHome } from 'react-icons/go';
import { MdFavoriteBorder } from 'react-icons/md';

import styled from 'styled-components';

// components
import DarkModeButton from './DarkmodeButton';

// styles
import { SideTab } from '../styles/SideTabStyle';

const SearchInput = styled.div`
  input {
    padding: 10px;
    color: lightgrey;
    font-size: 18px;
    border-radius: 4px;
    border: #e9ecef 1px solid;
  }
`;

function Outline() {
  return (
    <>
      <section className="header">
        <SearchInput>
          <input type="text" placeholder="Search" />
        </SearchInput>
        <DarkModeButton />
      </section>
      <SideTab className="sidebar">
        <ul>
          <li>
            <Link to="/" exact="true">
              <GoHome />
              <span>Feed</span>
            </Link>
          </li>
          <li>
            <Link to="/favorite" exact="true">
              <MdFavoriteBorder />
              <span>Favorite</span>
            </Link>
          </li>
          <li>
            <button>Sign out</button>
          </li>
        </ul>
      </SideTab>
    </>
  );
}

export default Outline;
