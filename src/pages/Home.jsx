import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Home = () => {
  const navigate = useNavigate();
  console.log("home")
  return (
    <>
      <HomeDiv>Home</HomeDiv>
      <button onClick={() => navigate("/dex")}>포켓몬 도감 시작하기</button>
    </>
  );
};

export default Home;

const HomeDiv = styled.div`

`;