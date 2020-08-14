import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import styled from "styled-components";

// components
import DarkModeButton from "./DarkmodeButton";

// styles
import { SideTab } from "../styles/SideTabStyle";
import { startGetPhotosActionCreator } from "../redux/modules/photo";
// import { SearchInput } from "../styles/SearchInput";

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
  const { token } = useSelector((state) => state.auth);

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
          <div>
            {sideTabs(token).map(({ id, title, link }) => (
              <li key={id}>
                <Link to={link}>{title}</Link>
              </li>
            ))}
          </div>
          <li>
            <button>
              {token === null && (
                <>
                  <i className="fab fa-twitter"></i>
                  <span>Signin</span>
                </>
              )}
              {token !== null && <span>Create Post</span>}
            </button>
          </li>
        </ul>{" "}
      </SideTab>
    </>
  );
}

export default Outline;

// 사이드 메뉴 구성
function sideTabs(token) {
  const side = [
    {
      id: 1,
      title: "Feed",
      link: "/",
    },
  ];

  if (token !== null) {
    side.push({
      id: 2,
      title: "Favorite",
      link: "/favorite",
    });
  }

  return side;
}
