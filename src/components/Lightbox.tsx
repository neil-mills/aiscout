import React, { FC, useContext, useEffect, useRef } from 'react'
import Close from '../assets/svg/close.svg'
import styled from 'styled-components'
import SiteContext from '../context/SiteContext'
import Media from './Media'
import VideoImg from '../assets/images/video-placeholder.jpg'

const LightboxStyles = styled.div`
  background-color: var(--black);
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 12;
  text-align: center;
  position: fixed;
  top: 0;
  width: 100%;
  height: 100vh;
  left: 0;
  opacity: 1;
  overflow: hidden;
  transition: opacity 300ms ease;
  will-change: opacity;
  overflow-x: hidden;
  overflow-y: scroll;
  overscroll-behavior: contain;
`
const LightboxContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4vw 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  position: relative;
`
const LightboxContent = styled.div`
  background-color: transparent;
  width: auto;
  height: auto;
  opacity: 0;
  padding-top: 10vw;
  transition: all 400ms ease-in;
  @media screen and (min-width: 768px) {
    max-width: 85%;
  }
`
const CloseBtn = styled.button`
  width: 40px;
  height: 40px;
  padding: 1rem;
  background-color: transparent;
  border: none;
  outline: none;
  display: block;
  position: absolute;
  z-index: 2;
  top: 2vw;
  right: 2vw;
  cursor: pointer;
  svg {
    width: 100%;
    height: auto;
  }
`
const Lightbox: FC = ({ children }): JSX.Element | null => {
  const { showLightbox, setSiteContext } = useContext(SiteContext)
  const lightboxRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  const handleClose = (): void => {
    if (setSiteContext) {
      setSiteContext({ noScroll: false, showLightbox: false })
    }
  }

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.opacity = '1'
      contentRef.current.style.paddingTop = '0'
    }
  }, [showLightbox])

  if (!showLightbox) return null
  return (
    <LightboxStyles role="dialog" tabIndex={0} ref={lightboxRef}>
      <CloseBtn onClick={handleClose}>
        <Close />
      </CloseBtn>
      <LightboxContainer>
        <LightboxContent ref={contentRef}>
          <Media>
            <img src={VideoImg} />
          </Media>
          {children}
        </LightboxContent>
      </LightboxContainer>
    </LightboxStyles>
  )
}

export default Lightbox
