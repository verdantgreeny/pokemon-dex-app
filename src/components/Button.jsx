import React from 'react'
import { StButton } from '../styles/styledComponents';

const Button = ({children, color, type, onClick}) => {
  return (
    <StButton  color={color} type={type} onClick={onClick}>{children}</StButton>
  )
}

export default Button

