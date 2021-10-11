import React, { FC } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import SocialNav from './SocialNav'
import Button from './Button'
import { HeadingStyle } from '../styles/Typography'

const MobileMenuStyles = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100vh;
  display: none;
  background-color: var(--black);
  z-index: 9;
  padding: 7.6rem 6vw 6vw 6vw;
  p {
    margin: 0 0 3rem;
  }
  svg path {
    fill: var(--grey);
  }
  [data-noscroll='true'] & {
    display: block;
  }
`
const MobileMenuInner = styled.div`
  display: grid;
  grid-template-rows: repeat(2, auto);
  padding: 6vw 0 0;
  grid-gap: 3rem;
  justify-content: left;
  align-items: start;
  height: 100%;
  footer {
    align-self: end;
  }
`
const MobileNav = styled.nav`
  li {
    margin: 1rem 0;
    &:last-child {
      margin: 3rem 0 0;
    }
  }
  a {
    ${HeadingStyle}
    text-decoration: none;
    font-size: var(--font-xsmall);
    &:link,
    &:focus,
    &:visited {
      color: var(--white);
    }
    text-transform: uppercase;
  }
`

const MobileMenu: FC = (): JSX.Element => {
  return (
    <MobileMenuStyles>
      <MobileMenuInner>
        <MobileNav>
          <ul>
            <li>
              <Link to="players">Players</Link>
            </li>
            <li>
              <Link to="scouts">Scouts</Link>
            </li>
            <li>
              <Link to="news">News</Link>
            </li>
            <li>
              <Link to="contact">Contact</Link>
            </li>
            <li>
              <Link to="contact">Terms and conditions</Link>
            </li>
            <li>
              <Link to="contact">Privacy policy</Link>
            </li>
            <li>
              <Link to="contact">Press and coverage</Link>
            </li>
            <li>
              <Link to="contact">Awards &amp; certification</Link>
            </li>
            <li>
              <Button to={'get-started'}>Get Started</Button>
            </li>
          </ul>
        </MobileNav>
        <footer>
          <p>
            Developed with assisstance from Chelsea FC, Burnley FC, Loughborough
            University London
          </p>
          <SocialNav />
        </footer>
      </MobileMenuInner>
    </MobileMenuStyles>
  )
}

export default MobileMenu
