import { Link } from 'gatsby'
import React, { FC } from 'react'
import styled from 'styled-components'
import Button from './Button';


const NavStyles = styled.nav`
  display: grid;
  align-items: center;
  justify-content: right;
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
      color:  var(--grey);
    }
    
  }
`

export const Nav: FC = (): JSX.Element => {
  return (
    <NavStyles>
      <ul>
        <li>
          <NavLink to="">Players</NavLink>
        </li>
        <li>
          <NavLink to="">Scouts</NavLink>
        </li>
        <li>
          <NavLink to="">News</NavLink>
        </li>
        <li>
          <NavLink to="">Contact</NavLink>
        </li>
        <li>
          <Button to="">
            Get Started
          </Button>
        </li>
      </ul>
    </NavStyles>
  )
}

export default Nav
