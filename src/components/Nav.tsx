import { Link } from 'gatsby'
import React, { FC } from 'react'
import styled from 'styled-components'
import Button from './Button'

const NavStyles = styled.nav`
  display: none;
  align-items: center;
  justify-content: right;
  @media screen and (min-width: 1024px) {
    display: grid;
  }
  ul {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 6rem;
    list-style: none;
    margin: 0;
    width: 100%;
  }
  li {
    margin: 0;
    display: grid;
    align-items: center;
  }
`

const NavLink = styled(Link)`
  font-size: 1.6rem;
  background-color: transparant;
  border-radius: 0;
  color: var(--white);
  text-transform: uppercase;
  text-decoration: none;
  transition: all 200ms ease;
  font-family: brandon_grotesquebold, sans-serif;
  &:hover,
  &:active,
  &:focus {
    color: var(--light-grey);
  }
  .on-white & {
    color: var(--black);
    &:hover,
    &:active,
    &:focus {
      color: var(--grey);
    }
  }
`

const MenuButtonStyles = styled.button`
  padding: 0;
  background-color: transparent;
  border: none;
  display: block;
  width: 40px;
  height: 40px;
  padding: 10px;
  margin-right: -10px;
  position: relative;
  cursor: pointer;
  justify-self: right;
  @media screen and (min-width: 1024px) {
    display: none;
  }
  span {
    display: block;
    position: absolute;
    width: 20px;
    height: 2px;
    left: 10px;
    background-color: var(--white);
    .on-white & {
      background-color: var(--black);
    }
    &:nth-child(1) {
      top: 10px;
    }
    &:nth-child(2) {
      top: 50%;
      transform: translate(0, -50%);
    }
    &:nth-child(3) {
      bottom: 10px;
    }
  }
`

const MenuButton: FC = () => {
  return (
    <MenuButtonStyles>
      <span></span>
      <span></span>
      <span></span>
    </MenuButtonStyles>
  )
}
export const Nav: FC = (): JSX.Element => {
  return (
    <>
      <MenuButton />
      <NavStyles>
        <ul>
          <li>
            <NavLink to="players">Players</NavLink>
          </li>
          <li>
            <NavLink to="scouts">Scouts</NavLink>
          </li>
          <li>
            <NavLink to="news">News</NavLink>
          </li>
          <li>
            <NavLink to="contact">Contact</NavLink>
          </li>
          <li>
            <Button to="get-started">Get Started</Button>
          </li>
        </ul>
      </NavStyles>
    </>
  )
}

export default Nav
