import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  width: 1218px;
  align-items: center;
  margin-bottom: 40px;
  @media screen and (max-width: 1199px) {
    width: 728px;
    justify-content: space-between;
  }
  @media screen and (max-width: 767px) {
    width: 320px;
  }
`;

export const Nav = styled.nav`
  display: flex;
  margin-left: 94px;
  gap: 40px;
`;

export const BurgerMenuImg = styled.img`
  @media screen and (min-width: 1200px) {
    display: none;
  }
`;

export const List = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 24px;
  @media screen and (max-width: 1199px) {
    display: none;
  }
`;

export const Anchor = styled.a`
  color: var(--blue, #09035d);
  text-align: right;
  font-family: 'Post No Bills Colombo', Arial, sans-serif;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
  @media screen and (max-width: 1199px) {
    color: #fff;
  }
`;

export const ListMedia = styled.ul`
  display: flex;
  align-items: center;
  gap: 4px;
  @media screen and (max-width: 1199px) {
    display: none;
  }
`;

export const Img = styled.img`
  cursor: pointer;
  &:hover {
    fill: black;
  }
`;
