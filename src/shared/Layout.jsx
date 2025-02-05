import React from "react";
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";

const Layout = () => {
  return (
    <>
      <StHeader>
        <h1> Pokémon Dex </h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/dex">Dex</Link>
        </nav>
      </StHeader>
      <StMain>
        <Outlet />
      </StMain>
      <StFooter>
        <p>&copy; 2025. Pokémon Dex App</p>
      </StFooter>
    </>
  );
};

export default Layout;

const StHeader = styled.header`
  font-family: "Barriecito", serif;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0 10px 10px;
  background-color: #121a35;
  color: white;
  text-shadow: -1px 0 #F8BF90, 0 1px #F8BF90, 1px 0 #F8BF90, 0 -1px #F8BF90;
  border-bottom: 8px solid #FED100;

  h1 {
    font-size: 38px;
  }
  nav {
    a {
      padding: 10px;
      color: white;
      text-decoration: none;
      font-size: 25px;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

const StMain = styled.main`
  min-height: 89vh;
  background-color: #F2F2F2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StFooter = styled.footer`
  font-family: "Barriecito", serif;
  position: relative;
  text-align: center;
  padding: 20px 0px;
  bottom: 0px;
  background-color: #121a35;
  color: white;
  border-top: 8px solid #FED100;
  
`;
