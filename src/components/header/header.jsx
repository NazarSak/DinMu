import React from 'react';
import Logo from '../../images/logo.png';
import Viber from '../../images/SVG/viber.svg';
import Facebbok from '../../images/SVG/facebook.svg';
import Vk from '../../images/SVG/vk.svg';
import Telegram from '../../images/SVG/telegram.svg';

import { Anchor, List, Container, Nav,ListMedia,Img } from './header.styled';
const Header = () => {

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Container>
      <img width="112px" height="32px" src={Logo} alt="ad" />
      <Nav>
        <List> 
          <li>
            <Anchor onClick={() => scrollToSection('reasons')}>Причини дресирування</Anchor>
          </li>
          <li>
            <Anchor onClick={() => scrollToSection('withKynolog')}>З кінологом краще</Anchor>
          </li>
          <li>
            <Anchor onClick={() => scrollToSection('whyI')}>Чому я</Anchor>
          </li>
          <li>
            <Anchor onClick={() => scrollToSection('etaps')}>Етапи дресирування</Anchor>
          </li>
          <li>
            <Anchor onClick={() => scrollToSection('reviews')}>Відгуки</Anchor>
          </li>
          <li>
            <Anchor onClick={() => scrollToSection('teaching')}>Чому навчаю</Anchor>
          </li>
          <li>
            <Anchor onClick={() => scrollToSection('questions')}>часті питання</Anchor>
          </li>
        </List>

        <ListMedia>
          <li>
            <Img src={Viber} alt="" />
          </li>
          <li>
            <img src={Facebbok} alt="" />
          </li>
          <li>
            <img src={Vk} alt="" />
          </li>
          <li>
            <img src={Telegram} alt="" />
          </li>
        </ListMedia>
      </Nav>
    </Container>
  );
};

export default Header;
