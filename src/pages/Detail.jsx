import React from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import Button from "../components/Button";

const Detail = ({ onAddHandler, newMockList }) => {
  const navigate = useNavigate();
  const [query] = useSearchParams();
  const detailPokemonId = +query.get("id");
  const pokemon = newMockList.find((p) => p.id === detailPokemonId);
  const prePokemon = newMockList.find((p) =>
    pokemon.id === 1
      ? p.id === newMockList.length
      : p.id === detailPokemonId - 1
  );
  const nextPokemon = newMockList.find((p) =>
    pokemon.id === newMockList.length
      ? p.id === 1
      : p.id === detailPokemonId + 1
  );

  const prevDetail =
    detailPokemonId === 1
      ? `/detail?id=${newMockList.length}`
      : `/detail?id=${detailPokemonId - 1}`;
  const nextDetail =
    detailPokemonId === newMockList.length
      ? `/detail?id= 1`
      : `/detail?id=${detailPokemonId + 1}`;

  return (
    <>
      <DetailLinkDiv>
        <Link to={prevDetail}>
          {" "}
          ◀︎ No.{String(prePokemon.id).padStart(3, "0")}{" "}
          {prePokemon.korean_name}{" "}
        </Link>
        <Link to={nextDetail}>
          {" "}
          No.{String(nextPokemon.id).padStart(3, "0")} {nextPokemon.korean_name}▶︎{" "}
        </Link>
      </DetailLinkDiv>

      <DetailSection>
        <DetailImg src={pokemon.img_url} alt={pokemon.korean_name} />
        <div>
          <PokemonNumber>
            No.{String(pokemon.id).padStart(3, "0")}
          </PokemonNumber>
          <PokemonName>{pokemon.korean_name}</PokemonName>
          <PokemonDescription> {pokemon.description}</PokemonDescription>
          <PokemonTypes> 타입 : {String(pokemon.types)} </PokemonTypes>
          <PokemonBtnDiv>
            <Button type="button" onClick={() => navigate("/dex")}>
              돌아가기
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
    </>
  );
};

export default Detail;

const DetailSection = styled.section`
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background-color: white;
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
  width: 224px;
  height: 224px
`;

const PokemonNumber = styled.div`
  font-size: 12px;

`;
const PokemonName = styled.div`
  font-size: 27px;
`;
const PokemonDescription = styled.div`
  font-weight: 100;
  width: 210px;
  margin: 20px 0;
`;

const PokemonTypes = styled.div`
  margin-bottom: 40px;
`;

const PokemonBtnDiv = styled.div`
  display: flex;
`;

const DetailLinkDiv = styled.div`
  display: flex;
  gap: 20px;

  position: relative;
  z-index: 0;

  a {
    font-family: "Black Han Sans", serif;
    font-size: 20px;
    font-weight: 100;
    background-color: #121a35;
    border: 10px solid #FED100;
    border-radius: 30px;
    padding: 3vh 3vw;
    white-space : nowrap;
    text-decoration: none;
    color: white;
    margin-bottom: 20px;

    &:hover {
      opacity: 0.7;
    }
  }
`;
