import React from 'react';
import Logo from '../../images/logo.png';
import Viber from '../../images/SVG/viber.svg';
import Facebbok from '../../images/SVG/facebook.svg';
import Vk from '../../images/SVG/vk.svg';
import Telegram from '../../images/SVG/telegram.svg';

import { Anchor, List, Container, Nav,ListMedia } from './header.styled';
const Header = () => {
  return (
    <Container>
      <img width="112px" height="32px" src={Logo} alt="ad" />
      <Nav>
        <List>
          <li>
            <Anchor href="/">Причини дресирування</Anchor>
          </li>
          <li>
            <Anchor href="/">З кінологом краще</Anchor>
          </li>
          <li>
            <Anchor href="/">Чому я</Anchor>
          </li>
          <li>
            <Anchor href="/">Етапи дресирування</Anchor>
          </li>
          <li>
            <Anchor href="/">Відгуки</Anchor>
          </li>
          <li>
            <Anchor href="/">Чому навчаю</Anchor>
          </li>
          <li>
            <Anchor href="/">часті питання</Anchor>
          </li>
        </List>

        <ListMedia>
          <li>
            <img src={Viber} alt="" />
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
