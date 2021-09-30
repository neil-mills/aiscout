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
`
const ImageContainer = styled.div`
  display: block;
  height: 475px;
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    display: block;
    margin: 0;
  }
`
const COImageContainer = styled.div`
  width: auto;
  height: 100%;
  position: absolute;
  top: -9rem;
  right: calc(48% - 150px);
  bottom: 9rem;
  background: transparent;
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
    max-width: 440px;
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
      <COImageContainer>
        <img src={Player} />
      </COImageContainer>
      <FeatureBlockInner>
        <TextContainer>
          <div>
            <h3>A fully automated platform</h3>
            <p>
              Developed by professors, scientists, technologists, and with the
              assistance of leading Premier League academies Chelsea FC &
              Burnley FC, and technology leaders INTEL.
            </p>
            <p>
              The fully automated platform supports the requirements of the
              amateur player, scouts & coaches, the sport science, recruitment &
              commercial departments.
            </p>
          </div>
        </TextContainer>
        <ImageContainer>
          <img src={BgImage} />
        </ImageContainer>
      </FeatureBlockInner>
    </FeatureBlockStyles>
  )
}

export default FeatureBlockTwo
