import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  :root {
    --green: #00CB8E;
    --green-hover: #00b67f;
    --black: #000;
    --white: #fff;
    --grey: #595959;
    --lightest-grey: #F5F7F9;
    --light-grey: #BFBFBF;
    --font-large: 4.8rem;
    --font-medium: 3.9rem;
    --font-medium-mob: 3.4rem;
    --font-small: 2rem;
    --font-xsmall: 1.6rem;
  }

  html {
    font-size: 10px;
  }

  body {
    font-size: var(--font-xsmall);
    line-height: 2.4rem;
    @media screen and (min-width: 1100px) {
      font-size: var(--font-small);
      line-height: 2.8rem;
    }
  }

  #content {
    position: relative;
    z-index: 2;
  }
  ul {
    list-style: none;
    margin: 0;
  }
  li {
    margin: 0;
  }
  img {
    display: block;
    margin: 0;
  }
`

export default GlobalStyles
