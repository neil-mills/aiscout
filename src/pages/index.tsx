import React, { FC } from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import ImageBanner from '../components/ImageBanner'
import FeatureBlock from '../components/FeatureBlock'
import FeatureBlockTwo from '../components/FeatureBlockTwo'
import Stats from '../components/Stats'
import ImageBannerParallax from '../components/ImageBannerParallax'
import News from '../components/News'
import Organisations from '../components/Organisations'
import ParallaxImg1 from '../assets/images/paralax-img-1.jpg'
import ParallaxImg2 from '../assets/images/paralax-img-2.jpg'
import Instagram from '../components/Instagram'
import HexBg from '../assets/images/hex-bg.png'

const FeatureBlockWrapper = styled.div`
  background-color: var(--lightest-grey);
  background-position: top right;
  background-size: 90%;
  width: 100%;
  background-image: url(${HexBg});
  padding: 6vw 0;
  background-repeat: no-repeat;
`

const HomePage = ({ data }) => {
  return (
    <>
      <ImageBanner />
      <div id="content">
        <FeatureBlockWrapper>
          <FeatureBlock />
          <FeatureBlockTwo />
        </FeatureBlockWrapper>
        <Stats />
        <ImageBannerParallax
          img={ParallaxImg1}
          heading={'An equal opportunity for all amateur players.'}
          text={'All you need is a mobile phone.'}
          icon={true}
        />
        <News />
        <Organisations />
        <ImageBannerParallax img={ParallaxImg2} logo={true} />
        <Instagram data={data} />
      </div>
    </>
  )
}

export const query = graphql`
  query {
    feed: allInstagramImage {
      nodes {
        id
        media_type
        media_url
        thumbnail_url
        permalink
      }
    }
  }
`

export default HomePage
