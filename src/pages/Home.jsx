import React from "react";
import { useNavigate } from "react-router-dom";
import {
  HomeDiv
} from "../styles/styledPages";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <HomeDiv>
        <button onClick={() => navigate("/dex")}>Click To Start</button>
      </HomeDiv>
    </>
  );
};

export default Home;

