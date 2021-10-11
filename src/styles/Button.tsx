import styled, { css } from 'styled-components'
import { darken, cssVar } from 'polished'

export const buttonStyles = css`
  height: 48px;
  display: inline-block;
  text-align: center;
  line-height: 48px;
  color: var(--white);
  cursor: pointer;
  padding: 0 1.5rem;
  background-color: var(--green);
  font-size: 1.4rem;
  border-radius: 5px;
  text-transform: uppercase;
  font-family: brandon_grotesquebold, sans-serif;
  transition: 0.2s;
  text-decoration: none;
  &:hover,
  &:active,
  &:focus {
    background-color: var(--green-hover);
  }
`

const Button = styled.a`
  ${buttonStyles}
`

export default Button
