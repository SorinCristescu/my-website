import Head from 'next/head';
import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

import Header from '../components/header';

export default function Home() {
  const left_container = useRef(null);
  const right_container = useRef(null);
  const logo = useRef(null);
  const s_upper_in = useRef(null);
  const s_upper_yellow = useRef(null);
  const s_upper_out = useRef(null);

  const s_down_in = useRef(null);
  const s_down_yellow = useRef(null);
  const s_down_out = useRef(null);

  const c_in = useRef(null);
  const c_yellow = useRef(null);
  const c_out = useRef(null);

  useEffect(() => {
    gsap.from([left_container.current], 0.8, {
      y: '-100%',
    });
    gsap.from([right_container.current], 0.8, {
      y: '100%',
    });
    gsap.fromTo(
      [logo.current],
      1,
      {
        opacity: 1,
        // scale: 0,
      },
      {
        delay: 4,
        opacity: 0,
        // scale: 1,
      }
    );
    gsap.fromTo(
      [s_upper_in.current],
      3,
      {
        rotation: 45,
        transformOrigin: '50% 50%',
      },
      {
        delay: 1,
        ease: 'linear',
        rotation: 360,
        // repeat: 1,
      }
    );
    gsap.fromTo(
      [s_upper_yellow.current],
      3,
      {
        rotation: 120,
        transformOrigin: '50% 50%',
      },
      {
        delay: 1,
        ease: 'linear',
        rotation: 360,
        // repeat: 1,
      }
    );
    gsap.fromTo(
      [s_upper_out.current],
      3,
      {
        rotation: 270,
        transformOrigin: '50% 50%',
      },
      {
        delay: 1,
        ease: 'linear',
        rotation: 360,
        // repeat: 1,
      }
    );

    gsap.fromTo(
      [s_down_in.current],
      3,
      {
        rotation: 90,
        transformOrigin: '50% 50%',
      },
      {
        delay: 1,
        ease: 'linear',
        rotation: 180,
        // repeat: 1,
      }
    );
    gsap.fromTo(
      [s_down_yellow.current],
      3,
      {
        rotation: -180,
        transformOrigin: '50% 50%',
      },
      {
        delay: 1,
        ease: 'linear',
        rotation: 180,
        // repeat: 1,
      }
    );

    gsap.fromTo(
      [s_down_out.current],
      3,
      {
        rotation: 360,
        transformOrigin: '50% 50%',
      },
      {
        delay: 1,
        ease: 'linear',
        rotation: 180,
        // repeat: 1,
      }
    );
    gsap.fromTo(
      [c_in.current],
      3,
      {
        rotation: 270,
        transformOrigin: '50% 50%',
      },
      {
        delay: 1,
        ease: 'linear',
        rotation: -45,
        // repeat: 1,
        transformOrigin: '50% 50%',
      }
    );
    gsap.fromTo(
      [c_yellow.current],
      3,
      {
        rotation: 90,
        transformOrigin: '50% 50%',
      },
      {
        delay: 1,
        ease: 'linear',
        rotation: -45,
        // repeat: 1,
        transformOrigin: '50% 50%',
      }
    );
    gsap.fromTo(
      [c_out.current],
      3,
      {
        rotation: 180,
        transformOrigin: '50% 50%',
      },
      {
        delay: 1,
        ease: 'linear',
        rotation: -45,
        // repeat: 1,
        transformOrigin: '50% 50%',
      }
    );
  }, [
    left_container,
    right_container,
    logo,
    s_upper_in,
    s_upper_yellow,
    s_upper_out,
    s_down_in,
    s_down_yellow,
    s_down_out,
    c_in,
    c_yellow,
    c_out,
  ]);

  return (
    <div className="container">
      <Head>
        <title>My App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <div ref={left_container} className="left-container"></div>
        <div ref={right_container} className="right-container"></div>
        <svg
          ref={logo}
          width="295px"
          height="295px"
          viewBox="0 0 295 295"
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
              id="Desktop-HD-Copy-10"
              transform="translate(-573.000000, -365.000000)"
              strokeWidth="8"
            >
              <g id="Group" transform="translate(579.000000, 371.000000)">
                <path
                  d="M241.5,141.5 C241.5,86.271525 196.728475,41.5 141.5,41.5 C86.271525,41.5 41.5,86.271525 41.5,141.5 C41.5,196.728475 86.271525,241.5 141.5,241.5"
                  id="c_out"
                  ref={c_out}
                  stroke="#050A30"
                  transform="translate(141.500000, 141.500000) rotate(-45.000000) translate(-141.500000, -141.500000) "
                ></path>
                <path
                  d="M179.5,111.5 C179.5,90.5131795 162.48682,73.5 141.5,73.5 C120.51318,73.5 103.5,90.5131795 103.5,111.5 C103.5,132.48682 120.51318,149.5 141.5,149.5"
                  id="s_upper_out"
                  ref={s_upper_out}
                  stroke="#050A30"
                ></path>
                <path
                  d="M171.5,111.5 C171.5,94.9314575 158.068542,81.5 141.5,81.5 C124.931458,81.5 111.5,94.9314575 111.5,111.5 C111.5,128.068542 124.931458,141.5 141.5,141.5"
                  id="s_upper_yellow"
                  ref={s_upper_yellow}
                  stroke="#0000ff"
                ></path>
                <path
                  d="M163.5,111.5 C163.5,99.3497355 153.650264,89.5 141.5,89.5 C129.349736,89.5 119.5,99.3497355 119.5,111.5 C119.5,123.650264 129.349736,133.5 141.5,133.5"
                  id="s_upper_in"
                  ref={s_upper_in}
                  stroke="#050A30"
                ></path>
                <path
                  d="M179.5,171.5 C179.5,150.51318 162.48682,133.5 141.5,133.5 C120.51318,133.5 103.5,150.51318 103.5,171.5 C103.5,192.48682 120.51318,209.5 141.5,209.5"
                  id="s_down_out"
                  ref={s_down_out}
                  stroke="#050A30"
                  transform="translate(141.500000, 171.500000) rotate(180.000000) translate(-141.500000, -171.500000) "
                ></path>
                <path
                  d="M171.5,171.5 C171.5,154.931458 158.068542,141.5 141.5,141.5 C124.931458,141.5 111.5,154.931458 111.5,171.5 C111.5,188.068542 124.931458,201.5 141.5,201.5"
                  id="s_down_yellow"
                  ref={s_down_yellow}
                  stroke="#0000ff"
                  transform="translate(141.500000, 171.500000) rotate(180.000000) translate(-141.500000, -171.500000) "
                ></path>
                <path
                  d="M163.5,171.5 C163.5,159.349736 153.650264,149.5 141.5,149.5 C129.349736,149.5 119.5,159.349736 119.5,171.5 C119.5,183.650264 129.349736,193.5 141.5,193.5"
                  id="s_down_in"
                  ref={s_down_in}
                  stroke="#050A30"
                  transform="translate(141.500000, 171.500000) rotate(180.000000) translate(-141.500000, -171.500000) "
                ></path>
                <path
                  d="M233.5,141.5 C233.5,90.689803 192.310197,49.5 141.5,49.5 C90.689803,49.5 49.5,90.689803 49.5,141.5 C49.5,192.310197 90.689803,233.5 141.5,233.5"
                  id="c-yellow"
                  ref={c_yellow}
                  stroke="#0000ff"
                  transform="translate(141.500000, 141.500000) rotate(-45.000000) translate(-141.500000, -141.500000) "
                ></path>
                <path
                  d="M225.5,141.5 C225.5,95.108081 187.891919,57.5 141.5,57.5 C95.108081,57.5 57.5,95.108081 57.5,141.5 C57.5,187.891919 95.108081,225.5 141.5,225.5"
                  id="c_in"
                  ref={c_in}
                  stroke="#050A30"
                  transform="translate(141.500000, 141.500000) rotate(-45.000000) translate(-141.500000, -141.500000) "
                ></path>
              </g>
            </g>
          </g>
        </svg>
      </main>

      <style jsx>{`
        html,
        body {
          margin: 0;
          padding: 0;
          overflow: hidden;
        }
        main {
          height: 100vh;
          width: 100%;
          flex: 1;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          position: relative;
        }

        .left-container {
          width: 100%;
          height: 100%;
          background-color: #0000ff;
        }
        .right-container {
          width: 100%;
          height: 100%;
          background-color: #050a30;
        }

        svg {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        ul {
          list-style: none;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        @media (max-width: 600px) {
          .main {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
