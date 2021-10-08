import React, { FC, useRef, useEffect } from 'react'
import styled from 'styled-components'

import BgImage from '../assets/images/auto-platform-img.jpg'
import Player from '../assets/images/player.png'

const FeatureBlockStyles = styled.section`
  padding: 0;
  position: relative;
  background-color: transparent;
  z-index: 2;
  margin-top: -4rem;
`

const FeatureBlockInner = styled.div`
  display: grid;
  padding: 0;
  grid-template-columns: 38% 1fr;
  align-items: center;
  padding: 0 0 0 6vw;

  div:nth-child(2) {
    display: flex;
    position: relative;
    justify-content: flex-end;
  }
`
const ImageContainer = styled.div`
  display: block;
  width: 100%;
  max-width: 1000px;
  padding: 6vw 0 6vw 20%;
  position: relative;

  img {
    object-fit: cover;
    object-position: 100% 50%;
    width: 100%;
    height: 100%;
    display: block;
    margin: 0;
  }
`

const COImageContainer = styled.div`
  width: auto;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  background: transparent;
  z-index: 2;
  img {
    height: 100%;
    margin-left: --10rem;
  }
`
const TextContainer = styled.div`
  padding: 0;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  div {
    width: 80%;
  }
  h3 {
    font-size: var(--font-medium-mob);
    @media screen and (min-width: 1100px) {
      font-size: var(--font-medium);
    }
    margin-bottom: 3rem;
  }
  p {
    margin-bottom: 3rem;

    &:last-of-type {
      margin: 0;
    }
  }
  ul {
    display: flex;
    gap: 1.5rem;
    align-items: center;
    img {
      display: block;
    }
  }
`
const FeatureBlockTwo: FC = () => {
  const imageRef = useRef<HTMLDivElement>(null)
  const imageContainerRef = useRef<HTMLDivElement>(null)

  const handleResize = () => {
    const height: number = imageRef.current ? imageRef.current.clientHeight : 0
    const padding: number = (height / 100) * 30
    if (imageContainerRef.current) {
      imageContainerRef.current.style.paddingLeft = `${padding}px`
    }
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    handleResize()
  }, [])

  return (
    <FeatureBlockStyles>
      <FeatureBlockInner>
        <TextContainer>
          <div>
            <h3>A fully automated platform</h3>
            <p>
              Developed by professors, scientists, technologists, and with the
              assistance of leading Premier League academies Chelsea FC &amp;
              Burnley FC, and technology leaders INTEL.
            </p>
            <p>
              The fully automated platform supports the requirements of the
              amateur player, scouts & coaches, the sport science, recruitment
              &amp; commercial departments.
            </p>
          </div>
        </TextContainer>

        <div>
          <ImageContainer ref={imageContainerRef}>
            <COImageContainer ref={imageRef}>
              <img src={Player} />
            </COImageContainer>
            <img src={BgImage} />
          </ImageContainer>
        </div>
      </FeatureBlockInner>
    </FeatureBlockStyles>
  )
}

export default FeatureBlockTwo
