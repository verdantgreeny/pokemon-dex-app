import React from "react";
import { useSelector } from "react-redux";
import MOCK_DATA from "../mock-data";
import { StPokemonList } from "../styles/styledComponents";
import PokemonCard from "./PokemonCard";

const PokemonList = () => {
  const selectedPokemon = useSelector((state) => state.pokemon);
  // ✅ 포켓몬 리스트에서도 추가된 포켓몬일 경우 버튼을 바꾸기 위해 새로만든 mock-data 배열
  const newMockList = MOCK_DATA.map((pokemon) => {
    const selectedId = selectedPokemon.map((p) => p.id);
    if (selectedId.includes(pokemon.id)) {
      return {
        ...pokemon,
        isSelected: true,
      };
    } else {
      return pokemon;
    }
  });
  
  return (
    <StPokemonList>
      {newMockList.map((pokemon) => (
        <li key={pokemon.id}>
          <PokemonCard pokemon={pokemon} isDashboard={false} />
        </li>
      ))}
    </StPokemonList>
  );
};

export default PokemonList;
