import React, { FC } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { buttonStyles } from '../styles/Button'

const ButtonStyles = styled(Link)`
  ${buttonStyles}
`
interface ButtonProps {
  children: React.ReactNode;
  to: string;
}

const Button = ({ children, to = '' }: ButtonProps): JSX.Element => {
  return <ButtonStyles to="">{children}</ButtonStyles>
}

export default Button
