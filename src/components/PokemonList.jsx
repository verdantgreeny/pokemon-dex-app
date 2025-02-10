import React from "react";
import { StPokemonList } from "../styles/styledComponents";
import PokemonCard from "./PokemonCard";

const PokemonList = ({ onAddHandler, newMockList }) => {
  return (
    <StPokemonList>
      {newMockList.map((pokemon) => (
        <li key={pokemon.id}>
          <PokemonCard
            pokemon={pokemon}
            onAddHandler={onAddHandler}
            isDashboard={false}
          />
        </li>
      ))}
    </StPokemonList>
  );
};

export default PokemonList;
