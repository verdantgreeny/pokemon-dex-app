import React from "react";
import { useNavigate } from "react-router-dom";
import { HomeDiv } from "../styles/styledPages";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <HomeDiv>
        <div>
          {" "}
          My Pokémon <br /> Dex{" "}
        </div>
        <img src="/src/assets/pokeball.png" alt="포켓볼" />
        <button onClick={() => navigate("/dex")}>Click To Start</button>
      </HomeDiv>
    </>
  );
};

export default Home;
