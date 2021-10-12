import React, { ReactNode } from 'react'
import Play from '../assets/svg/play.svg'
import styled from 'styled-components'

const MediaStyles = styled.figure`
  display: block;
  position: relative;
  margin: 0;
  img {
    z-index: 1;
  }
  svg {
    display: block;
    width: 70px;
    height: 70px;
    z-index: 2;
    position: absolute;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 50%;
  }
  figcaption {
    position: absolute;
    z-index: 2;
    left: 0;
    bottom: 0;
    padding: 0 0 4rem 4rem;
    color: var(--white);
    p {
      &:first-child {
        font-size: var(--font-xsmall);
      }
      &:last-child {
        font-size: var(--font-small);
        font-family: brandon_grotesquebold;
      }
    }
  }
`
interface MediaProps extends FC {
  subTitle?: string
  title?: string
  children?: ReactNode
}

const Media = ({ subTitle, title, children }: MediaProps): JSX.Element => {
  return (
    <MediaStyles>
      <Play />
      {subTitle ||
        (title && (
          <figcaption>
            {subTitle && <p>{subTitle}</p>}
            {title && <p>{title}</p>}
          </figcaption>
        ))}
      {children}
    </MediaStyles>
  )
}

export default Media
