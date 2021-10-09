import React, { FC, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { HeadingStyle, HeadingLarge } from '../styles/Typography'

const StatsStyles = styled.section`
  display: flex;
  position: relative;
  justify-content: center;
  padding: 6vw 8vw;
  @media screen and (min-width: 1024px) {
    padding: 6vw 9vw;
  }
  @media screen and (min-width: 1180px) {
    padding: 6vw 6vw;
  }
  z-index: 2;
  background-color: var(--white);
  dl {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, auto);
    width: 210px;
    @media screen and (min-width: 1024px) {
      grid-template-columns: 0.25fr 0.25fr 0.25fr 0.25fr;
      grid-template-rows: auto;
      width: 100%;
    }
    justify-content: center;
    text-align: center;

    margin: 0;
    & > div {
      div {
        position: relative;
        padding: 4rem 0;
        &:after {
          content: '';
          position: absolute;
          top: auto;
          right: 0;
          bottom: 0;
          width: 100%;
          height: 1px;
          display: block;
          background-color: var(--light-grey);
        }
        @media screen and (min-width: 1024px) {
          padding: 0 4vw;
          &:after {
            content: '';
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            width: 1px;
            height: 100%;
            display: block;
            background-color: var(--light-grey);
          }
        }
        @media screen and (min-width: 1180px) {
          padding: 0 3vw;
        }
      }

      &:last-child {
        div {
          &:after {
            display: none;
          }
        }
      }
    }
  }
  dt {
    ${HeadingStyle}
    font-size: var(--font-medium);
    margin-bottom: 2rem;
    line-height: 1;
    @media screen and (min-width: 1024px) {
      font-size: var(--font-large);
    }
  }
  dd {
    margin: 0;
    padding: 0 2rem;
    @media screen and (min-width: 1024px) {
      padding: 0;
    }
  }
`

interface CounterProps {
  text: string
  total: number
  postfix?: string
  increment?: number
  active: boolean
  time: number
}

const Counter = ({
  text,
  total,
  postfix = '',
  increment = 1,
  active,
  time,
}: CounterProps): JSX.Element => {
  const [isActive, setIsActive] = useState<boolean>(false)
  if (!isActive && active) setIsActive(active)
  const [count, setCount] = useState<number>(0)
  const isDecimal = !Number.isInteger(increment)
  const steps: number = total / increment
  const delay: number = time / steps

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (count < total && isActive) {
        setCount(prevCount => prevCount + increment)
      }
    }, delay)
    return () => {
      clearTimeout(timeoutId)
    }
  }, [count, active])

  return (
    <>
      <dt>
        {isDecimal && count > 0 ? count.toFixed(1) : count}
        {postfix}
      </dt>
      <dd>{text}</dd>
    </>
  )
}

const Stats: FC = () => {
  const SectionRef = useRef<HTMLElement>(null)
  const [inViewport, setInViewport] = useState<boolean>(false)

  const callback = (
    entries: IntersectionObserverEntry[],
    observer: IntersectionObserver
  ): void => {
    entries.forEach(entry => {
      setInViewport(entry.isIntersecting)
      if (entry.isIntersecting) {
        console.log('stats on screen!')
      } else {
        console.log('stats not on screen')
      }
    })
  }

  useEffect(() => {
    const options = {
      root: null, // relative to document viewport
      rootMargin: '0px', // margin around root. Values are similar to css property. Unitless values not allowed
      threshold: 1, // visible amount of item shown in relation to root
    }
    const observer: IntersectionObserver = new IntersectionObserver(
      callback,
      options
    )
    if (SectionRef.current) {
      observer.observe(SectionRef.current)
    }
  }, [])

  return (
    <StatsStyles ref={SectionRef} id="stats">
      <dl>
        <div>
          <div>
            <Counter
              text={'Months live testing'}
              total={7}
              active={inViewport}
              time={1050}
            />
          </div>
        </div>
        <div>
          <div>
            <Counter
              text={'Data points analysed'}
              total={1.5}
              increment={0.1}
              postfix={'M+'}
              active={inViewport}
              time={1050}
            />
          </div>
        </div>
        <div>
          <div>
            <Counter
              text={'Players analysed in-app'}
              total={19}
              postfix={'K'}
              active={inViewport}
              time={1050}
            />
          </div>
        </div>
        <div>
          <div>
            <Counter
              text={
                'Trailed & signed for pro clubs and selected for national squads'
              }
              total={45}
              active={inViewport}
              time={1050}
            />
          </div>
        </div>
      </dl>
    </StatsStyles>
  )
}

export default Stats
