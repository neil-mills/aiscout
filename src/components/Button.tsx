import React, { FC } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { buttonStyles } from '../styles/Button'

const ButtonStyles = styled(Link)`
  ${buttonStyles}
`
interface ButtonProps {
  children: React.ReactNode;
  link: string;
}

const Button = ({ children, link = '' }: ButtonProps): JSX.Element => {
  return <ButtonStyles to={link}>{children}</ButtonStyles>
}

export default Button
