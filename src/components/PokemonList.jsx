import React from "react";
import styled from "styled-components";
import MOCK_DATA from "../mock-data";
import PokemonCard from "./PokemonCard";

const PokemonList = () => {
  return (
    <StPokemonList>
      {MOCK_DATA.map((pokemon) => {
        return <PokemonCard pokemon={pokemon} key={pokemon.id} />;
      })}
    </StPokemonList>
  );
};

export default PokemonList;

const StPokemonList = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
  background-color: #dbdbcd;
  width: 80vw;
`;
