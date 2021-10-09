import React, { FC } from 'react'
import styled from 'styled-components'
import { HeadingStyle, HeadingLarge } from '../styles/Typography'
import Icon from '../assets/svg/icon.svg'
import Logo from '../assets/images/aiscout.svg'

const ImageBannerStyles = styled.section`
  display: block;
  position: relative;
  width: 100%;
  height: 90vh;
  z-index: 2;
  background-position: center center;
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
  bottom: 6rem;
  left: 10rem;
  z-index: 10;
`
interface ParallaxBannerProps {
  img: string
  heading?: string
  text?: string
  icon?: boolean
  logo?: boolean
}

const ImageBannerParallax = ({
  img,
  heading,
  text,
  icon = false,
  logo = false,
}: ParallaxBannerProps): JSX.Element => {
  // const ImageRef = useRef<HTMLImageElement>(null);
  // useEffect(() => {
  //   let instance:any;
  //   if(ImageRef.current) {
  //     instance = new simpleParallax(ImageRef.current,{
  //     })
  //   }
  //   return () => {
  //       instance.destroy();
  //   }
  // }, []);

  return (
    <ImageBannerStyles style={{ backgroundImage: `url(${img})` }}>
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
