import styled from "styled-components";

//PokemonList.jsx
export const StPokemonList = styled.ul`
  background-color: #b2c0c189;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
  width: 80vw;
  margin-bottom: 30px;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  font-family: "Black Han Sans", serif;
`;

//PokemonCard.jsx
export const StPokemonCard = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 10px auto;
  width: 160px;
  height: 160px;
  border-radius: 5px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  color: black;

  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.13), 0 10px 10px rgba(0, 0, 0, 0.11);
    cursor: pointer;
  }

  .pokemon-name {
    background-color: #ffffff;
    padding: 8px 10px;
    border-radius: 5px 5px 0 0;
    text-align: left;
    font-size: 15px;

    span {
      background-color: #adecb9;
      margin-right: 10px;
      padding: 4px 6px;
      border-radius: 8px;
      font-size: 12px;
    }
  }

  img {
    margin: 5px auto 0 auto;
    padding: 0 40px;
    width: 80px;
    height: 80px;

    &:hover {
      opacity: 0.7;
    }
  }
`;

//Dashboard.jsx
export const StDashboard = styled.section`
  background-color: #e4edec6e;
  margin: 30px 0;
  padding: 30px 10px;
  border: 10px solid #3a4040;
  border-radius: 5px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  text-align: center;
  font-family: "Black Han Sans", serif;

  h2 {
    padding-bottom: 20px;
    color: #121a35;
    font-size: 25px;
  }

  ul {
    display: grid;
    width: 80vw;
    grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
  }
`;

export const StImg = styled.img`
  margin: 30px 0;
  width: 120px;
  height: 120px;
  border-radius: 100%;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  opacity: 0.8;

  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.13), 0 10px 10px rgba(0, 0, 0, 0.11);
    opacity: 0.4;
  }
`;

//Button.jsx
export const StButton = styled.button`
  background-color: ${(prop) =>
    prop.$color === "red"
      ? "#f89090"
      : prop.$color === "yellow"
      ? "#F1EF7B"
      : "#B3E0F8"};
  border: none;
  border-radius: 12px;
  width: 90px;
  height: 25px;
  padding: 2px;
  margin: 0 auto;
  cursor: pointer;

  &:hover {
    background-color: ${(p) =>
      p.$color === "red"
        ? "#f8909086"
        : p.$color === "yellow"
        ? "#dad868ae"
        : "#b3e0f87b"};
  }
`;
