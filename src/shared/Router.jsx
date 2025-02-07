import React, { useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Dex from "../pages/Dex";
import Detail from "../pages/Detail";
import Layout from "./Layout";
import { useSelector } from "react-redux";
import ScrollToTop from "./ScrollToTop";

const Router = () => {
  const selectedPokemon = useSelector((state) => state.pokemon);

  // ✅ 로컬스토리지 저장
  useEffect(() => {
    localStorage.setItem("selectedPokemon", JSON.stringify(selectedPokemon));
  }, [selectedPokemon]);

  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Navigate replace to="/home" />}></Route>
          <Route path="/home" element={<Home />} />
          <Route element={<Layout />}>
            <Route path="/dex" element={<Dex />} />
            <Route path="/detail" element={<Detail />} />
          </Route>
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
};

export default Router;
