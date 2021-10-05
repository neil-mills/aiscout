import { createGlobalStyle } from 'styled-components'

import Brandon from '../assets/fonts/brandon_bld-webfont.woff'
import Roboto from '../assets/fonts/robotocondensed-regular-webfont.woff'

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
