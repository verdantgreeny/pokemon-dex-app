import React from "react";
import { useNavigate } from "react-router-dom";
import { HomeDiv } from "../styles/styledPages";
import pokeball from "/assets/pokeball.png";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <HomeDiv>
        <div>
          {" "}
          My Pokémon <br /> Dex{" "}
        </div>
        <img src={pokeball} alt="포켓볼" />
        <button onClick={() => navigate("/dex")}>Click To Start</button>
      </HomeDiv>
    </>
  );
};

export default Home;
