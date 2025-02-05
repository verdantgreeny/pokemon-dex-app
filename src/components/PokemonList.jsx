import React, { useContext } from "react";
import { StPokemonList } from "../styles/styledComponents";
import PokemonCard from "./PokemonCard";
import { PokemonContext} from "../contexts/PokemonContext";

const PokemonList = () => {
  const {newMockList} = useContext(PokemonContext);
  return (
    <StPokemonList>
      {newMockList.map((pokemon) => (
        <li key={pokemon.id}>
          <PokemonCard
            pokemon={pokemon}
            isSelected={false}
          />
        </li>
      ))}
    </StPokemonList>
  );
};

export default PokemonList;
