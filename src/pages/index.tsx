import React, { FC } from 'react'
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

const HomePage: FC = () => {
  return (
    <>
      <ImageBanner />
      <div id="content">
      <FeatureBlock />
      <FeatureBlockTwo />
      <Stats />
      <ImageBannerParallax
        img={ParallaxImg1}
        heading={'An equal opportunity for players all over the world.'}
        text={'All you need is a mobile phone.'}
        icon={true}
      />
      <News />
      <Organisations />
      <ImageBannerParallax
        img={ParallaxImg2}
        logo={true}
      />
      <Instagram />
      </div>
    </>
  )
}

export default HomePage
