/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { FC, useRef, useLayoutEffect, useContext } from 'react'
import Header from './Header'
import Footer from './Footer'
import 'normalize.css'
import GlobalStyles from '../styles/GlobalStyles'
import Typography from '../styles/Typography'
import Lightbox from './Lightbox'
import './layout.css'
import SiteContext from '../context/SiteContext'
import Helmet from 'react-helmet'

export const Layout: FC = ({ children }): JSX.Element => {
  const headerRef = useRef<HTMLHeadingElement>(null)
  const { lightbox, noScroll } = useContext(SiteContext)
  let content: HTMLElement | null = null

  const handleOnScroll = () => {
    if (headerRef.current && content) {
      const offset: number = headerRef.current?.offsetHeight - 20
      if (offset >= content.getBoundingClientRect().top) {
        headerRef.current.classList.add('on-white')
      } else {
        headerRef.current.classList.remove('on-white')
      }
    }
  }

  useLayoutEffect(() => {
    content = document.querySelector(
      'div[data-slide].is-active div[data-caption]'
    )
    window.addEventListener('scroll', handleOnScroll)
    window.addEventListener('resize', handleOnScroll)
    handleOnScroll()
    return () => {
      window.removeEventListener('scroll', handleOnScroll)
      window.removeEventListener('resize', handleOnScroll)
    }
  }, [])

  return (
    <>
      <GlobalStyles />
      <Typography />
      <Helmet bodyAttributes={{ 'data-noscroll': noScroll }} />
      <Lightbox />
      <Header ref={headerRef} />
      <main id="main">{children}</main>
      <Footer />
    </>
  )
}
