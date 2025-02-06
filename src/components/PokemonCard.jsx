import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { addPokemon, deletePokemon } from "../redux/slices/pokemonSlice";
import { StPokemonCard } from "../styles/styledComponents";
import Button from "./Button";

const PokemonCard = ({ pokemon, isSelected }) => {
  const selectedPokemon = useSelector((state) => state.pokemon);
  const dispatch = useDispatch();

  // ✅ 포켓몬 추가 기능
  const onAddHandler = (pokemon) => {
    const addedPokemon = selectedPokemon.find((p) => {
      return p.id === pokemon.id;
    });

    if (addedPokemon) {
      toast("이미 보유한 포켓몬이므로 삭제됩니다.");
      onDeleteHandler(pokemon.id);
    } else if (selectedPokemon.length >= 6) {
      toast("6개 이상의 포켓몬을 보유할 수 없습니다.");
    } else {
      dispatch(addPokemon({...pokemon}));
    }
  };

  // ✅ 포켓몬 삭제 기능
  const onDeleteHandler = (id) => {
     dispatch(deletePokemon({id}));
  };
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
      {!isSelected ? (
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
