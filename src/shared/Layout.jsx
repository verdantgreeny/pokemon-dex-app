import React from "react";
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";

const Layout = () => {
  return (
    <>
      <StHeader>
        <h1> 포켓몬 도감 </h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/dex">Dex</Link>
        </nav>
      </StHeader>
      <StMain>
        <Outlet />
      </StMain>
      <StFooter>
        <p>&copy; 2025. Pokemon Dex App</p>
      </StFooter>
    </>
  );
};

export default Layout;

const StHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #333;
  color: white;

  h1 {
    font-size: 1.5rem;
  }
  nav {
    a {
      padding: 10px;
      color: white;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

const StMain = styled.main`
  background-color: green;
  min-height: 89vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StFooter = styled.footer`
  position: relative;
  text-align: center;
  bottom: 0px;
  padding: 10px;
  background-color: #333;
  color: white;
`;
