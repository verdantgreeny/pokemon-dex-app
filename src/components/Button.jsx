import React from 'react'
import styled from 'styled-components';

const Button = ({children, color, type, onClick}) => {
  return (
    <StButton  color={color} type={type} onClick={onClick}>{children}</StButton>
  )
}

export default Button

const StButton = styled.button`
  background-color: ${(prop) => (prop.color === "red" ? "#f89090" : prop.color === "yellow" ? "#F1EF7B" : "#B3E0F8")};
  border: none;
  border-radius: 12px;
  width: 60px;
  padding: 2px;
  margin: 0 auto;
  cursor: pointer;

  &:hover {
    background-color: ${(p) => (p.color === "red" ? "#f8909086" : p.color === "yellow" ? "#dad868ae" : "#b3e0f87b")};
  }

`;
