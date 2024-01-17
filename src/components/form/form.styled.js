import styled from 'styled-components';
import Checker from '../../images/SVG/checkMarker.svg';
import DisableChecker from '../../images/SVG/disableCheckMak.svg';

export const Section = styled.section`
  background-color: var(--dark-violet, #7871de);
  padding: 80px 0;
`;

export const FormCon = styled.form`
  display: flex;
  gap: 135px;
  align-items: center;
  @media screen and (max-width: 1199px) {
  gap: 30px;
  }
`;

export const ConainerInputs = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;

export const Input = styled.input`
  display: flex;
  width: 362px;
  height: 60px;
  padding-left: 20px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  border: 1px solid var(--blue, #09035d);
  background: var(--wight, #fff);
  &:focus {
    border: 2px solid var(--green, #9fdb3d);
  }
`;

export const Button = styled.button`
  display: flex;
  width: 282px;
  height: 70px;
  padding: 12px 30px 10px 30px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 4px;
  background: var(--blue, #09035d);
  box-shadow: 4px 4px 20px 0px rgba(9, 3, 93, 0.1);
  color: var(--wight, #fff);
  text-align: center;
  font-family: 'Post No Bills Colombo', sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  transition: all 0.7s ease;
  &:hover {
    background: var(--dark-violet, #7871de);
  }
`;

export const Paragraph = styled.p`
  color: var(--wight, #fff);
  font-family: 'Post No Bills Colombo', sans-serif;
  font-size: 16px;
  font-weight: 400;
  span {
    color: var(--green, #9fdb3d);
  }
`;

export const AgreeContainer = styled.div`
  display: flex;
  align-items: center;
  width: 282px;
  gap: 10px;
`;

export const AgreeContainerClick = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const CheckBox = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  width: 30px;
  height: 30px;
  margin-left: 0px;
`;

export const StyledCheckbox = styled.div`
  display: inline-block;
  width: 35px;
  height: 30px;
  transition: all 0.3s;
  background-image: url(${props => (props.checked ? Checker : DisableChecker)});
  background-size: cover;
  &:focus {
    box-shadow: 0 0 5px 0 #4caf50;
  }
`;
