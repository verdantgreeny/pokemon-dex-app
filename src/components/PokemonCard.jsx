import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "./Button";

const PokemonCard = ({
  pokemon,
  onAddHandler,
  onDeleteHandler,
  isSelected,
}) => {
  return (
    <StPokemonCard>
      <StPokemonName>
        {" "}
        <span> {String(pokemon.id).padStart(3, "0")} </span>
        {pokemon.korean_name}
      </StPokemonName>
      <Link to={`/detail?id=${pokemon.id}`}>
        <CardImg src={pokemon.img_url} alt={pokemon.korean_name} />
      </Link>
      {!isSelected ? (
        <Button
          color={pokemon.isSelected && "red"}
          type="button"
          onClick={() => onAddHandler(pokemon)}
        >
          {!pokemon.isSelected ? "추가" : "추가됨"}
        </Button>
      ) : (
        <Button
          color="red"
          type="button"
          onClick={() => onDeleteHandler(pokemon.id)}
        >
          {" "}
          삭제{" "}
        </Button>
      )}
    </StPokemonCard>
  );
};

export default PokemonCard;

const StPokemonCard = styled.div`
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
  }
`;

const StPokemonName = styled.div`
  background-color: #ffffff;
  border-radius: 5px 5px 0 0;
  padding: 8px 10px;
  text-align: left;
  font-size: 15px;

  span {
    background-color: #60ed60;
    margin-right: 10px;
    border-radius: 8px;
    font-size: 12px;
    padding: 4px 6px;
  }
`;

const CardImg = styled.img`
  margin: 5px auto;
  padding: 0 40px;
  width: 80px;
  height: 80px;
`;


