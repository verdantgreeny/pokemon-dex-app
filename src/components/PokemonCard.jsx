import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { StPokemonCard } from "../styles/styledComponents";
import Button from "./Button";
import { PokemonContext } from "../contexts/PokemonContext";

const PokemonCard = ({ pokemon, isDashboard }) => {
  const { onAddHandler, onDeleteHandler } = useContext(PokemonContext);
  return (
    <StPokemonCard>
      <div className="pokemon-name">
        {" "}
        <span> {String(pokemon.id).padStart(3, "0")} </span>
        {pokemon.korean_name}
      </div>
      <Link to={`/detail?id=${pokemon.id}`}>
        <img src={pokemon.img_url} alt={pokemon.korean_name} />
      </Link>
      {!isDashboard ? (
        <Button
          color={pokemon.isSelected && "yellow"}
          type="button"
          onClick={() => onAddHandler(pokemon)}
        >
          {!pokemon.isSelected ? "추가" : "보유"}
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
