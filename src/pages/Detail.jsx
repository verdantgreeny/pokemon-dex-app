import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import Button from "../components/Button";
import MOCK_DATA from "../mock-data";

const Detail = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useSearchParams();
  const pokemon = MOCK_DATA.find((p) => p.id === +query.get("id"));

  return (
    <DetailSection>
      <DetailImg src={pokemon.img_url} alt={pokemon.korean_name} />
      <div>
        <div> No.{String(pokemon.id).padStart(3, "0")} <br/> {pokemon.korean_name}</div>
        <div> {pokemon.description}</div>
        <div> 타입 : {String(pokemon.types)} </div>
        <Button type="button" onClick={() => navigate("/dex")}>뒤로가기</Button>
      </div>
    </DetailSection>
  );
};

export default Detail;

const DetailSection = styled.section`
  /* background-color: green; */
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  border: 4px solid #121a35;
  padding: 20px;
`;

const DetailImg = styled.img`
  width: 100%;
`;
