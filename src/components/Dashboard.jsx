import React, { useContext } from "react";
import { StDashboard, StImg } from "../styles/styledComponents";
import PokemonCard from "./PokemonCard";
import { PokemonContext} from "../contexts/PokemonContext";

const Dashboard = () => {
  const {selectedPokemon} = useContext(PokemonContext);
  return (
    <StDashboard>
      <h2> 나만의 포켓몬 </h2>
      <ul>
        {Array(6)
          .fill()
          .map((_, i) => (
            <li key={i}>
              {selectedPokemon[i] ? (
                <PokemonCard
                  pokemon={selectedPokemon[i]}
                  isSelected={true}
                />
              ) : (
                <StImg src="/src/assets/pokeball.png"></StImg>
              )}
            </li>
          ))}
      </ul>
    </StDashboard>
  );
};

export default Dashboard;
