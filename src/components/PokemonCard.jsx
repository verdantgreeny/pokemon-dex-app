import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { addPokemon, deletePokemon } from "../redux/slices/pokemonSlice";
import { StPokemonCard } from "../styles/styledComponents";
import Button from "./Button";

const PokemonCard = ({ pokemon, isDashboard, isSletedPokemon }) => {
  const selectedPokemon = useSelector((state) => state.pokemon);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // ✅ 포켓몬 클릭 기능
  const onClickHandler = (pokemonInput) => {
    if (isDashboard) {
      dispatch(deletePokemon({ id: pokemonInput.id }));
    } else {
      if (isSletedPokemon) {
        toast.info("이미 보유한 포켓몬을 또 잡으시려구요???? 보유한 포멧몬 마저 도망갔습니다.");
        dispatch(deletePokemon({ id: pokemonInput.id }));
      } else {
        if (selectedPokemon.length >= 6) {
          toast.info("최대 6마리까지 포켓몬을 보유할 수 있습니다.");
        } else {
          dispatch(addPokemon({ ...pokemonInput }));
        }
      }
    }
  };

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
          $color={isSletedPokemon && "yellow"}
          type="button"
          onClick={() => onClickHandler(pokemon)}
        >
          {!isSletedPokemon ? "추가" : "보유"}
        </Button>
      ) : (
        <Button
          $color="red"
          type="button"
          onClick={() => onClickHandler(pokemon)}
        >
          {" "}
          삭제{" "}
        </Button>
      )}
    </StPokemonCard>
  );
};

export default PokemonCard;
