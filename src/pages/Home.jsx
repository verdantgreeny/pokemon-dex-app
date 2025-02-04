import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Home = () => {
  const navigate = useNavigate();
  console.log("home");
  return (
    <>
      <HomeDiv>
        <HomeButton onClick={() => navigate("/dex")}>
          Click To Start
        </HomeButton>
      </HomeDiv>
    </>
  );
};

export default Home;

const HomeDiv = styled.div`
  background-image: url("/src/assets/pokemon-home.png");
  background-position: center;
  background-size: cover;
  width: 99vw;
  height: 89vh;
`;

const HomeButton = styled.button`
  font-family: "Barriecito", serif;
  position: relative;
  width: 99vw;
  height: 7vh;
  top: 77vh;
  border: none;
  cursor: pointer;
  font-size: 30px;
  background-color: #ffffff8d;

  &:hover {
        background-color: #0000003e;
        color: white;
      }
`;
