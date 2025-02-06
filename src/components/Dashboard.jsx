import React from "react";
import { useSelector } from "react-redux";
import { StDashboard, StImg } from "../styles/styledComponents";
import PokemonCard from "./PokemonCard";

const Dashboard = () => {
  const selectedPokemon = useSelector((state) => state.pokemon);

  return (
    <StDashboard>
      <h2> 나만의 포켓몬 </h2>
      <ul>
        {Array(6)
          .fill()
          .map((_, i) => (
            <li key={i}>
              {selectedPokemon[i] ? (
                <PokemonCard pokemon={selectedPokemon[i]} isDashboard={true} />
              ) : (
                <StImg src="/src/assets/pokeball.png"></StImg>
              )}
            </li>
          ))}
      </ul>
    </StDashboard>
  );
};

export default Dashboard;
