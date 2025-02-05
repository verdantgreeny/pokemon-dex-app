import React from "react";
import styled from "styled-components";
import { StDashboard, StImg } from "../styles/styledComponents";
import PokemonCard from "./PokemonCard";

const Dashboard = ({ selectedPokemon, onDeleteHandler }) => {
  return (
    <StDashboard>
      <h2> 나만의 포켓몬 </h2>
      <ul>
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
                <StImg src="/src/assets/pokeball-13iwdk7Y.png"></StImg>
              )}
            </li>
          ))}
      </ul>
    </StDashboard>
  );
};

export default Dashboard;

