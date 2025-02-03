import React from "react";
import styled from "styled-components";

const PokemonCard = ({
  pokemon,
  onAddHandler,
  onDeleteHandler,
  isSelected,
}) => {
  return (
    <StPokemonCard>
      <img src={pokemon.img_url} alt={pokemon.img_url} />
      <div>{pokemon.korean_name}</div>
      <div>No. {pokemon.id} </div>
      {!isSelected ? (
        <button type="button" onClick={() => onAddHandler(pokemon)}>
          {" "}
          추가{" "}
        </button>
      ) : (
        <button type="button" onClick={() => onDeleteHandler(pokemon.id)}>
          {" "}
          삭제{" "}
        </button>
      )}
    </StPokemonCard>
  );
};

export default PokemonCard;

const StPokemonCard = styled.div`
  background-color: white;

  margin: 10px auto;
  width: 150px;
  height: 170px;
  border-radius: 5px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  justify-items: center;
  color: black;

  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`;
