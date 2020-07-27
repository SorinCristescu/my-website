import React from 'react';
import Head from 'next/head';
import Header from '../components/header';
function About() {
  return (
    <div className="container">
      <Head>
        <title>My App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <div className="left-container">
          {/* <h2>This is left container</h2> */}
        </div>
        <div className="right-container">
          {/* <h2>This is right container</h2> */}
        </div>
        <div className="middle-wrapper">
          <div className="left-overlay"></div>
          <div className="right-overlay"></div>
        </div>
      </main>

      <style jsx>{`
         {
          /* container {
          height: 100vh;
          width: 100%;
          flex: 1;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          position: relative;
        } */
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

        h2 {
          color: #7ec8e3;
        }

        .left-container {
          padding-top: 80px;
          width: 100%;
          height: 100%;
          background-color: #0000ff;
        }
        .right-container {
          padding-top: 80px;
          width: 100%;
          height: 100%;
          background-color: #050a30;
        }
        .middle-wrapper {
          width: 500px;
          height: 500px;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background-color: transparent;
          z-index: 3;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          overflow: hidden;
        }
        .left-overlay {
          width: 250px;
          height: 100%;
          background-color: #050a30;
        }
        .right-overlay {
          width: 250px;
          height: 100%;
          background-color: #0000ff;
        }

        //   svg {
        //     position: absolute;
        //     top: 50%;
        //     left: 50%;
        //     transform: translate(-50%, -50%);
        //   }

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

export default About;
