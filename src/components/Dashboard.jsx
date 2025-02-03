import React from "react";
import styled from "styled-components";
import PokemonCard from "./PokemonCard";

const Dashboard = ({ selectedPokemon, onDeleteHandler }) => {
  const defaultImg = "/src/assets/pokeball-13iwdk7Y.png";

  return (
    <StDashboard>
      <h2> 나만의 포켓몬 </h2>
      <StDashbordUl>
        {Array(6)
          .fill()
          .map((_, i) => (
            <li key={i}>
              {selectedPokemon[i] ? (
                <PokemonCard
                  pokemon={selectedPokemon[i]}
                  onDeleteHandler={onDeleteHandler}
                  isSelected={true}
                />
              ) : (
                <StImg src={defaultImg}></StImg>
              )}
            </li>
          ))}
      </StDashbordUl>
    </StDashboard>
  );
};

export default Dashboard;

const StImg = styled.img`
  background-color: white;
  margin: 10px auto;
  padding: 10px 0;
  width: 150px;
  height: 150px;
  border-radius: 5px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  justify-items: center;

  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`;

const StDashboard = styled.section`
  background-color: yellow;
  text-align: center;
`;

const StDashbordUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
  width: 80vw;
`;
