import { createGlobalStyle, css } from 'styled-components'

import Brandon from '../assets/fonts/brandon_bld-webfont.woff'
import Roboto from '../assets/fonts/robotocondensed-regular-webfont.woff'

export const HeadingStyle = css`
  font-family: brandon_grotesquebold;
  font-weight: 400;
  text-transform: uppercase;
  @media screen and (min-width: 1024px) {
    letter-spacing: 0.1rem;
  }
  color: var(--black);
  span {
    text-transform: lowercase;
  }
`
export const HeadingLarge = css`
  font-size: var(--font-large-mob);
  //font-size: clamp(var(--font-large-mob), 4vw, var(--font-large));
  @media screen and (min-width: 1024px) {
    font-size: var(--font-large);
    font-size: clamp(var(--font-large-mob), 4vw, var(--font-large));
  }
`

export const HeadingMedium = css`
  font-size: var(--font-medium-mob);
  font-size: clamp(var(--font-medium-mob), 3.24vw, var(--font-medium));
  @media screen and (min-width: 1024px) {
    font-size: var(--font-medium);
    font-size: clamp(var(--font-medium-mob), 3.24vw, var(--font-medium));
  }
`
export const TextSmall = css`
  font-size: var(--font-xsmall);
  @media screen and (min-width: 1024px) {
    font-size: var(--font-small);
  }
`
export const TextXSmall = css`
  font-size: var(--font-xsmall-mob);
  @media screen and (min-width: 1024px) {
    font-size: var(--font-xsmall);
  }
`

const Typography = createGlobalStyle`
  @font-face {
    font-family: roboto_condensedregular;
    src: url(${Roboto});
  }
  @font-face {
    font-family: brandon_grotesquebold;
    src: url(${Brandon});
  }
  body {
    font-family: roboto_condensedregular;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    color: var(--grey);
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    font-family: brandon_grotesquebold;
    font-weight:400;
    text-transform: uppercase;
    letter-spacing: .02rem;
    color: var(--black);
    span {
      text-transform: lowercase;
    }
  }
`

export default Typography
