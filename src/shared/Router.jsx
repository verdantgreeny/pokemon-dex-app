import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Dex from "../pages/Dex";
import Detail from "../pages/Detail";
import Layout from "./Layout";
import { PokemonProvider } from "../contexts/PokemonContext";

const Router = () => {
  return (
    <PokemonProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate replace to="/home" />}></Route>
          <Route path="/home" element={<Home />} />
          <Route element={<Layout />}>
            <Route path="/dex" element={<Dex />} />
            <Route path="/detail" element={<Detail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </PokemonProvider>
  );
};

export default Router;
