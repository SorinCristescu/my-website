import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

import { HeaderContainer } from './style';

function Header() {
  const header = useRef(null);
  const navbar = useRef(null);
  useEffect(() => {
    gsap.from([header.current], 0.8, {
      delay: 4,
      ease: 'linear',
      opacity: 0,
      y: '-100%',
    });
    gsap.from([navbar.current], 0.8, {
      delay: 4,
      ease: 'linear',
      opacity: 0,
      y: '-100%',
    });
  }, [header, navbar]);
  return (
    <HeaderContainer>
      <div className="logo" ref={header}>
        <svg
          width="67px"
          height="67px"
          viewBox="0 0 67 67"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <g
            id="Page-1"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g
              id="Desktop-HD-Copy-9"
              transform="translate(-117.000000, -14.000000)"
              stroke="#FFFFFF"
              strokeWidth="1.8"
            >
              <g id="Group" transform="translate(119.000000, 16.000000)">
                <path
                  d="M54.3375,31.8375 C54.3375,19.4110931 44.2639069,9.3375 31.8375,9.3375 C19.4110931,9.3375 9.3375,19.4110931 9.3375,31.8375 C9.3375,44.2639069 19.4110931,54.3375 31.8375,54.3375"
                  id="Path"
                  transform="translate(31.837500, 31.837500) rotate(-45.000000) translate(-31.837500, -31.837500) "
                ></path>
                <path
                  d="M40.3875,25.0875 C40.3875,20.3654654 36.5595346,16.5375 31.8375,16.5375 C27.1154654,16.5375 23.2875,20.3654654 23.2875,25.0875 C23.2875,29.8095346 27.1154654,33.6375 31.8375,33.6375"
                  id="Path"
                ></path>
                <path
                  d="M36.7875,25.0875 C36.7875,22.3536905 34.5713095,20.1375 31.8375,20.1375 C29.1036905,20.1375 26.8875,22.3536905 26.8875,25.0875 C26.8875,27.8213095 29.1036905,30.0375 31.8375,30.0375"
                  id="Path"
                ></path>
                <path
                  d="M40.3875,38.5875 C40.3875,33.8654654 36.5595346,30.0375 31.8375,30.0375 C27.1154654,30.0375 23.2875,33.8654654 23.2875,38.5875 C23.2875,43.3095346 27.1154654,47.1375 31.8375,47.1375"
                  id="Path-Copy-3"
                  transform="translate(31.837500, 38.587500) rotate(180.000000) translate(-31.837500, -38.587500) "
                ></path>
                <path
                  d="M36.7875,38.5875 C36.7875,35.8536905 34.5713095,33.6375 31.8375,33.6375 C29.1036905,33.6375 26.8875,35.8536905 26.8875,38.5875 C26.8875,41.3213095 29.1036905,43.5375 31.8375,43.5375"
                  id="Path-Copy"
                  transform="translate(31.837500, 38.587500) rotate(180.000000) translate(-31.837500, -38.587500) "
                ></path>
                <path
                  d="M50.7375,31.8375 C50.7375,21.3993182 42.2756818,12.9375 31.8375,12.9375 C21.3993182,12.9375 12.9375,21.3993182 12.9375,31.8375 C12.9375,42.2756818 21.3993182,50.7375 31.8375,50.7375"
                  id="Path"
                  transform="translate(31.837500, 31.837500) rotate(-45.000000) translate(-31.837500, -31.837500) "
                ></path>
              </g>
            </g>
          </g>
        </svg>
      </div>

      <ul className="navbar" ref={navbar}>
        <li>work</li>
        <li>about</li>
      </ul>
    </HeaderContainer>
  );
}

export default Header;
