import React from 'react'
import { Link } from 'gatsby';
import styled from 'styled-components';


const SecondaryNavStyles = styled.nav`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: left;
  font-size: 2rem;
  ul {
    list-style: none;
    margin: 0;
    position: relative;
    &:first-child {
      padding-right: 6rem;
      &:after {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        width: 1px;
        height: 100%;
        display: block;
        background-color: var(--light-grey);
      }
    }
    &:last-child {
      padding-left: 6rem;
    }
  }
  a {
    color: var(--grey);
    text-decoration: none;
  }
`
const SecondaryNav = () => {
  return (
    <SecondaryNavStyles>
      <ul>
        <li><Link to="players">Players</Link></li>
        <li><Link to="scouts">Scouts</Link></li>
        <li><Link to="news">News</Link></li>
        <li><Link to="contact">Contact</Link></li>
      </ul>
      <ul>
        <li><Link to="players">Terms and conditions</Link></li>
        <li><Link to="scouts">Privacy policy</Link></li>
        <li><Link to="news">Press and coverage</Link></li>
        <li><Link to="contact">Awards &amp; certification</Link></li>
      </ul>
    </SecondaryNavStyles>
  )
}

export default SecondaryNav;
