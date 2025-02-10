# Pokemon Dex
## 💬 프로젝트 소개
이번 Pokemon Dex 프로젝트는 리액트 vite를 이용하여 prop drilling, Context API 및 rtk를 활용한 라우팅 구현 방식으로 진행하였습니다. React의 상태 관리와 이벤트 핸들링르 활용하여, 포켓몬 정보를 다루는 앱입니다.

<br />

 ### **작업기간**: 2025. 02. 03 ~ 2025. 02. 10

<br />

### 구현한 기능
- git 브랜치 전략 사용(prop-drilling/context/rtk) : prop-drilling을 context 및 rtk로 리팩터링 진행
- 페이지 라우팅 구현
- 도감 페이지 구성
  - 컴포넌트 구분(Dashboard, PokemonList, PokemonCard 및 Button)
  - 포켓몬 리스트 표시
  - 포켓몬 선택 기능 및 최대 선택 수 제한
- 디테일 페이지 구현
  - queryString
  - 디테일 정보 표시 및 뒤로가기, 추가 버튼
  - 포켓몬 선택 리스트 미리보기
  - 이전 번호 및 이후 번호 포켓몬 이동 기능
- 알림 기능 : 중복 선택 방지 및 선택 수 제한 안내
- styled-components로 스타일링 설정
- 리스트 페이지 데이터 유지(로컬스토리지 사용)
- UI 라이브러리 활용(react-toastify)


<br />

## ⚙ 프로젝트 화면 및 구조
**1. 화면**<br />
<img src="https://velog.velcdn.com/images/verdantgreeny/post/3a1811b6-4273-42ce-93b4-410b67fc40c2/image.gif" width="600px"/>

**1-1. Home**
|![](https://velog.velcdn.com/images/verdantgreeny/post/283e9f9e-92d9-4737-96e4-8162d8c36e1a/image.png)|![](https://velog.velcdn.com/images/verdantgreeny/post/984b9189-0c9b-4924-8411-edc4d6f58aef/image.png)|
|:-:|:-:|

**1-2. Dex**
|![](https://velog.velcdn.com/images/verdantgreeny/post/d9d2ef67-ab6e-4fcc-9df7-8669cc3bc966/image.png)![](https://velog.velcdn.com/images/verdantgreeny/post/9a9e6b32-9a8b-497c-802e-3f39637684e6/image.png)|![](https://velog.velcdn.com/images/verdantgreeny/post/df6ac865-85bc-41ac-abfe-b2ee8a0955b9/image.png)![](https://velog.velcdn.com/images/verdantgreeny/post/d061d421-8d22-41fb-b42c-5f86916917e9/image.png)|
|:-:|:-:|

**1-3. Detail**
|![](https://velog.velcdn.com/images/verdantgreeny/post/293e0115-4c8b-4516-986a-4e35a5d4da8b/image.png)|![](https://velog.velcdn.com/images/verdantgreeny/post/a59c90d8-29e5-4d25-bd34-f13020704915/image.png)|
|:-:|:-:|

<br>

**2. 구조** <br />
## 📁 프로젝트 구조
```markdown
📦src
 ┣ 📂assets
 ┃ ┣ 📜favicon-32x32.png
 ┃ ┣ 📜gradient-white-color-background.png
 ┃ ┣ 📜pokeball.png
 ┃ ┣ 📜pokemon-home.png
 ┃ ┗ 📜react.svg
 ┣ 📂components
 ┃ ┣ 📜Button.jsx
 ┃ ┣ 📜Dashboard.jsx
 ┃ ┣ 📜PokemonCard.jsx
 ┃ ┗ 📜PokemonList.jsx
 ┣ 📂contexts
 ┃ ┗ 📜PokemonContext.jsx
 ┣ 📂pages
 ┃ ┣ 📜Detail.jsx
 ┃ ┣ 📜Dex.jsx
 ┃ ┗ 📜Home.jsx
 ┣ 📂redux
 ┃ ┣ 📂config
 ┃ ┃ ┗ 📜store.js
 ┃ ┗ 📂slices
 ┃ ┃ ┗ 📜pokemonSlice.js
 ┣ 📂shared
 ┃ ┣ 📜Layout.jsx
 ┃ ┣ 📜Router.jsx
 ┃ ┗ 📜ScrollToTop.jsx
 ┣ 📂styles
 ┃ ┣ 📜styledComponents.jsx
 ┃ ┣ 📜styledLayout.jsx
 ┃ ┗ 📜styledPages.jsx
 ┣ 📜.DS_Store
 ┣ 📜App.css
 ┣ 📜App.jsx
 ┣ 📜index.css
 ┣ 📜main.jsx
 ┗ 📜mock-data.js

```



<br />

## 🚀 TIL 및 트러블 슈팅
#### 1. [prop-drilling으로-구현하기](https://velog.io/@verdantgreeny/개인-프로젝트-Pokemon-Dex-1-prop-drilling으로-구현하기) : 트러블슈팅(Array().fill().map() 체이닝)

#### 2. [react-toastify 적용, styled-components 분리](https://velog.io/@verdantgreeny/개인-프로젝트-Pokemon-Dex-2-react-toastify-적용-styled-components-분리) 

#### 3. [Context API 및 RTK로 리팩토링](https://velog.io/@verdantgreeny/개인-프로젝트-Pokemon-Dex-3-Context-API-및-RTK로-리팩토링) : 트러블슈팅(불필요한 변수와 종속적인 함수)

#### 4. [vercel 배포](https://velog.io/@verdantgreeny/개인-프로젝트-Pokemon-Dex-4-vercel-배포) : 트러블슈팅(이미지 참조 경로 / 새로고침 404 에러)

<br />


#### 배포된 링크 (배포성공❤️) : [링크](https://pokemon-dex-app-rho.vercel.app/home)
#### KPT 회고 : []()
