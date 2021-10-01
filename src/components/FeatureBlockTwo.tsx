import React, { FC } from 'react'
import styled from 'styled-components'

import BgImage from '../assets/images/auto-platform-img.jpg'
import Player from '../assets/images/player.png'

const FeatureBlockStyles = styled.section`
  padding: 0 0 9rem;
  position: relative;
  background-color: var(--lightest-grey);
  z-index: 2;
`

const FeatureBlockInner = styled.div`
  display: grid;
  padding: 0 0 8rem;
  grid-template-columns: 52% 48%;
  div:nth-child(2) {
    display: flex;
    position: relative;
    justify-content: flex-end;
  }
`
const ImageContainer = styled.div`
  display: block;
  height: 475px;
  width: 100%;
  padding-left: 100px;
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
  top: -9rem;
  left: -100px;
  bottom: -8rem;
  background: transparent;
  z-index: 2;
  img {
    height: 100%;
    margin-left: --10rem;

  }
`
const TextContainer = styled.div`
  padding: 8rem 8rem 0;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  div {
    max-width: 430px;
  }
  h3 {
    font-size: clamp(3.2rem, 2.8vw, var(--font-medium));
    font-size: var(--font-medium);
    margin-bottom: 3rem;
  }
  p {
    margin-bottom: 3rem;
    width: 96%;
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
const FeatureBlockTwo = () => {
  return (
    <FeatureBlockStyles>
     
      <FeatureBlockInner>
        <div>
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
              amateur player, scouts & coaches, the sport science, recruitment &amp;
              commercial departments.
            </p>
          </div>
        </TextContainer>
        </div>
        <div>
        <COImageContainer>
        <img src={Player} />
      </COImageContainer>
        <ImageContainer>
          <img src={BgImage} />
        </ImageContainer>
        </div>
      </FeatureBlockInner>
    </FeatureBlockStyles>
  )
}

export default FeatureBlockTwo
