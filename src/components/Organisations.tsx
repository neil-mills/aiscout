import React, { FC } from 'react'
import styled from 'styled-components'
import { HeadingStyle, HeadingMedium } from '../styles/Typography'
import NottsForest from '../assets/images/NottsForest.png'
import LUL from '../assets/images/LUL.png'
import Chelsea from '../assets/images/Chelsea.png'
import Fifa from '../assets/images/Fifa.png'
import Burnley from '../assets/images/Burnley.png'
import Intel from '../assets/images/Intel.png'
import Olympiacos from '../assets/images/Olympiacos.png'
import RelianceFoundation from '../assets/images/RelianceFoundation.png'
import RYFC from '../assets/images/RYFC.png'

const OS = styled.section`
  position: relative;
  z-index: 2;
  padding: 8vw 6vw;
  background-color: var(--white);
  h3 {
    ${HeadingStyle}
    ${HeadingMedium}
    margin-bottom: 2rem;
    max-width: 300px;
    @media screen and (min-width: 1024px) {
      max-width: 100%;
    }
  }
  a,
  img {
    display: block;
  }
  ul {
    display: grid;
    margin-top: 6vw;
    grid-gap: 1rem;
    align-items: center;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, auto);
    justify-content: center;
    align-items: center;
    @media screen and (min-width: 767px) {
      grid-template-columns: repeat(9, 1fr);
      grid-template-rows: auto;
      grid-gap: 3rem;
    }
    a {
      display: flex;
      justify-content: center;
      width: 100%;
      height: 100%;
    }
    img {
      max-height: 70px;
      height: 100%;
      @media screen and (min-width: 767px) {
        max-height: 100px;
      }
    }
  }
`
const Organisations: FC = (): JSX.Element => {
  return (
    <OS>
      <h3>Organisations we work with</h3>
      <p>Like minded organisations that are looking into the future</p>
      <ul>
        <li>
          <a href="" target="_blank">
            <img src={NottsForest} title="Notts Forest" />
          </a>
        </li>
        <li>
          <a href="" target="_blank">
            <img src={LUL} title="Loughborough University London" />
          </a>
        </li>
        <li>
          <a href="" target="_blank">
            <img src={Chelsea} title="Chelsea" />
          </a>
        </li>
        <li>
          <a href="" target="_blank">
            <img src={Fifa} title="FIFA" />
          </a>
        </li>
        <li>
          <a href="" target="_blank">
            <img src={Burnley} title="Burnley" />
          </a>
        </li>
        <li>
          <a href="" target="_blank">
            <img src={Intel} title="Intel" />
          </a>
        </li>
        <li>
          <a href="" target="_blank">
            <img src={Olympiacos} title="Olympiacos" />
          </a>
        </li>
        <li>
          <a href="" target="_blank">
            <img src={RelianceFoundation} title="Reliance Foundation" />
          </a>
        </li>
        <li>
          <a href="" target="_blank">
            <img src={RYFC} title="RYFC" />
          </a>
        </li>
      </ul>
    </OS>
  )
}

export default Organisations
