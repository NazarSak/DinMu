import styled from 'styled-components';

export const Section = styled.section`
  background: var(--violet, #edebfc);
`;

export const SectionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 450px;
  padding: 30px 0 20px 0;
  @media screen and (max-width: 1199px) {
    gap: 165px;
  }
  @media screen and (max-width: 767px) {
    gap: 80px;
  }
`;

export const ListMedia = styled.ul`
  display: flex;
  align-items: center;
  gap: 4px;
  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export const ListMediaMobile = styled.ul`
  display: flex;
  flex-direction: column-reverse;
  gap: 10px;
  align-items: flex-end;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const TextMobile = styled.h2`
  color: var(--blue, #09035d);
  font-family: 'Post No Bills Colombo', Arial, sans-serif;
  font-size: 12px;
  font-weight: 400;
  flex-direction: inherit;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const List = styled.ul`
  display: flex;
  gap: 2px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const Text = styled.p`
  color: var(--blue, #09035d);
  font-family: 'Post No Bills Colombo', Arial, sans-serif;
  font-size: 14px;
  font-weight: 400;
  flex-direction: inherit;
  @media screen and (max-width: 767px) {
    display: none;
  }
`;
