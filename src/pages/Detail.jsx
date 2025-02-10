import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import Button from "../components/Button";
import MOCK_DATA from "../mock-data";
import { addPokemon, deletePokemon } from "../redux/slices/pokemonSlice";
import {
  DetailLinkSection,
  DetailSection,
  SelectedPokemonSection,
} from "../styles/styledPages";

const Detail = () => {
  const selectedPokemon = useSelector((state) => state.pokemon);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [query] = useSearchParams();
  const detailPokemonId = +query.get("id");
  const pokemon = MOCK_DATA.find((p) => p.id === detailPokemonId);
  // ✅ 포켓몬 Dashboard에 추가된 포켓몬인지 확인(상세페이지 내부에서 포켓몬 버튼을 추가버튼-true-을 할지 보유버튼-false-을 할지 결정)
  const isSeletedPokemon = selectedPokemon.some(
    (p) => p.id === detailPokemonId
  );

  // ✅ 상세페이지 내부 버튼 기능
  const onToggleHandler = (pokemon) => {
    if (isSeletedPokemon) {
      toast.info("이미 보유한 포켓몬을 또 잡으시려구요???? 보유한 포멧몬 마저 도망갔습니다.");
      dispatch(deletePokemon({ id: pokemon.id }));
    } else if (selectedPokemon.length >= 6) {
      toast.info("6개 이상의 포켓몬을 보유할 수 없습니다.");
    } else {
      dispatch(addPokemon({ ...pokemon }));
    }
  };

  // ✅ 이전번호 및 다음번호 포켓몬 디테일페이지 이동
  const prePokemon = MOCK_DATA.find((p) =>
    pokemon.id === 1 ? p.id === MOCK_DATA.length : p.id === detailPokemonId - 1
  );
  const nextPokemon = MOCK_DATA.find((p) =>
    pokemon.id === MOCK_DATA.length ? p.id === 1 : p.id === detailPokemonId + 1
  );

  const prevDetail =
    detailPokemonId === 1
      ? `/detail?id=${MOCK_DATA.length}`
      : `/detail?id=${detailPokemonId - 1}`;
  const nextDetail =
    detailPokemonId === MOCK_DATA.length
      ? `/detail?id= 1`
      : `/detail?id=${detailPokemonId + 1}`;

  return (
    <>
      {/* 이전번호 및 다음번호 포켓몬 디테일페이지 이동 섹션 */}
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

      {/* 상세 페이지 메인*/}
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
              $color={isSeletedPokemon && "yellow"}
              type="button"
              onClick={() => onToggleHandler(pokemon)}
            >
              {!isSeletedPokemon ? "추가" : "보유"}
            </Button>
          </div>
        </div>
      </DetailSection>

      {/* 선택된 포켓몬 미리보기 */}
      <SelectedPokemonSection>
        {selectedPokemon.map((pokemon) => {
          return (
            <div key={pokemon.id} className="selected-pokemon">
              <img src={pokemon.img_url} />
              <div className="pokemon-name"> {pokemon.korean_name} </div>
            </div>
          );
        })}
      </SelectedPokemonSection>
    </>
  );
};

export default Detail;
