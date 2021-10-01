import { Link } from 'gatsby'
import React, { FC, useRef, useEffect, useState } from 'react'
import styled from 'styled-components'
import Button from './Button'
import SlideA from '../assets/images/slide-bg.jpg'
import SlideB from '../assets/images/slide-bg-2.jpg'
import SlideC from '../assets/images/slide-bg-3.jpg'
import DownloadNav from './DownloadNav'
import { callbackify } from 'util'

const DownloadNavStyles = styled(DownloadNav)`
  justify-content: flex-end;
  align-self: flex-end;
`

const ImageBannerStyles = styled.section`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 95vh;
  z-index: 1;
`

const Slides = styled.div`
  display: grid;
  opacity: 1;
  height: 100%;
`

const Slide = styled.div`
  grid-area: 1 / 1 / 1 / 1;
  transition: opacity 800ms ease;
  display: grid;
  opacity: 0;
  &.is-active {
    opacity: 1;
    z-index: 1;
  }
`

const SlideBg = styled.div`
  background-position: center center;
  background-size: cover;
  width: 100%;
`

const SlideInner = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 6rem 8rem;
  flex-direction: row;
  color: var(--white);
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  justify-content: space-between;
`

const SlideCaption = styled.div`
  max-width: 800px;
  width: 100%;
  h2,
  h3 {
    margin: 0 0 2rem;
    line-height: 110%;
    color: var(--white);
  }
  h2 {
    font-size: 1.6rem;
  }
  h3 {
    font-size: var(--font-large);
  }
  p {
    margin-bottom: 5rem;
    padding-right: 1rem;
    
  }
`
const SlideNav = styled.div`
  display: flex;
  justify-content: flex-start;
  position: absolute;
  background-color: transparent;
  padding: 0 0 4rem 8rem;
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
    heading: 'The Worlds 1st talent analysis & development platform',
    text: `An Artificial Intelligence based platform that professional
    football clubs and many other footballing organisations are
    utilising to find, analyse, and develop amateur players all
    over the world.`,
  },
  {
    image: SlideB,
    subHeading: 'Players',
    heading: 'Analyse your potential and get scouted with an app',
    text: `An Artificial Intelligence based platform that professional
    football clubs, and many other types of footballing
    organisations are utilising to find, trial and develop players
    like you.`,
    button: 'How it works',
  },
  {
    image: SlideC,
    subHeading: 'Scouts',
    heading: 'Use technology to trial, analyse and develop talent',
    text: `A fully automated platform that manages your recruitment
  department and automates and supports your Scouts day.`,
    button: 'What is it?',
  },
]
const ImageBanner: FC = () => {
  const slideRefs = useRef(new Array())
  const slideButtonRefs = useRef(new Array())
  const [currentIndex, setCurrentIndex] = useState(0)
  const [ intervalId, setIntervalId ] = useState();
  //let timer: ReturnType<typeof setTimeout>;
 

  const setActiveSlide = (index:number) => {
    console.log('set slide index=', index)

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
   
    // timer = setTimeout(() => {
    //   clearTimeout(timer)
    //   setActiveSlide(nextIndex)
    // }, 10000)
  }

  //const [ startInterval, clearTimer ] = useInterval(setActiveSlide, 10000);
  
 

  const handleClick = (index:number) => {
    console.log(index);
    //clearTimer();
    clearInterval(intervalId);
   setCurrentIndex(index);

   }

  useEffect(() => {
    const timeout = setTimeout(() => {
      const index:number = currentIndex < slides.length - 1 ? currentIndex + 1 : 0
      setActiveSlide(index)
      setCurrentIndex(index)
    }, 10000);
    setIntervalId(timeout);
    return () => clearTimeout(timeout);
  }, [currentIndex])

  return (
    <ImageBannerStyles>
      <Slides>
        {slides.map((slide, index:number) => {
          
          return (
          <Slide
            key={index}
            className={index === 0 ? `is-active` : ``}
            ref={element => (slideRefs.current[index] = element)}
          >
            <SlideBg style={{ backgroundImage: `url(${slide.image})` }}>
              <SlideInner>
                <SlideCaption>
                  <h2>{slide.subHeading}</h2>
                  <h3>{slide.heading}</h3>
                  <p className={index !== 2 ? `padded` : ``}>{slide.text}</p>
                  {slide.button && <Button to="">{slide.button}</Button>}
                </SlideCaption>
              </SlideInner>
            </SlideBg>
          </Slide>
        )})}
      </Slides>
      <SlideNav>
        {slides.map((slide, index) => (
          <button
            type="button"
            aria-label={`Slide ${index + 1}`}
            onClick={() => handleClick(index)}
            key={`btn${index}`}
          >
            <span
              className={index === 0 ? `is-active` : ``}
              ref={element => (slideButtonRefs.current[index] = element)}
            ></span>
          </button>
        ))}
      </SlideNav>
    </ImageBannerStyles>
  )
       
}

// export const useInterval = (callback:any, delay:number) => {
//  // let timeoutId: ReturnType<typeof setTimeout> | null = null;
//   const [ intervalId, setIntervalId ] = useState();
//   const savedCallback = useRef();

//   useEffect(() => {
//     savedCallback.current = callback;
//   }, [callback])

//   useEffect(() => {
//     let id = setInterval(() => {
//       if(savedCallback?.current) {
//         savedCallback.current();
//       }
//     })
//     setIntervalId(id);
//   }, [delay])
//  const clearTimer = () => {
//    clearInterval(intervalId);
//  }



//   return [startInterval, clearTimer]
// }

export default ImageBanner
