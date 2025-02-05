import React from "react";
import { Link, Outlet } from "react-router-dom";
import { StHeader, StMain, StFooter } from "../styles/styledLayout";

const Layout = () => {
  return (
    <>
      <StHeader>
        <h1>
          {" "}
          <img src="/src/assets/pokeball.png" alt="포켓볼" /> Pokémon Dex{" "}
        </h1>
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
