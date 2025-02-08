import styled from "styled-components";
import pokemonBackground from "/src/assets/gradient-white-color-background.png";
import pokeball from "/src/assets/pokeball.png";

//Home.jsx
export const HomeDiv = styled.div`
  background-image: url(${pokemonBackground});
  background-position: center;
  background-size: cover;
  font-family: "Barriecito", serif;
  font-size: 90px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;

  img {
    width: 20vw;
    max-width: 150px;
    margin: 20px 0 6vh 0; //반응형
  }

  button {
    font-family: "Barriecito", serif;

    width: 100vw;
    height: 87px;

    border: none;
    cursor: pointer;
    font-size: 40px;
    background-color: #ffffff8d;

    &:hover {
      background-color: #0000003e;
      color: white;
    }
  }
`;

//Detail.jsx
export const DetailSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-radius: 12px;
  background-color: #a8b8b8;
  max-width: 520px; // 반응형
  height: 260px;
  padding: 10px;
  font-family: "Black Han Sans", serif;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.13), 0 10px 10px rgba(0, 0, 0, 0.11);
  }

  img {
    width: 200px;
    height: 200px;
  }

  .pokemon-number {
    font-size: 12px;
  }

  .pokemon-name {
    font-size: 30px;
  }

  .pokemon-description {
    font-weight: 100;
    width: 240px;
    margin: 20px 0;
  }

  .pokemon-type {
    margin-bottom: 45px;
  }

  .pokemon-btn-div {
    display: flex;
  }
`;

export const DetailLinkSection = styled.section`
  display: flex;
  gap: 20px;
  position: relative;

  a {
    font-family: "Black Han Sans", serif;
    font-size: 22px;
    font-weight: 100;
    background-color: #3a4040;
    border-radius: 30px;
    padding: 17px 7px 12px 7px;
    max-width: 240px; // 반응형
    width: 40vw; // 반응형
    height: 28px;

    text-align: center;
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
  font-family: "Black Han Sans", serif;
  margin-top: 10px;
  display: grid; // 반응형
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  grid-gap: 20px;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(6, 1fr);
  }

  .selected-pokemon {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    border-radius: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 15px;
    width: 100px;
    height: 100px;
    gap: 2px;

    position: relative;
    z-index: 1;

    &::after {
      background: url(${pokeball});
      width: 100px;
      height: 100px;
      background-size: cover;
      position: absolute;
      content: "";
      top: 0;
      left: 0;
      z-index: -1;
      opacity: 0.1;
    }

    &:hover {
      img {
        width: 65px;
      }
      .pokemon-name {
        font-size: 14px;
      }
    }
  }

  img {
    width: 60px;
  }

  .pokemon-name {
    font-size: 10px;
  }
`;
