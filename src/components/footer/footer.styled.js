import styled from 'styled-components';

export const Section = styled.section`
  background: var(--violet, #edebfc);
  /* height: 110px; */
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
`;

export const ListMedia = styled.ul`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const Text = styled.p`
  color: var(--blue, #09035d);
  font-family: 'Post No Bills Colombo', Arial, sans-serif;
  font-size: 14px;
  font-weight: 400;
  flex-direction: inherit;
`;
