import React, { FC, useEffect, useState, useRef } from 'react'
import styled from 'styled-components'
import { HeadingStyle, HeadingLarge } from '../styles/Typography'
import Icon from '../assets/svg/icon.svg'
import Logo from '../assets/images/aiscout.svg'

const ImageBannerStyles = styled.section`
  display: block;
  position: relative;
  width: 100%;
  height: 520px;
  opacity: 0;
  @media screen and (min-height: 800px) and (max-height: 1000px) {
    height: 95vh;
  }
  z-index: 2;
  background-position: right center;
  background-size: cover;
  background-attachment: fixed;
`

const SlideInner = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  align-items: center;
  flex-wrap: wrap;
  padding: 0 6vw;
  flex-direction: row;
  color: var(--white);
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  justify-content: space-between;
`

const SlideCaption = styled.div`
  width: 100%;
  max-width: 260px;
  @media screen and (min-width: 1024px) {
    max-width: 567px;
  }
  @media screen and (min-width: 1180px) {
    max-width: 620px;
  }
  h2,
  h3 {
    margin: 0 0 2rem;
    line-height: 110%;
    color: var(--white);
  }
  svg {
    margin-bottom: 2rem;
  }
  h3 {
    ${HeadingStyle}
    ${HeadingLarge}
    color: var(--white);
  }
  p {
    margin-bottom: 5rem;
    max-width: 90%;
  }
`

const LogoStyles = styled(Logo)`
  position: absolute;
  bottom: 4vw;
  left: 6vw;
  z-index: 10;
`
interface ParallaxBannerProps {
  imgLg: string
  imgSm?: string
  heading?: string
  breakpoint?: number
  text?: string
  icon?: boolean
  logo?: boolean
}

const ImageBannerParallax = ({
  imgLg,
  imgSm,
  heading,
  breakpoint = 900,
  text,
  icon = false,
  logo = false,
}: ParallaxBannerProps): JSX.Element => {
  const [bgSrc, setBgSrc] = useState<string>(null)
  const bgRef = useRef<HTMLDivElement>(null)

  const handleResize = () => {
    console.log(window.innerWidth)
    console.log('small img=', imgSm)
    console.log('lrg img=', imgLg)
    const bg: string = window.innerWidth < breakpoint && imgSm ? imgSm : imgLg
    console.log('bg=', bg)
    if (bg && bg !== bgSrc && bgRef.current) {
      bgRef.current.style.backgroundImage = `url(${bg})`
      setBgSrc(bg)
    }
  }

  const preloadImages = () => {
    let allImages: string[] = [imgLg]
    let loaded = 0
    if (imgSm) allImages = [imgSm, ...allImages]
    allImages.forEach(imgSrc => {
      const img = new Image()
      img.src = imgSrc
      img.onload = () => {
        loaded++
        if (loaded === allImages.length && bgRef.current) {
          handleResize()
          window.addEventListener('resize', handleResize)
          bgRef.current.style.opacity = '1'
        }
      }
    })
  }

  useEffect(() => {
    preloadImages()
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <ImageBannerStyles ref={bgRef} style={{ backgroundImage: `url(${bgSrc})` }}>
      <SlideInner>
        <SlideCaption>
          {icon && <Icon />}
          {heading && <h3>{heading}</h3>}
          {text && <p>{text}</p>}
        </SlideCaption>
      </SlideInner>
      {logo && <LogoStyles />}
    </ImageBannerStyles>
  )
}

export default ImageBannerParallax
