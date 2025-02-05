import styled from "styled-components";

export const StHeader = styled.header`
  font-family: "Barriecito", serif;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0 10px 10px;
  background-color: #121a35;
  color: white;
  text-shadow: -1px 0 #f8bf90, 0 1px #f8bf90, 1px 0 #f8bf90, 0 -1px #f8bf90;
  border-bottom: 8px solid #fed100;

  h1 {
    font-size: 38px;
  }
  nav {
    a {
      padding: 10px;
      color: white;
      text-decoration: none;
      font-size: 25px;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export const StMain = styled.main`
  min-height: 89vh;
  background-color: #f2f2f2;
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
  background-color: #121a35;
  color: white;
  border-top: 8px solid #fed100;
`;
