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
        // ✅ 포켓몬 Dashboard에 추가된 포켓몬인지 확인(PokemonList에서 포켓몬 버튼을 추가버튼-true-을 할지 보유버튼-false-을 할지 결정)
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
