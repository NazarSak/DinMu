import React from 'react';
import Logo from '../../images/logo.png';
import Viber from '../../images/SVG/viber.svg';
import Facebbok from '../../images/SVG/facebook.svg';
import Vk from '../../images/SVG/vk.svg';
import Telegram from '../../images/SVG/telegram.svg';
import { Section, ListMedia, Text,SectionContainer } from './footer.styled';

const Footer = () => {
  return (
    <Section>
      <SectionContainer>
        <img width="105px" height="30px" src={Logo} alt="ad" />
        <Text>© 2024 All rights reserved.</Text>
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
      </SectionContainer>
    </Section>
  );
};

export default Footer;
