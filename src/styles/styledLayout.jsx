import styled from "styled-components";

export const StHeader = styled.header`
  background-color: #3a4040;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 20px 60px 20px 30px;
  font-family: "Barriecito", serif;
  color: #f4f8f9;
  h1 {
    font-size: 5vw;

    img {
      width: 5vw;
      opacity: 0.8;
    }
  }
  nav {
    a {
      padding: 5px 10px;
      margin: 0 5px;
      border: 2px solid #3a4040;
      border-radius: 5px;
      text-decoration: none;
      text-shadow: none;
      color: #f4f8f9;
      font-size: 25px;

      &:hover {
        background-color: #b4bebe7e;
        border: 2px solid #f4f8f9;
      }
    }
  }
`;

export const StMain = styled.main`
  background-color: #f4f8f9;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2vh; // 반응형 
  min-height: 90vh;
`;

export const StFooter = styled.footer`
  background-color: #3a4040;
  position: relative;
  padding: 20px 0px;
  bottom: 0px;
  font-family: "Barriecito", serif;
  color: white;
  text-align: center;
`;
