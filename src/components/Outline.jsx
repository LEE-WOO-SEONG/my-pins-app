import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

// components
import DarkModeButton from './DarkmodeButton';

// styles
import { SideTab } from '../styles/SideTabStyle';

function Outline() {
  const { token } = useSelector(state => state.auth);

  return (
    <>
      <section className="header">
        <input type="text" />
        <DarkModeButton />
      </section>
      <SideTab className="sidebar">
        <ul>
          {sideTabs(token).map(({ id, title, link }) => (
            <li key={id}>
              <Link to={link}>{title}</Link>
            </li>
          ))}
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
        </ul>{' '}
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
      title: 'Feed',
      link: '/',
    },
  ];

  if (token !== null) {
    side.push({
      id: 2,
      title: 'Favorite',
      link: '/favorite',
    });
  }

  return side;
}
