import React, { useState } from "react";
import PokemonList from "../components/PokemonList";
import Dashboard from "../components/Dashboard";
const Dex = () => {
  const [selectedPokemon, setSeletedPokemon] = useState([]);

  const onAddHandler = (pokemon) => {
    const addedPokemon = selectedPokemon.find((p) => {
      return p.id === pokemon.id;
    });

    if (selectedPokemon.length >= 6) {
      alert("6개 이상의 포켓몬을 담을 수 없습니다.");
    } else if (addedPokemon) {
      alert("이미 추가된 포켓몬 입니다.");
    } else {
      setSeletedPokemon([...selectedPokemon, pokemon]);
    }
  };

  const onDeleteHandler = (id) => {
    const newPokemonList = selectedPokemon.filter((p) => p.id !== id);
    return setSeletedPokemon([...newPokemonList]);
  };

  return (
    <div>
      <Dashboard
        selectedPokemon={selectedPokemon}
        onDeleteHandler={onDeleteHandler}
      />
      <PokemonList onAddHandler={onAddHandler} />
    </div>
  );
};

export default Dex;
