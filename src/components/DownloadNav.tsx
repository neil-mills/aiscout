import React, { FC } from 'react'
import AppStore from '../assets/images/app-store.png'
import GooglePlay from '../assets/images/google-play.png'
import styled from 'styled-components'

const NS = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-self: flex-end;
  gap: 1rem;
  a {
    cursor: pointer;
  }
  a,
  img {
    display: block;
  }
`

const DownloadNav = props => {
  return (
    <NS className={props.className}>
      <li>
        <a href="" target="_blank">
          <img src={AppStore} />
        </a>
      </li>
      <li>
        <a href="" target="_blank">
          <img src={GooglePlay} />
        </a>
      </li>
    </NS>
  )
}

export default DownloadNav
