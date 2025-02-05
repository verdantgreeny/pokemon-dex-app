import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MOCK_DATA from "../mock-data.js";

export const PokemonContext = createContext(null);

export const PokemonProvider = ({ children }) => {
  const [selectedPokemon, setSeletedPokemon] = useState(getSelectedPokemon);

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
      setSeletedPokemon([...selectedPokemon, pokemon]);
    }
  };

  // ✅ 포켓몬 삭제 기능
  const onDeleteHandler = (id) => {
    const newPokemonList = selectedPokemon.filter((p) => p.id !== id);
    return setSeletedPokemon([...newPokemonList]);
  };

  // ✅ 로컬스토리지 저장
  useEffect(() => {
    localStorage.setItem("selectedPokemon", JSON.stringify(selectedPokemon));
  }, [selectedPokemon]);

  function getSelectedPokemon() {
    const selectedList = JSON.parse(localStorage.getItem("selectedPokemon"));
    return selectedList || [];
  }

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

  const value = {
    selectedPokemon,
    onAddHandler,
    onDeleteHandler,
    newMockList,
  };

  return (
    <PokemonContext.Provider value={value}>{children}</PokemonContext.Provider>
  );
};
