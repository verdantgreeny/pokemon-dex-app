import React from "react";
import PokemonList from "../components/PokemonList";
import Dashboard from "../components/Dashboard";

const Dex = ({
  selectedPokemon,
  onAddHandler,
  onDeleteHandler,
  newMockList,
}) => {
  return (
    <div>
      <Dashboard
        selectedPokemon={selectedPokemon}
        onDeleteHandler={onDeleteHandler}
      />
      <PokemonList onAddHandler={onAddHandler} newMockList={newMockList} />
    </div>
  );
};

export default Dex;
