import React from 'react'
import { HeadingStyle, HeadingMedium } from '../styles/Typography'
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
  padding: 7vw 6vw;
  position: relative;
  background-color: var(--white);
  z-index: 2;
  header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 6vw;
    p {
      margin: 0;
    }
    aside {
      display: flex;
      align-items: flex-end;
    }
  }
  h3 {
    ${HeadingStyle}
    ${HeadingMedium}
    margin-bottom: 1rem;
    flex: 1;
  }
  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(6, auto);
    grid-gap: 1rem;
    @media screen and (min-width: 1024px) {
      grid-template-columns: repeat(6, 1fr);
      grid-template-rows: 1fr 1fr;
      grid-gap: 2rem;
    }
    li {
      &:nth-child(5) {
        grid-column: 1 / 3;
        grid-row: 3 / 5;
      }
      @media screen and (min-width: 1024px) {
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
      }
      img {
        width: 100%;
        height: auto;
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
      }
      a {
        display: block;
        position: relative;
        width: 100%;
        overflow: hidden;
        &:before {
          content: '';
          padding-top: 100%;
          display: block;
        }
      }
    }
  }
`
interface FeedItem {
  id: string
  media_type: string
  media_url: string
  thumbnail_url?: string
}

interface InstagramProps {
  feed: [FeedItem]
}

const Instagram = ({ data }) => {
  // useEffect(() => {}, [feed])
  if (!data) return null
  console.log('data=', data.feed.nodes)
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
        {data.feed.nodes.map(item => (
          <li key={item.id}>
            <a href={item.permalink} target="_blank" rel="noreferrer">
              <img
                src={
                  ['IMAGE', 'CAROUSEL_ALBUM'].includes(item.media_type)
                    ? item.media_url
                    : item.thumbnail_url
                }
              />
            </a>
          </li>
        ))}
      </ul>
    </IS>
  )
}

export default Instagram
