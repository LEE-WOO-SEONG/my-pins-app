import React from 'react';
import { Link } from 'react-router-dom';
import { GoHome } from 'react-icons/go';
import { MdFavoriteBorder } from 'react-icons/md';

// components
import DarkModeButton from './DarkmodeButton';

// styles
import { SideTab } from '../styles/SideTabStyle';

function Outline() {
  return (
    <>
      <section className="header">
        <input type="text" />
        <DarkModeButton />
      </section>
      <SideTab className="sidebar">
        <ul>
          <li>
            <Link to="/" exact>
              <GoHome />
              <span>Feed</span>
            </Link>
          </li>
          <li>
            <Link to="/favorite">
              <MdFavoriteBorder />
              <span>Favorite</span>
            </Link>
          </li>
          <li>
            <button>Create Post</button>
          </li>
        </ul>
      </SideTab>
    </>
  );
}

export default Outline;
