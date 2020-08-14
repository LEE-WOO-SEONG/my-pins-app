import React from "react";
import { Link, useLocation } from "react-router-dom";
import { GoHome } from "react-icons/go";
import { MdFavoriteBorder } from "react-icons/md";

import styled from "styled-components";

// components
import DarkModeButton from "./DarkmodeButton";

// styles
import { SideTab } from "../styles/SideTabStyle";

const SearchInput = styled.div`
  input {
    padding: 10px;
    color: #495057;
    font-size: 18px;
    border-radius: 4px;
    border: #e9ecef 1px solid;
    margin: 10px 30px;
  }
  width: 1150px;
  border-bottom: 1px #495057 solid;
`;

function Outline(props) {
  return (
    <>
      <header className="header">
        <SearchInput>
          <input type="text" placeholder="Search" />
        </SearchInput>
        <DarkModeButton />
      </header>
      <SideTab className="sidebar">
        <ul>
          <div>
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
          </div>
          <li>
            <button>Create Post</button>
          </li>
        </ul>
      </SideTab>
    </>
  );
}

export default Outline;
