import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { withTheme } from "styled-components";
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
        <button
          onClick={() => {
            toast.success("포켓몬 월드에 오신 것을 환영합니다.", {
              position: "bottom-center",
              theme: "light",
            });
            navigate("/dex");
          }}
        >
          Click To Start
        </button>
      </HomeDiv>
    </>
  );
};

export default Home;
