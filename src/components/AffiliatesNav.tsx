import React, { FC } from 'react'
import Chelsea from '../assets/images/chelsea-footer.png'
import Burnley from '../assets/images/burnley-footer.png'
import Intel from '../assets/images/intel-footer.png'
import LUL from '../assets/images/lul-footer.png'
import styled from 'styled-components'

const AffiliatesNavStyles = styled.nav`
  ul {
    list-style: none;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 2rem;
    width: 100%;
  }
  li {
    margin: 0;
  }
  a {
    display: block;
    max-height: 45px;
  }
  img {
    display: block;
    height: 100%;
    max-height: 45px;

  }
`

const AffiliatesNav = () => {
  return (
    <>
      <AffiliatesNavStyles>
        <ul>
          <li>
            <a href="">
             <img src={Intel} />
            </a>
          </li>
          
          <li>
            <a href="">
             <img src={LUL} />
            </a>
          </li>
          <li>
            <a href="">
              <img src={Burnley} />
            </a>
          </li>
          <li>
            <a href="">
              <img src={Chelsea} />
            </a>
          </li>
        </ul>
      </AffiliatesNavStyles>
    </>
  )
}

export default AffiliatesNav
