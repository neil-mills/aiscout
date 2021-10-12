import React, {
  FC,
  useState,
  useEffect,
  useRef,
  MouseEvent,
  useContext,
} from 'react'
import styled from 'styled-components'
import { HeadingStyle, HeadingMedium } from '../styles/Typography'
import PlayersSuccessImg from '../assets/images/ben-greenwood.jpg'
import PlayersSuccessImg2 from '../assets/images/reef-peries.jpg'
import PlayersSuccessImg3 from '../assets/images/ben-greenwood-2.jpg'
import PlayersSuccessImg4 from '../assets/images/bevan-cross.jpg'
import Play from '../assets/svg/play.svg'
import SiteContext from '../context/SiteContext'

const PlayersSuccessSection = styled.section`
  padding: 8vw 0 8vw 6vw;
  background-color: var(--lightest-grey);
  z-index: 2;
  position: relative;
  h3,
  p {
    padding-right: 6vw;
  }
  p {
    margin-bottom: 0;
  }
  h3 {
    ${HeadingStyle}
    ${HeadingMedium}
    margin-bottom: 1rem;
  }
  article {
    background-color: var(--white);
    width: 380px;
    display: inline-block;
    margin-right: 2rem;
    scroll-snap-align: start;
    &:last-child {
      margin-right: 6vw;
    }
    &.video {
      cursor: pointer;
    }
  }
  figure {
    display: grid;
    background: red;
    width: 100%;
    height: auto;
    position: relative;
    align-items: center;
    margin: 0;
    img {
      grid-area: 1 / 1 / 1 / 1;
      object-fit: cover;
      width: 100%;
      height: auto;
    }
    svg {
      grid-area: 1 / 1 / 1 / 1;
      z-index: 2;
      justify-self: center;
    }
  }
`
const Label = styled.div`
  display: block;
  padding: 3rem;
  p {
    margin-bottom: 0.5rem;
    line-height: 1;
    font-size: var(--font-xsmall);
    &:nth-child(2) {
      ${HeadingStyle}
      font-size: var(--font-small);
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

const PlayersSuccess: FC = (): JSX.Element => {
  const { setSiteContext } = useContext(SiteContext)

  const handleShowVideo = (isVideo: boolean): void => {
    if (setSiteContext && isVideo) {
      setSiteContext({ showLightbox: true, noScroll: true })
    }
  }

  const articles = [
    { image: PlayersSuccessImg, club: 'Chelsea FC', name: 'Ben Greenwood' },
    {
      image: PlayersSuccessImg2,
      club: 'Mens National Team Sri Lanka',
      name: 'Reef Peries',
      video: 'http://',
    },
    {
      image: PlayersSuccessImg3,
      club: 'AFC Bournemouth',
      name: 'Ben Greenwood',
    },
    {
      image: PlayersSuccessImg4,
      club: 'Burnley FC u18 & u23',
      name: 'Bevan Cross',
      video: 'http://',
    },
    { image: PlayersSuccessImg, club: 'Chelsea FC', name: 'Ben Greenwood' },
    {
      image: PlayersSuccessImg2,
      club: 'Mens National Team Sri Lanka',
      name: 'Reef Peries',
    },
    {
      image: PlayersSuccessImg3,
      club: 'AFC Bournemouth',
      name: 'Ben Greenwood',
    },
    {
      image: PlayersSuccessImg4,
      club: 'Burnley FC u18 & u23',
      name: 'Bevan Cross',
    },
  ]

  const [articleWidth, setArticleWidth] = useState(0)

  const [isDown, setIsDown] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)

  const articleRefs = useRef([])
  const trackRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLElement>(null)

  const handleResize = () => {
    handleArticleWidth()
  }

  const handleArticleWidth = () => {
    let visibleArticles = 1
    if (window.innerWidth > 600) {
      visibleArticles = 2
    }
    if (window.innerWidth > 1023) {
      visibleArticles = 3
    }
    const margins = visibleArticles - 1
    if (sectionRef.current) {
      const sectionWidth: number = sectionRef?.current?.clientWidth
      const articleMargin: number = parseFloat(
        getComputedStyle(articleRefs.current[0]).getPropertyValue(
          'margin-right'
        )
      )
      const padding: number = sectionRef?.current
        ? parseFloat(
            getComputedStyle(sectionRef.current).getPropertyValue(
              'padding-left'
            )
          )
        : 0
      const articleArea: number = sectionWidth - padding * 2
      setArticleWidth((articleArea - articleMargin * margins) / visibleArticles)
    }
  }

  const handleOnMouseDown = (e: MouseEvent<HTMLDivElement>): void => {
    if (trackRef.current) {
      setIsDown(true)
      setStartX(e.pageX - trackRef.current.offsetLeft)
      setScrollLeft(trackRef.current.scrollLeft)
      trackRef.current.classList.add('active')
    }
  }

  const handleOnMouseLeave = (): void => {
    setIsDown(false)
    if (trackRef.current) {
      trackRef.current.classList.remove('active')
    }
  }

  const handleOnMouseUp = (): void => {
    setIsDown(false)
    if (trackRef.current) {
      trackRef.current.classList.remove('active')
    }
  }

  const handleOnMouseMove = (e: MouseEvent<HTMLDivElement>): void => {
    if (!isDown) return
    e.preventDefault()
    if (trackRef.current) {
      const x: number = e.pageX - trackRef.current?.offsetLeft
      const walk: number = (x - startX) * 3
      trackRef.current.scrollLeft = scrollLeft - walk
    }
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <>
      <PlayersSuccessSection ref={sectionRef}>
        <h3>Players Success</h3>
        <p>
          Players that trialed or signed for Professional Clubs and selected for
          National Squads
        </p>
        <Track
          ref={trackRef}
          onMouseDown={handleOnMouseDown}
          onMouseLeave={handleOnMouseLeave}
          onMouseUp={handleOnMouseUp}
          onMouseMove={handleOnMouseMove}
        >
          {articles.map((item, index) => {
            return (
              <article
                style={{ width: `${articleWidth}px` }}
                key={index}
                ref={element => (articleRefs.current[index] = element)}
                className={item.video ? 'video' : ''}
                onClick={() => handleShowVideo(item.video)}
              >
                <figure>
                  {item.video && <Play />}
                  <img src={item.image} />
                </figure>
                <Label>
                  <p>{item.club}</p>
                  <p>{item.name}</p>
                </Label>
              </article>
            )
          })}
        </Track>
      </PlayersSuccessSection>
    </>
  )
}

export default PlayersSuccess
