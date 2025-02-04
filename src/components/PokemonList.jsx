import React from "react";
import styled from "styled-components";
import PokemonCard from "./PokemonCard";

const PokemonList = ({ onAddHandler, newMockList }) => {
  return (
    <StPokemonList>
      {newMockList.map((pokemon) => (
        <li key={pokemon.id}>
          <PokemonCard
            pokemon={pokemon}
            onAddHandler={onAddHandler}
            isSelected={false}
          />
        </li>
      ))}
    </StPokemonList>
  );
};

export default PokemonList;

const StPokemonList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  background-color: #121a35bb;
  border-radius: 12px;
  width: 80vw;
  padding: 20px;
  margin-bottom: 10px;
  font-family: "Black Han Sans", serif;
`;
