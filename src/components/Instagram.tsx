import React, { FC } from 'react'
import Button from './Button'
import styled from 'styled-components'
import Insta1 from '../assets/images/insta-1.jpg'
import Insta2 from '../assets/images/insta-2.jpg'
import Insta3 from '../assets/images/insta-3.jpg'
import Insta4 from '../assets/images/insta-4.jpg'
import Insta5 from '../assets/images/insta-5.jpg'
import Insta6 from '../assets/images/insta-6.jpg'
import Insta7 from '../assets/images/insta-7.jpg'
import Insta8 from '../assets/images/insta-8.jpg'
import Insta9 from '../assets/images/insta-9.jpg'

const IS = styled.section`
  padding: 12rem 10rem;
  position: relative;
  background-color: var(--white);
  z-index: 2;
  header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 6rem;
    p {
      margin: 0;
    }
    aside {
      display: flex;
      align-items: flex-end;
    }
  }
  h3 {
    font-size: var(--font-medium);
    margin-bottom: 1rem;
    flex: 1;
  }
  ul {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: 1fr 1fr;
    grid-gap: 2rem;
    li {
      &:nth-child(3) {
        grid-column: 1 / 2;
        grid-row: 2 / 3;
      }
      &:nth-child(4) {
        grid-column: 2 / 3;
        grid-row: 2 / 3;
      }
      &:nth-child(5) {
        grid-column: 3 / 5;
        grid-row: 1 / 3;
      }
      img {
        width: 100%;
        height: auto;
        display: block;
      }
    }
  }
`

const Instagram = () => {
  return (
    <IS>
      <header>
        <div>
          <h3>Instagram</h3>
          <p>Get involved</p>
        </div>
        <aside>
          <Button to="">Follow</Button>
        </aside>
      </header>
      <ul>
        <li>
          <a href="">
            <img src={Insta1} />
          </a>
        </li>
        <li>
          <a href="">
            <img src={Insta2} />
          </a>
        </li>
        <li>
          <a href="">
            <img src={Insta3} />
          </a>
        </li>
        <li>
          <a href="">
            <img src={Insta4} />
          </a>
        </li>
        <li>
          <a href="">
            <img src={Insta5} />
          </a>
        </li>
        <li>
          <a href="">
            <img src={Insta6} />
          </a>
        </li>
        <li>
          <a href="">
            <img src={Insta7} />
          </a>
        </li>
        <li>
          <a href="">
            <img src={Insta8} />
          </a>
        </li>
        <li>
          <a href="">
            <img src={Insta9} />
          </a>
        </li>
      </ul>
    </IS>
  )
}

export default Instagram
