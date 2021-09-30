import React, { FC } from 'react'
import styled from 'styled-components'
import DataIQ from '../assets/images/data-iq-awards.png'
import WFS from '../assets/images/wfs.png'
import OutstandingInnovationInitiative from '../assets/images/outstanding-innovation-initiative.png'
import BgImage from '../assets/images/iphone-img.jpg';
import IPhone from '../assets/images/iphone.png';
import HexBg from '../assets/images/hex-bg.png'

const FeatureBlockStyles = styled.section`
  padding: 8rem 0 9rem;
  position: relative;
  background-color: var(--lightest-grey);
  background-position: top right;
  background-size: 90%;
  width: 100%;
  background-image: url(${HexBg});
  z-index: 2;
`

const FeatureBlockInner = styled.div`
  display: grid;
  padding: 10rem 0 8rem;
  grid-template-columns: 52% 48%;
`
const ImageContainer = styled.div`
  display: block;
  height: 590px;
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    display: block;
    margin: 0;
  }
`
const COImageContainer = styled.div`
  width: 52%;
  position: absolute;
  top: 8rem;
  left: 0;
  bottom: 0;
  background: transparent;
  img {
    height: 100%;
    margin: 0 auto;
  }
`
const TextContainer = styled.div`
  padding: 0 8rem;
  display: flex;
  align-items: center;
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
const FeatureBlock = () => {
  return (
    <FeatureBlockStyles>
      <COImageContainer>
        <img src={IPhone} />
      </COImageContainer>
      <FeatureBlockInner>
      <ImageContainer>
       <img src={BgImage} />
      </ImageContainer>
      <TextContainer>
        <div>
        <h3>Award winning, proven technology</h3>
        <p>
          No longer do players have to wait for a Scout to arrive at a match to
          get noticed. Our proven and award winning technology now allows
          professional clubs, FA’s, federations, universities and many more
          footballing organisations to provide players an opportunity to get
          analysed and generate important data that clubs want to see, via a
          mobile phone.
        </p>
        <ul>
          <li><img src={DataIQ} /></li>
          <li><img src={WFS} /></li>
          <li><img src={OutstandingInnovationInitiative} /></li>
        </ul>
        </div>
      </TextContainer>
      </FeatureBlockInner>
    </FeatureBlockStyles>
  )
}

export default FeatureBlock
