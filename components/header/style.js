import styled from 'styled-components';

export const HeaderContainer = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  max-width: 1244px;
  margin: 0 auto;
  height: 80px;
  z-index: 2;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  .logo {
    height: 100%;
  }
  .navbar {
    display: flex;
    align-items: center;
    list-style: none;

    li {
      margin-left: 20px;
    }
    a {
      text-decoration: none;
      color: #7ec8e3;
      font-size: 20px;
    }
    a:hover {
      color: #7ec8e3;
      text-decoration: line-through;
    }
  }
`;
