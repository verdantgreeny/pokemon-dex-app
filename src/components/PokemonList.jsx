import React from "react";
import styled from "styled-components";
import MOCK_DATA from "../mock-data";
import PokemonCard from "./PokemonCard";

const PokemonList = ({ onAddHandler }) => {
  return (
    <StPokemonList>
      {MOCK_DATA.map((pokemon) => (
        <li key={pokemon.id}>
          <PokemonCard pokemon={pokemon} onAddHandler={onAddHandler} isSelected={false}/>
        </li>
      ))}
    </StPokemonList>
  );
};

export default PokemonList;

const StPokemonList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
  background-color: #dbdbcd;
  width: 80vw;
`;
