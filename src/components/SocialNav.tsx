import React, { FC } from 'react'
import Facebook from '../assets/images/facebook.svg';
import Instagram from '../assets/images/instagram.svg';
import Linkedin from '../assets/images/linkedin.svg';
import Twitter from '../assets/images/twitter-square.svg';
import styled from 'styled-components';

const SocialNavStyles = styled.nav`
  ul {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 1rem;
  }
`;


const SocialNav:FC = ():JSX.Element => {
  return (
    <SocialNavStyles>
      <ul>
        <li><a href="" target="_blank"><Instagram /></a></li>
        <li><a href="" target="_blank"><Facebook /></a></li>
        <li><a href="" target="_blank"><Linkedin /></a></li>
        <li><a href="" target="_blank"><Twitter /></a></li>
      </ul>
    </SocialNavStyles>
  )
}

export default SocialNav;
