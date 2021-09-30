/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { FC, useRef, useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
import 'normalize.css'
import GlobalStyles from '../styles/GlobalStyles'
import Typography from '../styles/Typography'

import './layout.css'


export const Layout: FC = ({ children }): JSX.Element => {

  const headerRef = useRef<HTMLHeadingElement>(null);
  const root = document.querySelector('#___gatsby');
  let content:HTMLElement | null = null;

  interface OptionsInterface {
    root: Element | null;
    rootMargin?: string | undefined;
    threshold?: number;
  }
 

  // const onIntersect = (entries: any) => {
  //   entries.forEach((entry:any) => {
  //     console.log(entry);
  //     console.log('intersected!');
  //   })
  // }

  const handleOnScroll = () => {
    if(headerRef.current && content) {
      const offset:number = headerRef.current?.offsetHeight;
      if(offset >= content.getBoundingClientRect().top) {
        headerRef.current.classList.add('on-white');
      } else {
        headerRef.current.classList.remove('on-white');
      }
    }
  }

  useEffect(() => {
    content = document.querySelector('#content')
    // const options:OptionsInterface = {
    //   root,
    //   rootMargin: headerRef.current ? `${headerRef.current.offsetHeight}px` : '',
    //   threshold: 0
    // }
    window.addEventListener('scroll', handleOnScroll);
    window.addEventListener('resize', handleOnScroll)
    handleOnScroll()
   // console.log(content.getBoundingClientRect().top);
    return () => {
      window.removeEventListener('scroll', handleOnScroll);
      window.removeEventListener('resize', handleOnScroll);
    }
   // console.log('header=',headerRef?.current?.offsetHeight);
   // console.log('content=', content);
   // const observer = new IntersectionObserver(onIntersect, options);
   // observer.observe(content);
  },[]);

  return (
    <>
      <GlobalStyles />
      <Typography />
      <Header ref={headerRef} />
      <main id="main">{children}</main>
      <Footer />
    </>
  )
}
