import React, { FC, useRef, useEffect, useState } from 'react'
import styled from 'styled-components'
import { HeadingStyle, HeadingMedium } from '../styles/Typography'
import BgImage from '../assets/images/auto-platform-img.jpg'
import Player from '../assets/images/player.png'

const FeatureBlockStyles = styled.section`
  padding: 4vw 0 0;
  position: relative;
  background-color: transparent;
  z-index: 2;
  @media screen and (min-width: 1024px) {
    margin-top: -4rem;
    padding: 0;
  }
`

const FeatureBlockInner = styled.div`
  display: grid;
  padding: 0;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto;
  @media screen and (min-width: 1024px) {
    grid-template-columns: 38% 1fr;
    grid-template-rows: 1fr;
  }
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
const ImageColumn = styled.div`
  order: 1;
  @media screen and (min-width: 1024px) {
    order: 2;
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
  padding: 5rem 0 0;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  order: 2;
  padding-right: 6vw;
  @media screen and (min-width: 1024px) {
    order: 1;
    padding-right: 0;
  }
  div {
    width: 100%;
    @media screen and (min-width: 1380px) {
      width: 80%;
    }
  }
  h3 {
    ${HeadingStyle}
    ${HeadingMedium}
margin-bottom: 3rem;
  }
  p {
    margin-bottom: 3rem;
    @media screen and (min-width: 1024px) {
      padding-right: 1rem;
    }
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
  const imageRef = useRef<HTMLImageElement>(null)
  const bgImageRef = useRef<HTMLImageElement>(null)
  const imageContainerRef = useRef<HTMLDivElement>(null)
  const [imageWidth, setImageWidth] = useState<number>(0)

  const handleResize = () => {
    const width: number = imageRef.current ? imageRef.current.width : 0
    const padding: number = (width / 100) * 56
    if (imageContainerRef.current) {
      imageContainerRef.current.style.paddingLeft = `${padding}px`
    }
    if (imageRef.current) {
      setImageWidth(imageRef.current.width)
    }
  }

  const handleImageLoaded = () => {
    if (imageRef.current) {
      handleResize()
      window.addEventListener('resize', handleResize)
    }
  }

  useEffect(() => {
    handleResize()
  }, [imageWidth])

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
        <ImageColumn>
          <ImageContainer ref={imageContainerRef}>
            <COImageContainer>
              <img
                src={Player}
                onLoad={() => handleImageLoaded()}
                ref={imageRef}
              />
            </COImageContainer>
            <img src={BgImage} ref={bgImageRef} />
          </ImageContainer>
        </ImageColumn>
      </FeatureBlockInner>
    </FeatureBlockStyles>
  )
}

export default FeatureBlockTwo
