import React from 'react';

import Logo from '../../images/logo.png';
import Viber from '../../images/SVG/viber.svg';
import Facebbok from '../../images/SVG/facebook.svg';
import Vk from '../../images/SVG/vk.svg';
import Telegram from '../../images/SVG/telegram.svg';
import CloseBurger from '../../images/SVG/CloseBurger.svg';
import { Anchor } from 'components/header/header.styled';
import {
  Overlay,
  Content,
  CloseBurg,
  List,
  ListMedia,
} from './modalHeader.styled';

const ModalHeader = ({ isOpen, hadnleClose, scrollToSection }) => {
  return (
    <Overlay isopen={isOpen ? 1 : 0}>
      <Content>
        <CloseBurg onClick={hadnleClose} src={CloseBurger} alt="" />
        <List>
          <li>
            <Anchor onClick={() => scrollToSection('reasons')}>
              Причини дресирування
            </Anchor>
          </li>
          <li>
            <Anchor onClick={() => scrollToSection('withKynolog')}>
              З кінологом краще
            </Anchor>
          </li>
          <li>
            <Anchor onClick={() => scrollToSection('whyI')}>Чому я</Anchor>
          </li>
          <li>
            <Anchor onClick={() => scrollToSection('etaps')}>
              Етапи дресирування
            </Anchor>
          </li>
          <li>
            <Anchor onClick={() => scrollToSection('reviews')}>Відгуки</Anchor>
          </li>
          <li>
            <Anchor onClick={() => scrollToSection('teaching')}>
              Чому навчаю
            </Anchor>
          </li>
          <li>
            <Anchor onClick={() => scrollToSection('questions')}>
              часті питання
            </Anchor>
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
      </Content>
    </Overlay>
  );
};

export default ModalHeader;
