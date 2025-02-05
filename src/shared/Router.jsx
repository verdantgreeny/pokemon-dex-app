import React, { useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Dex from "../pages/Dex";
import Detail from "../pages/Detail";
import Layout from "./Layout";
import MOCK_DATA from "../mock-data";
import { toast} from "react-toastify";

const Router = () => {
  const [selectedPokemon, setSeletedPokemon] = useState(getSelectedPokemon);

  // ✅ 포켓몬 추가 기능
  const onAddHandler = (pokemon) => {
    const addedPokemon = selectedPokemon.find((p) => {
      return p.id === pokemon.id;
    });

    if (addedPokemon) {
      toast("이미 추가된 포켓몬 입니다.");
    } else if (selectedPokemon.length >= 6) {
      toast("6개 이상의 포켓몬을 담을 수 없습니다.");
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

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Navigate replace to="/home" />}></Route>
          <Route path="/home" element={<Home />} />
          <Route
            path="/dex"
            element={
              <Dex
                selectedPokemon={selectedPokemon}
                onAddHandler={onAddHandler}
                onDeleteHandler={onDeleteHandler}
                newMockList={newMockList}
              />
            }
          />
          <Route
            path="/detail"
            element={
              <Detail onAddHandler={onAddHandler} newMockList={newMockList} />
            }
          />
        </Route>
      </Routes>

    </BrowserRouter>
  );
};

export default Router;
