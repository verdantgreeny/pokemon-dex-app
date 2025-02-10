import React from "react";
import { useNavigate } from "react-router-dom";
import { StPokemonCard } from "../styles/styledComponents";
import Button from "./Button";

const PokemonCard = ({
  pokemon,
  onAddHandler,
  onDeleteHandler,
  isDashboard,
}) => {
  const navigate = useNavigate();
  return (
    <StPokemonCard
      onClick={(e) => {
        if (e.target.tagName === "BUTTON") {
          return;
        }
        navigate(`/detail?id=${pokemon.id}`);
      }}
    >
      <div className="pokemon-name">
        {" "}
        <span> {String(pokemon.id).padStart(3, "0")} </span>
        {pokemon.korean_name}
      </div>
      <img src={pokemon.img_url} alt={pokemon.korean_name} />
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
