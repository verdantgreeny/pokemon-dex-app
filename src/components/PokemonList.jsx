import React from "react";
import { useSelector } from "react-redux";
import MOCK_DATA from "../mock-data";
import { StPokemonList } from "../styles/styledComponents";
import PokemonCard from "./PokemonCard";

const PokemonList = () => {
  const selectedPokemon = useSelector((state) => state.pokemon);

  return (
    <StPokemonList>
      {MOCK_DATA.map((pokemon) => {
        const isSeletedPokemon = selectedPokemon.some(
          (p) => p.id === pokemon.id
        );
        return (
          <li key={pokemon.id}>
            <PokemonCard
              pokemon={pokemon}
              isDashboard={false}
              isSletedPokemon={isSeletedPokemon}
            />
          </li>
        );
      })}
    </StPokemonList>
  );
};

export default PokemonList;
