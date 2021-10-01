import React, { useEffect } from 'react'
import { Link } from 'gatsby'
import Logo from '../assets/images/aiscout.svg'
import Nav from './Nav'
import styled from 'styled-components'

const HeaderStyles = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: grid;
  grid-gap: 2rem;
  padding: 0 8rem;
  background-color: transparent;
  transition: all 400ms ease;
  height: 126px;
  align-items: center;
  justify-content: space-between;
  grid-template-columns: auto 1fr;
  z-index: 10;
  &.on-white {
    background-color: var(--white);
    box-shadow: 0px 0px 5px 4px rgba(0,0,0,0.10);
    height: 76px;
  }
`
const LogoStyles = styled(Link)`
  width: 144px;
  height: 32px;
  svg {
    display: block;
    transition: all 200ms ease;
    height: 100%;
    .on-white & path:not(:last-child) {
      fill: var(--black);
    }
  }
`
const Header = React.forwardRef((props, ref) => {

  return (
    <HeaderStyles id="header" ref={ref}>
      <LogoStyles aria-current="page" to="">
        <Logo id="logo" />
      </LogoStyles>
      <Nav />
    </HeaderStyles>
  )
});

export default Header
