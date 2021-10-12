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
    --font-large-mob: 3rem;
    --font-medium-mob: 2.4rem;
    --font-medium: 3.9rem;
    --font-small: 2rem;
    --font-xsmall: 1.6rem;
    --font-xsmall-mob: 1.2rem;
  }
  html,
  body {
    overflow-x:hidden;
    
  }
  html {
    font-size: 10px;
    height: 100%;
  }

  body {
    font-size: var(--font-xsmall);
    line-height: 2.4rem;
    @media screen and (min-width: 1024px) {
      font-size: var(--font-small);
      line-height: 2.8rem;
    }
    &[data-noscroll='true'] {
      overflow-y: hidden;
      position: fixed;
      //height: 100%;
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
