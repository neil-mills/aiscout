import React, { FC, useRef, useEffect, useState } from 'react'
import styled from 'styled-components'
import { HeadingStyle, HeadingLarge, TextXSmall } from '../styles/Typography'
import Button from './Button'
import SlideA from '../assets/images/slide-bg.jpg'
import SlideB from '../assets/images/slide-bg-2.jpg'
import SlideC from '../assets/images/slide-bg-3.jpg'
import DownloadNav from './DownloadNav'

const DownloadNavStyles = styled(DownloadNav)`
  position: absolute;
  right: 6vw;
  bottom: 6vw;
  @media screen and (max-width: 1023px) {
    display: none;
  }
`

const ImageBannerStyles = styled.section`
  position: relative;
  width: 100%;
  display: block;
  height: 600px;
  @media screen and (min-width: 1024px) {
    height: 760px;
  }
  @media screen and (min-height: 700px) and (max-height: 1000px) {
    height: 95vh;
  }
  z-index: 1;
`

const Slides = styled.div`
  display: grid;
  opacity: 0;
  height: 100%;
  transition: 200ms opacity ease;
  will-change: opacity;
`

const Slide = styled.div`
  grid-area: 1 / 1 / 1 / 1;
  transition: opacity 800ms ease;
  will-change: opacity;
  display: grid;
  opacity: 0;
  &.is-active {
    opacity: 1;
    z-index: 1;
  }
`

const SlideBg = styled.div`
  background-position: right center;
  background-size: cover;
  width: 100%;
`

const SlideInner = styled.div`
  padding: 7.6rem 6vw 6vw;
  color: var(--white);
  height: 100%;
  width: 100%;
  position: relative;
  display: block;
  background-color: rgba(0, 0, 0, 0.4);
  @media screen and (min-width: 1024px) {
    padding-top: 12.6rem;
    .on-white & {
      padding-top: 7.6rem;
    }
  }
`
const SlideCaptionWrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
`
const SlideCaption = styled.div`
  width: 100%;
  h2,
  h3 {
    ${HeadingStyle}
    margin: 0 0 2rem;
    line-height: 110%;
    color: var(--white);
  }
  h2 {
    ${TextXSmall}
  }
  h3 {
    ${HeadingLarge}
  }
  p {
    margin-bottom: 5rem;
    padding-right: 2vw;
  }
  &[data-caption='0'] {
    h3 {
      max-width: 300px;
      @media screen and (min-width: 1024px) {
        max-width: 840px;
      }
    }
    p {
      max-width: 310px;
      @media screen and (min-width: 1024px) {
        max-width: 830px;
      }
    }
  }
  &[data-caption='1'] {
    h3 {
      max-width: 380px;
      @media screen and (min-width: 1024px) {
        max-width: 750px;
      }
    }
    p {
      max-width: 360px;
      @media screen and (min-width: 1024px) {
        max-width: 785px;
      }
    }
  }
  &[data-caption='2'] {
    h3 {
      max-width: 300px;
      @media screen and (min-width: 1024px) {
        max-width: 867px;
      }
      @media screen and (min-width: 1170px) {
        max-width: 920px;
      }
    }
    p {
      max-width: 360px;
      @media screen and (min-width: 1024px) {
        max-width: 630px;
      }
    }
  }
`
const SlideNav = styled.div`
  display: flex;
  justify-content: flex-start;
  position: absolute;
  background-color: transparent;
  padding: 0 0 calc(6vw - 2rem) 6vw;
  z-index: 2;
  left: 0;
  bottom: 0;
  button {
    display: block;
    border: none;
    background: transparent;
    width: 80px;
    padding: 2rem 0.5rem;
    cursor: pointer;
    span {
      display: block;
      box-shadow: rgb(0 0 0 / 20%) 0px 0px 20px 5px;
      background-color: rgba(255, 255, 255, 1);
      height: 3px;
      width: 100%;
      position: relative;
      &:after {
        content: '';
        position: absolute;
        top: 0px;
        left: 0px;
        width: 0;
        height: 100%;
        background-color: var(--green);
        z-index: 3;
      }
      &.is-before {
        &:after {
          width: 100%;
        }
      }
      &.is-active {
        &:after {
          animation-duration: 10s;
          animation-name: growLine;
        }
      }
    }
    @keyframes growLine {
      from {
        width: 0px;
      }
      to {
        width: 100%;
      }
    }
  }
`
const slides = [
  {
    image: SlideA,
    subHeading: 'Ai Platform',
    heading:
      'The Worlds <span>1st</span> talent analysis &amp; development platform',
    text: 'An Artificial Intelligence based platform that professional football clubs and many other footballing organisations are utilising to find, analyse, scout and develop amateur players all over the World.',
  },
  {
    image: SlideB,
    subHeading: 'Players',
    heading: 'TRIALS, ANALYSIS, FEEDBACK, COACHING, ADVICE & MORE',
    text: 'Professional clubs, FA\'s federations, universities and private academies are now providing amateur players opportunities due to our technology.',
    downloadLinks: true,
    button: 'How it works',
  },
  {
    image: SlideC,
    subHeading: 'Scouts',
    heading: 'Use technology to trial, analyse and develop amateur talent',
    text: 'Developed by professors, scientists & technologists, with the assistance of premier league clubs, to bring data into the amateur world.',
    button: 'What is it?',
  },
]
const ImageBanner: FC = () => {
  const slideRefs = useRef<HTMLDivElement[]>([])
  const slideButtonRefs = useRef<HTMLButtonElement[]>([])
  const slidesRef = useRef<HTMLDivElement>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout>()

  const setActiveSlide = (index: number) => {
    slideRefs.current.forEach(slideRef =>
      slideRef.classList.remove('is-active')
    )
    slideButtonRefs.current.forEach(slideButtonRef =>
      slideButtonRef.classList.remove('is-active')
    )
    slideButtonRefs.current.forEach(slideButtonRef =>
      slideButtonRef.classList.remove('is-before')
    )
    slideButtonRefs.current.forEach((slideButtonRef, i) => {
      if (i < index) slideButtonRefs.current[i].classList.add('is-before')
    })
    slideRefs.current[index].classList.add('is-active')
    slideButtonRefs.current[index].classList.add('is-active')
  }

  const handleClick = (index: number) => {
    if (intervalId) clearInterval(intervalId)
    setActiveSlide(index)
    setCurrentIndex(index)
  }

  useEffect(() => {
    const img = new Image()
    img.src = SlideA
    img.onload = () => {
      if (slidesRef.current) {
        slidesRef.current.style.opacity = '1'
      }
      console.log('first image loaded!')
    }
  }, [])

  useEffect(() => {
    const timeout = setTimeout(() => {
      const index: number =
        currentIndex < slides.length - 1 ? currentIndex + 1 : 0
      setActiveSlide(index)
      setCurrentIndex(index)
    }, 10000)
    setIntervalId(timeout)
    return () => clearTimeout(timeout)
  }, [currentIndex])

  return (
    <ImageBannerStyles>
      <Slides ref={slidesRef}>
        {slides.map((slide, index: number) => {
          return (
            <Slide
              data-slide={index}
              key={index}
              className={index === 0 ? 'is-active' : ''}
              ref={element => (slideRefs.current[index] = element)}
            >
              <SlideBg style={{ backgroundImage: `url(${slide.image})` }}>
                <SlideInner>
                  <SlideCaptionWrapper>
                    <SlideCaption data-caption={index}>
                      <h2>{slide.subHeading}</h2>
                      <h3
                        dangerouslySetInnerHTML={{ __html: slide.heading }}
                      ></h3>
                      <p className={index !== 2 ? 'padded' : ''}>
                        {slide.text}
                      </p>
                      {slide.button && (
                        <Button link="/get-started">{slide.button}</Button>
                      )}
                    </SlideCaption>
                  </SlideCaptionWrapper>
                  {slide.downloadLinks && <DownloadNavStyles />}
                </SlideInner>
              </SlideBg>
            </Slide>
          )
        })}
      </Slides>
      <SlideNav>
        {slides.map((_, index) => (
          <button
            type="button"
            aria-label={`Slide ${index + 1}`}
            onClick={() => handleClick(index)}
            key={`btn${index}`}
          >
            <span
              className={index === 0 ? 'is-active' : ''}
              ref={element => (slideButtonRefs.current[index] = element)}
            ></span>
          </button>
        ))}
      </SlideNav>
    </ImageBannerStyles>
  )
}

export default ImageBanner
