import styled from "styled-components";

export const StHeader = styled.header`
  font-family: "Barriecito", serif;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 20px 60px 20px 30px;
  background-color: #3a4040;
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
      color: #f4f8f9;
      text-decoration: none;
      font-size: 25px;
      border: 2px solid #3a4040;
      border-radius: 5px;
      text-shadow: none;

      &:hover {
        background-color: #b4bebe7e;
        border: 2px solid #f4f8f9;
      }
    }
  }
`;

export const StMain = styled.main`
  min-height: 89vh;
  background-color: #f4f8f9;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StFooter = styled.footer`
  font-family: "Barriecito", serif;
  position: relative;
  text-align: center;
  padding: 20px 0px;
  bottom: 0px;
  background-color: #3a4040;;
  color: white;
`;
