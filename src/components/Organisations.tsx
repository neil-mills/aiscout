import React, { FC } from 'react'
import styled from 'styled-components'
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
  padding: 12rem 10rem;
  background-color: var(--white);
  h3 {
    font-size: var(--font-medium);
    margin-bottom: 2rem;
  }
  a, img {
    display: block;
  }
  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 6rem;
  }
`
const Organisations = () => {
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

export default Organisations;
