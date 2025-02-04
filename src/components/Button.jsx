import React from 'react'
import styled from 'styled-components';

const Button = ({children, color, type, onClick}) => {
  return (
    <StButton  color={color} type={type} onClick={onClick}>{children}</StButton>
  )
}

export default Button

const StButton = styled.button`
  background-color: ${(prop) => (prop.color === "red" ? "#F8BF90" : "#B3E0F8")};
  border: none;
  border-radius: 12px;
  width: 60px;
  padding: 2px;
  margin: 0 auto;
  cursor: pointer;

  &:hover {
    background-color: ${(p) => (p.color === "red" ? "#f8bf9087" : "#b3e0f87b")};
  }

`;
