import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import Button from "../components/Button";
import MOCK_DATA from "../mock-data";
import { addPokemon } from "../redux/slices/pokemonSlice";
import {
  DetailLinkSection,
  DetailSection,
  SelectedPokemonSection,
} from "../styles/styledPages";

const Detail = () => {
  const selectedPokemon = useSelector((state) => state.pokemon);
  const dispatch = useDispatch();
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

  const navigate = useNavigate();
  const [query] = useSearchParams();
  const detailPokemonId = +query.get("id");
  const pokemon = newMockList.find((p) => p.id === detailPokemonId);

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
      dispatch(addPokemon({ ...pokemon }));
    }
  };

  // ✅ 이전번호 및 다음번호 포켓몬 디테일페이지 이동
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
      <DetailLinkSection>
        <Link to={prevDetail}>
          {" "}
          ◀︎ No.{String(prePokemon.id).padStart(3, "0")}{" "}
          {prePokemon.korean_name}{" "}
        </Link>
        <Link to={nextDetail}>
          {" "}
          No.{String(nextPokemon.id).padStart(3, "0")} {nextPokemon.korean_name}
          ▶︎{" "}
        </Link>
      </DetailLinkSection>

      <DetailSection>
        <img src={pokemon.img_url} alt={pokemon.korean_name} />
        <div>
          <div className="pokemon-number">
            No.{String(pokemon.id).padStart(3, "0")}
          </div>
          <div className="pokemon-name">{pokemon.korean_name}</div>
          <div className="pokemon-description"> {pokemon.description}</div>
          <div className="pokemon-type"> 타입 : {String(pokemon.types)} </div>
          <div className="pokemon-btn-div">
            <Button type="button" onClick={() => navigate("/dex")}>
              돌아가기
            </Button>
            <Button
              color={pokemon.isSelected && "yellow"}
              type="button"
              onClick={() => onAddHandler(pokemon)}
            >
              {!pokemon.isSelected ? "추가" : "보유"}
            </Button>
          </div>
        </div>
      </DetailSection>

      {/* 선택된 포켓몬 미리보기 */}
      <SelectedPokemonSection>
        {newMockList.map((pokemon) => {
          if (pokemon.isSelected) {
            return (
              <div key={pokemon.id} className="selected-pokemon">
                <img src={pokemon.img_url} />
                <div className="pokemon-name"> {pokemon.korean_name} </div>
              </div>
            );
          }
        })}
      </SelectedPokemonSection>
    </>
  );
};

export default Detail;
