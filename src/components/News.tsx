import React, { FC, useState, useEffect, useRef, MouseEvent } from 'react'
import styled, { StyledComponent } from 'styled-components'
import NewsImg from '../assets/images/ben-greenwood.jpg'
import NewsImg2 from '../assets/images/reef-peries.jpg'
import NewsImg3 from '../assets/images/ben-greenwood-2.jpg'
import NewsImg4 from '../assets/images/bevan-cross.jpg'

const NewsSection = styled.section`
  padding: 12rem 0 12rem 10rem;
  background-color: var(--lightest-grey);
  z-index: 2;
  position: relative;
  h3 {
    font-size: var(--font-medium);
    margin-bottom: 1rem;
  }
  article {
    background-color: var(--white);
    width: 380px;
    display: inline-block;
    margin-right: 2rem;
    scroll-snap-align: start;
    &:last-child {
      margin-right: 10rem;
    }
  }
  figure {
    display: grid;
    background: red;
    width: 100%;
    position: relative;
    margin: 0;
    img {
      grid-area: 1 / 1 / 1 / 1;
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }
`
const Label = styled.div`
  display: block;
  padding: 3rem;
  p {
    font-size: var(--font-xsmall);
    margin-bottom: 0.5rem;
    line-height: 1;
    &:nth-child(2) {
      color: var(--black);
      font-family: brandon_grotesquebold;
      font-weight: 400;
      font-size: var(--font-small);
      text-transform: uppercase;
      margin: 0;
    }
  }
`

const Track = styled.div`
  overflow-x: scroll;
  overflow-y: hidden;
  transition: all 0.2s;
  white-space: nowrap;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  will-change: transform;
  cursor: pointer;
  width: 100%;
  margin: 5rem 0 0;
  &.active {
    cursor: grabbing;
  }
  &::-webkit-scrollbar {
    display: none;
  }
  --ms-overflow-style: none;
  scrollbar-width: none;
`

const News = () => {

  const articles = [
    { image: NewsImg, club: 'Chelsea FC', name: 'Ben Greenwood' },
    { image: NewsImg2, club: 'Mens National Team Sri Lanka',name: 'Reef Peries',},
    { image: NewsImg3, club: 'AFC Bournemouth', name: 'Ben Greenwood' },
    { image: NewsImg4, club: 'Burnley FC u18 & u23', name: 'Bevan Cross' },
    { image: NewsImg, club: 'Chelsea FC', name: 'Ben Greenwood' },
    { image: NewsImg2, club: 'Mens National Team Sri Lanka',name: 'Reef Peries',},
    { image: NewsImg3, club: 'AFC Bournemouth', name: 'Ben Greenwood' },
    { image: NewsImg4, club: 'Burnley FC u18 & u23', name: 'Bevan Cross' },
  ];

  const [ maskWidth, setMaskWidth ] = useState(0);
  const [ trackWidth, setTrackWidth ] = useState(0);

  const [ articleWidth, setArticleWidth] = useState(0);

  const [ isDown, setIsDown] = useState(false);
  const [ startX, setStartX ] = useState(0);
  const [ scrollLeft, setScrollLeft ] = useState(0);

  const articleRefs = useRef(new Array())
  const trackRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLElement>(null)
 
  const handleResize = () => {
  //   const width: number = getWidth();
  //   setMaskWidth(width);
  //   if(trackRef.current) {
  //     getTrackWidth();
  //   }
    handleArticleWidth();
  }

  // const getTrackWidth = () => {
  //   const articleWidth:number = articleRefs.current[0].clientWidth;
  //   const gap:number = trackRef?.current ? parseFloat(getComputedStyle(trackRef.current).getPropertyValue('grid-gap')) : 0;
  //   const trackWidth = (articles.length * articleWidth) + ((articles.length-1) * gap);
  //   setTrackWidth(trackWidth);
  // }

  // const getWidth = (): number => {
  //   const padding: number = sectionRef?.current
  //     ? parseFloat(
  //         getComputedStyle(sectionRef.current).getPropertyValue('padding-left')
  //       )
  //     : 0
  //   const width: number = sectionRef?.current
  //     ? sectionRef.current.clientWidth
  //     : 0
  //   return width - padding
  // }

  const handleArticleWidth = () => {

    if(sectionRef.current) {
      const sectionWidth:number = sectionRef?.current?.clientWidth;
      const articleMargin:number = parseFloat(getComputedStyle(articleRefs.current[0]).getPropertyValue('margin-right'));
      const padding: number = sectionRef?.current
        ? parseFloat(
            getComputedStyle(sectionRef.current).getPropertyValue('padding-left')
          )
        : 0
      const articleArea:number =sectionWidth - (padding*2);
      setArticleWidth((articleArea - (articleMargin *2)) / 3);
    }


  }

  const handleOnMouseDown = (e:MouseEvent<HTMLDivElement>):void => {
    if(trackRef.current) {
      setIsDown(true);
      setStartX(e.pageX - trackRef.current.offsetLeft);
      setScrollLeft(trackRef.current.scrollLeft);
      trackRef.current.classList.add('active');
    }
  }

  const handleOnMouseLeave = ():void => {
    setIsDown(false);
    if(trackRef.current){
      trackRef.current.classList.remove('active');
    }
  }

  const handleOnMouseUp = ():void => {
    setIsDown(false);
    if(trackRef.current){
      trackRef.current.classList.remove('active');
    }
  }

  const handleOnMouseMove = (e:MouseEvent<HTMLDivElement>): void => {
    if(!isDown) return;
    e.preventDefault();
    if(trackRef.current) {
      const x:number = e.pageX - trackRef.current?.offsetLeft;
      const walk:number = (x - startX) * 3;
      trackRef.current.scrollLeft = scrollLeft - walk;
    }
  }

  useEffect(() => {
   window.addEventListener('resize', handleResize);
   handleResize();
   return () => window.removeEventListener('resize', handleResize);
  }, [])

  return (
    <NewsSection ref={sectionRef}>
      <h3>Players Success</h3>
      <p>
        Players that trialed or signed for Professional Clubs and selected for
        National Squads
      </p>
     
        <Track ref={trackRef}
          onMouseDown={handleOnMouseDown}
          onMouseLeave={handleOnMouseLeave}
          onMouseUp={handleOnMouseUp}
          onMouseMove={handleOnMouseMove}
        >
          {articles.map((item, index) => (
            <article
              style={{width: `${articleWidth}px`}}
              key={index}
              ref={element => (articleRefs.current[index] = element)}
            >
              <figure>
                <img src={item.image} />
              </figure>
              <Label>
                <p>{item.club}</p>
                <p>{item.name}</p>
              </Label>
            </article>
          ))}
        </Track>
     
    </NewsSection>
  )
}

export default News
