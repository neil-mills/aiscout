import React, { FC, useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import DataIQ from '../assets/images/data-iq-awards.png'
import WFS from '../assets/images/wfs.png'
import OutstandingInnovationInitiative from '../assets/images/outstanding-innovation-initiative.png'
import BgImage from '../assets/images/iphone-img.jpg'
import IPhone from '../assets/images/iphone.png'
import VideoMP4 from '../assets/video/player-vid.mp4'
import VideoWebM from '../assets/video/player-vid.webm'

const FeatureBlockStyles = styled.section`
  padding: 0;
  position: relative;
  width: 100%;
  z-index: 2;
`
const FeatureBlockInner = styled.div`
  display: grid;
  padding: 0;
  grid-template-columns: minmax(0, 495px) 1fr;
  padding: 0 0 0 6vw;
`
const ImageContainer = styled.div`
  display: block;
  height: auto;
  position: relative;
  max-width: 495px;
  img {
    position: relative;
    margin: 0 auto;
    text-align: center;
    display: block;
    width: 80%;
    height: auto;
    z-index: 2;
  }
  video {
    height: 100%;
    width: 100%;
    background-size: cover;
    background-position: 50% 50%;
    object-fit: cover;
    display: block;
  }
`
const TextContainer = styled.div`
  padding: 0 3vw 0 0;
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
const Video = styled.div`
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 18% 0 21%;
  z-index: 1;
`

const FeatureBlock: FC = (): JSX.Element => {
  const videoRef = useRef<HTMLVideoElement>(null)

  const callback = (
    entries: IntersectionObserverEntry[],
    observer: IntersectionObserver
  ): void => {
    entries.forEach(entry => {
      // setAutoPlay(entry.isIntersecting)
      if (entry.isIntersecting) {
        if (videoRef.current) {
          videoRef.current.play()
        }
      } else {
        if (videoRef.current) {
          videoRef.current.pause()
        }
      }
    })
  }

  useEffect(() => {
    const options = {
      root: null, // relative to document viewport
      rootMargin: '0px', // margin around root. Values are similar to css property. Unitless values not allowed
      threshold: 0, // visible amount of item shown in relation to root
    }
    const observer: IntersectionObserver = new IntersectionObserver(
      callback,
      options
    )
    if (videoRef.current) {
      observer.observe(videoRef.current)
    }
  }, [])

  return (
    <FeatureBlockStyles>
      <FeatureBlockInner>
        <ImageContainer>
          <img src={IPhone} />
          <Video>
            <video
              ref={videoRef}
              loop={true}
              style={{ backgroundImage: `url(${BgImage})` }}
              muted={true}
              playsInline={true}
              data-wf-ignore="true"
              data-object-fit="cover"
            >
              <source src={VideoMP4} data-wf-ignore="true" />
              <source src={VideoWebM} data-wf-ignore="true" />
            </video>
          </Video>
        </ImageContainer>
        <TextContainer>
          <div>
            <h3>Award winning, proven technology</h3>
            <p>
              No longer do players have to wait for a Scout to arrive at a match
              to get noticed. Our proven and award winning technology now allows
              professional clubs, FA’s, federations, universities and many more
              footballing organisations to provide players an opportunity to get
              analysed and generate important data that clubs want to see, via a
              mobile phone.
            </p>
            <ul>
              <li>
                <img src={DataIQ} />
              </li>
              <li>
                <img src={WFS} />
              </li>
              <li>
                <img src={OutstandingInnovationInitiative} />
              </li>
            </ul>
          </div>
        </TextContainer>
      </FeatureBlockInner>
    </FeatureBlockStyles>
  )
}

export default FeatureBlock
