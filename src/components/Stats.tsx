import React, { FC } from 'react'
import styled from 'styled-components'

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

const Stats: FC = () => {
  return (
    <StatsStyles>
      <dl>
        <div>
          <div>
            <dt>7</dt>
            <dd>Months live testing</dd>
          </div>
        </div>
        <div>
          <div>
            <dt>1.5M+</dt>
            <dd>Data points analysed</dd>
          </div>
        </div>
        <div>
          <div>
            <dt>19K</dt>
            <dd>Players analysed in-app</dd>
          </div>
        </div>
        <div>
          <div>
            <dt>45</dt>
            <dd>
              Trailed &amp; signed for pro clubs and selected for national
              squads
            </dd>
          </div>
        </div>
      </dl>
    </StatsStyles>
  )
}

export default Stats
