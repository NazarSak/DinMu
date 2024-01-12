import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  width: 1218px;
  align-items: center;
  margin-bottom: 40px;
`;

export const Nav = styled.nav`
  display: flex;
  margin-left: 94px;
  gap: 40px;
`;

export const List = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 24px;
`;

export const Anchor = styled.a`
  color: var(--blue, #09035d);
  text-align: right;
  font-family: 'Post No Bills Colombo', Arial, sans-serif;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const ListMedia = styled.ul`
  display: flex;
  align-items: center;
  gap: 4px;
`;
