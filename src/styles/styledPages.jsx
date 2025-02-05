import styled from "styled-components";

//Home.jsx
export const HomeDiv = styled.div`
  background-image: url("/src/assets/pokemon-home.png");
  background-position: center;
  background-size: cover;
  width: 99vw;
  height: 100vh;

  button {
    font-family: "Barriecito", serif;
    position: relative;
    width: 99vw;
    height: 10vh;
    top: 83vh;
    border: none;
    cursor: pointer;
    font-size: 30px;
    background-color: #ffffff8d;

    &:hover {
      background-color: #0000003e;
      color: white;
    }
  }
`;

//Detail.jsx
export const DetailSection = styled.section`
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background-color: white;
  border: 4px solid #121a35;
  padding: 20px;
  font-family: "Black Han Sans", serif;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.13), 0 10px 10px rgba(0, 0, 0, 0.11);
  }

  img {
    width: 224px;
    height: 224px;
  }

  .pokemon-number {
    font-size: 12px;
  }

  .pokemon-name {
    font-size: 27px;
  }

  .pokemon-description {
    font-weight: 100;
    width: 210px;
    margin: 20px 0;
  }

  .pokemon-type {
    margin-bottom: 40px;
  }

  .pokemon-btn-div {
    display: flex;
  }
`;

export const DetailLinkSection = styled.section`
  display: flex;
  gap: 20px;

  position: relative;
  z-index: 0;

  a {
    font-family: "Black Han Sans", serif;
    font-size: 20px;
    font-weight: 100;
    background-color: #121a35;
    border: 5px solid #fed100;
    border-radius: 30px;
    padding: 3vh 3vw;
    white-space: nowrap;
    text-decoration: none;
    color: white;
    margin-bottom: 20px;

    &:hover {
      opacity: 0.7;
    }
  }
`;

export const SelectedPokemonSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  .selected-pokemon {
    background-color: #121a3544;
    border: 4px solid #121a35;
    border-radius: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 15px;
    width: 80px;
    height: 80px;
    gap: 2px;
  }

  img {
    width: 50px;
  }

  .pokemon-name {
    font-size: 10px;
  }
`;
