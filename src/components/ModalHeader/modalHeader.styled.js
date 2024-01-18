import styled from 'styled-components';

// export const List = styled.ul`
//   display: flex;
//   justify-content: flex-end;
//   align-items: center;
//   gap: 24px;
//   @media screen and (max-width: 1199px) {
//     display: none;
//   }
// `;

// export const Anchor = styled.a`
//   color: var(--blue, #09035d);
//   text-align: right;
//   font-family: 'Post No Bills Colombo', Arial, sans-serif;
//   font-size: 15px;
//   font-style: normal;
//   font-weight: 400;
//   line-height: normal;
//   cursor: pointer;
// `;

export const Overlay = styled.div`
  @media (max-width: 1199px) {
    position: fixed;
    display: block;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(120, 113, 222, 0.8);
    backdrop-filter: blur(10px);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.7s ease-in-out;
    transform: ${props =>
      props.isopen ? 'translateX(0%)' : 'translateX(100%)'};
    z-index: 1;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const ListMedia = styled.ul`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

export const CloseBurg = styled.img`
  position: absolute;
  top: 42px;
  right: 20px;
`;
