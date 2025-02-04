import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import Button from "../components/Button";

const Detail = ({ onAddHandler, newMockList }) => {
  const navigate = useNavigate();
  const [query] = useSearchParams();
  const pokemon = newMockList.find((p) => p.id === +query.get("id"));

  return (
    <DetailSection>
      <DetailImg src={pokemon.img_url} alt={pokemon.korean_name} />
      <div>
        <PokemonNumber>No.{String(pokemon.id).padStart(3, "0")}</PokemonNumber>
        <PokemonName>{pokemon.korean_name}</PokemonName>
        <PokemonDescription> {pokemon.description}</PokemonDescription>
        <PokemonTypes> 타입 : {String(pokemon.types)} </PokemonTypes>
        <PokemonBtnDiv>
          <Button type="button" onClick={() => navigate("/dex")}>
            뒤로가기
          </Button>
          <Button
            color={pokemon.isSelected && "red"}
            type="button"
            onClick={() => onAddHandler(pokemon)}
          >
            {!pokemon.isSelected ? "추가" : "추가됨"}
          </Button>
        </PokemonBtnDiv>
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
  font-family: "Black Han Sans", serif;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.13), 0 10px 10px rgba(0, 0, 0, 0.11);
  }
`;

const DetailImg = styled.img`
  width: 100%;
`;

const PokemonNumber = styled.div`
  font-size: 12px;
`;
const PokemonName = styled.div`
  font-size: 27px;
`;
const PokemonDescription = styled.div`
  font-weight: 100;
  margin: 20px 0;
`;

const PokemonTypes = styled.div`
  margin-bottom: 40px;
`;

const PokemonBtnDiv = styled.div`
display:flex;

`