import React, { FC, useEffect, useRef, useState } from 'react'
import styled, { StyledComponent } from 'styled-components'

const StatsStyles = styled.section`
  display: flex;
  position: relative;
  justify-content: center;
  padding: 12rem 8rem 8rem;
  z-index: 2;
  background-color: var(--white);
  dl {
    display: grid;
    grid-template-columns: 0.25fr 0.25fr 0.25fr 0.25fr;
    justify-content: center;
    text-align: center;
    width: 100%;
    max-width: 1400px;
    margin: 0;
    & > div {
      div {
        position: relative;
        padding: 0 6rem;
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
    color: var(--black);
    font-size: var(--font-medium);
    margin-bottom: 2rem;
    font-family: brandon_grotesquebold;
    font-weight: 400;
  }
  dd {
    margin: 0;
  }
`

interface CounterProps {
  text: string;
  total: number;
  postfix?: string;
  increment?:number;
  active: boolean;
  time: number;
}

const Counter = ({ text, total, postfix = '', increment = 1, active, time }: CounterProps): JSX.Element => {
  const [ isActive, setIsActive] = useState<boolean>(false);
  if(!isActive && active) setIsActive(active);
  const [count, setCount] = useState<number>(0)
  const isDecimal:boolean = !Number.isInteger(increment);
  const steps:number = total / increment;
  const delay:number = time / steps;

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
      <dt>{isDecimal && count > 0 ? count.toFixed(1) : count}{postfix}</dt>
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
            <Counter text={`Months live testing`} total={7} active={inViewport} time={1400} /> 
          </div>
        </div>
        <div>
          <div>
          <Counter text={`Data points analysed`} total={1.5} increment={.1} postfix={`M+`} active={inViewport} time={1400} /> 
          </div>
        </div>
        <div>
          <div>
          <Counter text={`Players analysed in-app`} total={19} postfix={`K`} active={inViewport} time={1400} /> 
          </div>
        </div>
        <div>
          <div>
          <Counter text={`Trailed & signed for pro clubs and selected for national squads`} total={45}  active={inViewport} time={1400} /> 
          </div>
        </div>
      </dl>
    </StatsStyles>
  )
}

export default Stats
