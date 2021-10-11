import React, { FC } from 'react'
import { HeadingStyle, HeadingMedium } from '../styles/Typography'
import SecondaryNav from './SecondaryNav'
import SocialNav from './SocialNav'
import AffiliatesNav from './AffiliatesNav'
import styled from 'styled-components'
import FooterImg from '../assets/images/footer-image.jpg'
import DownloadNav from './DownloadNav'
import Icon from '../assets/svg/icon.svg'

const FooterStyles = styled.footer`
  position: relative;
  z-index: 2;
  background-color: var(--white);
`
const ImageBanner = styled.section`
  color: var(--white);
  background-position: center center;
  background-size: cover;
  width: 100%;
  @media screen and (min-width: 1024px) {
    height: 458px;
  }
  h3 {
    ${HeadingStyle}
    ${HeadingMedium}
    margin-bottom: 1rem;
    color: var(--white);
    max-width: 200px;
    @media screen and (min-width: 1024px) {
      max-width: 100%;
    }
  }
  p {
    margin-bottom: 4rem;
    max-width: 250px;
    @media screen and (min-width: 1024px) {
      max-width: 100%;
    }
  }
  & > div {
    padding: 10vw 6vw;
    display: grid;
    height: 100%;
    background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.5) 0%,
      rgba(0, 0, 0, 0) 100%
    );
    grid-gap: 1rem;
    grid-template-columns: 1fr 32px;
    align-items: top;
    @media screen and (min-width: 1024px) {
      padding: 0 6vw;
      grid-template-columns: 1fr 88px;
      align-items: center;
    }
    svg {
      width: 100%;
      height: auto;
    }
  }
`

const IconStyles = styled(Icon)`
  width: 88px;
  height: 88px;
`

const FooterBottomStyles = styled.section`
  display: grid;
  padding: 7vw 6vw;
  grid-template-rows: auto auto 24px;
  grid-gap: 3rem;
  @media screen and (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 24px;
    grid-gap: 3rem;
  }
  div:nth-child(2) {
    > div {
      display: grid;
      grid-template-rows: auto auto;
      p {
        order: 1;
        margin: ;
      }
      nav {
        order: 0;
      }
      @media screen and (min-width: 1024px) {
        p {
          order: 0;
        }
        nav {
          order: 1;
        }
      }
    }
  }
  @media screen and (min-width: 1024px) {
    div:nth-child(2) {
      display: grid;
      justify-content: right;
      div {
        max-width: 500px;
        text-align: right;
      }
    }
    div:nth-child(3) {
      grid-column: span 2;
    }
  }
`
const AffiliatesNavFooter = styled(AffiliatesNav)`
  padding-bottom: 2rem;
  border-bottom: 1px solid var(--light-grey);
  margin-bottom: 2rem;
  @media screen and (min-width: 1024px) {
    padding: 0;
    margin: 0;
    border: none;
  }
`
const Footer: FC = (): JSX.Element => {
  return (
    <FooterStyles>
      <ImageBanner style={{ backgroundImage: `url(${FooterImg})` }}>
        <div>
          <div>
            <h3>Will you be the next player found by data?</h3>
            <p>
              Download the AiSCOUT app to generate real, analysed and required
              data.
            </p>
            <DownloadNav />
          </div>
          <IconStyles />
        </div>
      </ImageBanner>
      <FooterBottomStyles>
        <div>
          <SecondaryNav />
        </div>
        <div>
          <div>
            <p>
              Developed with assistance from Chelsea FC, Burnley FC,
              Loughborough University London &amp; IBM
            </p>
            <AffiliatesNavFooter />
          </div>
        </div>
        <div>
          <SocialNav />
        </div>
      </FooterBottomStyles>
    </FooterStyles>
  )
}

export default Footer
