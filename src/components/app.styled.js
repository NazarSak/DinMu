import styled from 'styled-components';

export const FirstSection = styled.section`
  background: var(--violet, #edebfc);
  padding: 40px 0 80px;
`;

export const SecondSection = styled.section``;

export const GeneralContainer = styled.div`
  display: flex;
  @media screen and (max-width: 1199px) {
    flex-direction: column-reverse;
  }
`;

export const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 520px;
  border-radius: 93px 0 0 0;
  background-color: white;
  @media screen and (max-width: 1200px) {
    background: transparent;
    width: 653px;
  }
`;

export const HomeContent = styled.div`
  display: flex;
  width: 372px;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  h2 {
    color: var(--blue, #09035d);
    font-family: 'SeoulHangang', sans-serif;
    font-size: 42px;

    font-weight: 400;
    line-height: 44px;
  }
  span {
    color: var(--dark-violet, #7871de);
  }
  p {
    color: var(--dark-violet, #7871de);
    font-family: 'Post No Bills Colombo', sans-serif;
    font-size: 18px;
    font-weight: 400;
  }
  button {
    width: 282px;
    height: 70px;
    color: var(--wight, #fff);
    text-align: center;
    font-family: 'Post No Bills Colombo', sans-serif;
    font-size: 16px;
    font-weight: 400;

    padding: 12px 30px 10px 30px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 4px;
    background: var(--blue, #09035d);
    box-shadow: 4px 4px 20px 0px rgba(9, 3, 93, 0.1);
    transition: all 0.7s ease;
    &:hover {
      background: var(--dark-violet, #7871de);
    }
  }
  @media screen and (max-width: 1199px) {
    width: 100%;
    margin-top: 25px;
  }
`;

export const ImgDog = styled.img`
  width: 698px;
  height: 500px;
  @media screen and (max-width: 1199px) {
    display: none;
  }
`;

export const ImgTabletDog = styled.img`
  @media screen and (min-width: 1200px) {
    display: none;
  }
  width: 728px;
  height: 421px;
`;

// second Section
export const InfoContainer = styled.div`
  width: 802px;
  height: 142px;
  margin-top: 90px;
  @media screen and (max-width: 1199px) {
    width: 728px;
    height: 142px;
  }
`;

export const InfoList = styled.ul`
  display: flex;
  gap: 20px;
  li {
    display: flex;
    width: 178px;
    height: 142px;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
  }
  p {
    color: var(--black, #0f0f10);
    text-align: center;
    font-family: 'Post No Bills Colombo', sans-serif;
    font-size: 18px;
  }
  h2 {
    color: var(--blue, #09035d);
    text-align: center;
    font-family: 'SeoulHangang', sans-serif;
    font-size: 32px;
    font-weight: 400;
  }
  @media screen and (max-width: 1199px) {
    li {
      width: 167px;
      height: 142px;
    }
  }
`;

export const ReasonContainer = styled.div`
  width: 1218px;
  margin-top: 80px;

  h2 {
    color: var(--blue, #09035d);
    font-family: 'SeoulHangang', sans-serif;
    font-size: 36px;
    margin-bottom: 40px;
    font-weight: 400;
    line-height: 100.023%;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
  }
  @media screen and (max-width: 1199px) {
    width: 728px;
    height: 420px;
    ul {
      gap: 20px;
    }
  }
`;

export const ReasonListLi = styled.li`
  background: var(--wight, #fff);
  box-shadow: 4px 4px 20px 0px rgba(120, 113, 222, 0.1),
    -4px -4px 20px 0px rgba(120, 113, 222, 0.1);

  :hover {
    box-shadow: 4px 4px 20px 0px rgba(120, 113, 222, 0.2),
      -4px -4px 20px 0px rgba(120, 113, 222, 0.2);
  }
`;

export const ReasonInfo = styled.div`
  display: flex;
  width: 282px;
  height: 112px;
  justify-content: center;
  align-items: center;
  gap: 20px;
  border-radius: 4px;
  background: var(--wight, #fff);
  transition: all 0.7s ease;
  p {
    font-family: 'Post No Bills Colombo', sans-serif;
    pointer-events: none;
  }
  img {
    pointer-events: none;
  }
  @media screen and (max-width: 1199px) {
    width: 119px;
    height: 122px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
  }
`;

export const ImgSvg = styled.svg`
  transition: all 0.7s ease;
  /* Your default styles here */

  &:hover {
    path {
      fill: black;
    }
  }
`;

// third section

export const ThirdSection = styled.section`
  background-color: var(--dark-violet, #7871de);
  padding: 60px 0 45px;
  margin: 80px 0;
  @media screen and (max-width: 1199px) {
    padding: 80px 0;
  }
`;

export const ContainerWrapper = styled.div``;

export const TitleThird = styled.h2`
  color: var(--wight, #fff);
  font-family: 'SeoulHangang', sans-serif;
  font-size: 36px;
  font-weight: 400;
  line-height: 100.023%;
  margin-left: -105px;
  @media screen and (max-width: 1199px) {
    margin-left: 0;
  }
`;

export const ExperienceContainer = styled.div`
  width: 1010px;
  height: 207px;
  @media screen and (max-width: 1199px) {
    width: 728px;
    height: 289px;
  }
`;

export const ExperienceList = styled.ul`
  display: flex;
  gap: 50px;
  margin-top: 50px;
  @media screen and (max-width: 1199px) {
    gap: 20px;
    margin-top: 40px;
  }
`;

export const FirstExperienceCon = styled.li`
  width: 544px;
  height: 183px;
  h3 {
    color: var(--green, #9fdb3d);
    font-family: 'SeoulHangang', sans-serif;
    font-size: 24px;
    font-weight: 400;
    margin-bottom: 12px;
  }
  p {
    line-height: 27px;
    color: var(--wight, #fff);
    font-family: 'SeoulHangang', sans-serif;
    font-size: 18px;
    font-weight: 400;
  }
  @media screen and (max-width: 1199px) {
    width: 354px;
    height: 289px;
  }
`;

export const SecondExperienceCon = styled.li`
  width: 386px;
  height: 129px;

  h3 {
    color: var(--green, #9fdb3d);
    font-family: 'SeoulHangang', sans-serif;
    font-size: 24px;
    font-weight: 400;
    margin-bottom: 12px;
  }
  p {
    line-height: 27px;
    color: var(--wight, #fff);
    font-family: 'SeoulHangang', sans-serif;
    font-size: 18px;
    font-weight: 400;
  }

  @media screen and (max-width: 1199px) {
    width: 354px;
    height: 127px;
  }
`;

// Fourth Section

export const FourthSection = styled.section`
  width: 1218px;
  @media screen and (max-width: 1199px) {
    width: 728px;
    padding: 0 20px;
    div {
      width: 100%;
    }
  }
`;

export const TitleAnswer = styled.h2`
  color: var(--blue, #09035d);
  font-family: 'SeoulHangang', sans-serif;
  font-size: 36px;
  font-style: normal;
  font-weight: 400;
  line-height: 100.023%;
`;

export const AnswerList = styled.ul`
  display: flex;
  gap: 30px;
  margin-top: 70px;
  h3 {
    color: var(--blue, #09035d);
    font-family: 'SeoulHangang', sans-serif;
    font-size: 24px;
    font-weight: 400;
    margin-bottom: 20px;
  }
  p {
    color: var(--black, #0f0f10);
    font-family: 'Post No Bills Colombo', sans-serif;
    font-size: 18px;
    font-weight: 400;
  }
  span {
    color: var(--dark-violet, #7871de);
    font-family: 'SeoulHangang', sans-serif;
    font-size: 16px;
  }
  @media screen and (max-width: 1199px) {
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
  }
`;

export const AnswerListReviewed = styled.ul`
  display: flex;
  gap: 30px;
  margin-top: 70px;
  h3 {
    color: var(--blue, #09035d);
    font-family: 'SeoulHangang', sans-serif;
    font-size: 24px;
    font-weight: 400;
    margin-bottom: 20px;
  }
  p {
    color: var(--black, #0f0f10);
    font-family: 'Post No Bills Colombo', sans-serif;
    font-size: 18px;
    font-weight: 400;
  }
  span {
    color: var(--dark-violet, #7871de);
    font-family: 'SeoulHangang', sans-serif;
    font-size: 16px;
  }
  @media screen and (max-width: 1199px) {
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    row-gap: 60px;
  }
`;

export const ShortLi = styled.li`
  display: flex;
  width: 326px;
  height: 422px;
  padding: 30px 30px 0 30px;
  flex-direction: column;
  border-radius: 4px;
  background: var(--wight, #fff);
  box-shadow: 4px 4px 20px 0px rgba(120, 113, 222, 0.1),
    -4px -4px 20px 0px rgba(120, 113, 222, 0.1);
  h4 {
    color: var(--blue, #09035d);
    font-family: 'Post No Bills Colombo', sans-serif;
    font-size: 16px;

    font-weight: 600;
  }
  @media screen and (max-width: 1199px) {
    width: 294px;
    padding: 30px;
    height: fit-content;
  }
`;

export const SpecailShortLi = styled.li`
  display: flex;
  width: 326px;
  height: 422px;
  padding: 30px 30px 0 30px;
  flex-direction: column;
  border-radius: 4px;
  background: var(--wight, #fff);
  box-shadow: 4px 4px 20px 0px rgba(120, 113, 222, 0.1),
    -4px -4px 20px 0px rgba(120, 113, 222, 0.1);
  h4 {
    color: var(--blue, #09035d);
    font-family: 'Post No Bills Colombo', sans-serif;
    font-size: 16px;

    font-weight: 600;
  }
  @media screen and (max-width: 1199px) {
    width: 294px;
    padding: 30px;
    height: fit-content;
    margin-top: -179px;
    margin-right: auto;
  }
`;

export const LongerLi = styled.li`
  display: flex;
  width: 326px;
  height: 479px;
  padding: 30px;
  padding-bottom: 0;
  margin-top: -30px;
  flex-direction: column;
  align-items: center;
  background: var(--wight, #fff);
  box-shadow: 4px 4px 20px 0px rgba(120, 113, 222, 0.1),
    -4px -4px 20px 0px rgba(120, 113, 222, 0.1);

  @media screen and (max-width: 1199px) {
    display: flex;
    width: 294px;
    height: fit-content;
    padding: 30px;
    margin-top: -30px;
  }
`;

export const SpecialSpan = styled.span`
  margin-right: auto;
  margin-bottom: 10px;
  font-family: 'Post No Bills Colombo', sans-serif;
  font-weight: 600;
`;

export const SpecialP = styled.p`
  margin-top: 10px;
  color: var(--black, #0f0f10);
  font-family: 'Post No Bills Colombo', sans-serif;
  font-size: 18px;
  font-weight: 400;
`;

// fifth section

export const Fifthsection = styled.section`
  margin: 80px 0;
`;

export const FifthsectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 100%;
`;

export const TitleContainer = styled.div`
  width: 1245px;
  margin-bottom: 35px;
  h2 {
    color: var(--blue, #09035d);
    font-family: 'SeoulHangang', sans-serif;
    font-size: 36px;
    font-weight: 400;
  }
  @media screen and (max-width: 1199px) {
    width: 748px;
  }
`;

export const ListTrainingFirst = styled.ul`
  display: flex;
  column-gap: 40px;
  li {
    width: 282px;
    :hover {
      color: var(--dark-violet, #7871de);
    }
  }
  h2 {
    color: var(--green, #9fdb3d);
    font-family: 'SeoulHangang', sans-serif;
    font-size: 60px;
    font-weight: 600;
    transition: all 0.7s ease;
    cursor: default;
  }
  p {
    color: var(--black, #0f0f10);
    font-family: 'Post No Bills Colombo', sans-serif;
    font-size: 16px;
    font-weight: 600;
    pointer-events: none;
  }
  @media screen and (max-width: 1199px) {
    column-gap: 20px;
    h2 {
      margin-bottom: 25px;
    }
    li {
      width: 167px;
    }
    p {
      font-weight: 400;
    }
  }
`;

export const LineImg = styled.img`
  @media screen and (max-width: 1199px) {
    display: none;
  }
`;
export const LineImgTablet = styled.img`
  @media screen and (min-width: 1200px) {
    display: none;
  }
`;

export const ListTrainingSecond = styled.ul`
  display: flex;
  column-gap: 40px;
  li {
    width: 282px;
    :hover {
      color: var(--dark-violet, #7871de);
    }
  }
  h2 {
    color: var(--green, #9fdb3d);
    font-family: 'SeoulHangang', sans-serif;
    font-size: 60px;
    font-weight: 600;
    transition: all 0.7s ease;
  }
  p {
    color: var(--black, #0f0f10);
    font-family: 'Post No Bills Colombo', sans-serif;
    font-size: 16px;
    font-weight: 600;
    pointer-events: none;
  }
  @media screen and (max-width: 1199px) {
    column-gap: 20px;
    h2 {
      margin-bottom: 25px;
    }
    li {
      width: 167px;
    }
    p {
      font-weight: 400;
    }
  }
`;

export const SpecialLi = styled.li`
  margin-top: 60px;
`;

// sixth section

export const SixthSection = styled.section`
  margin: 80px 0;
  @media screen and (max-width: 1199px) {
    width: 728px;
    padding: 0 20px;
    div {
      width: 100%;
    }
  }
`;

// seven section

export const SevenSection = styled.section`
  margin-bottom: 80px;
`;

export const TitleCommandsCon = styled.div`
  width: 1176px;
  h2 {
    color: var(--blue, #09035d);
    font-family: 'SeoulHangang', sans-serif;
    font-size: 36px;
    font-style: normal;
    font-weight: 400;
    line-height: 100.023%;
    margin-bottom: 60px;
    margin-right: auto;
  }
  @media screen and (max-width: 1199px) {
    display: none;
  }
`;

export const TitleCommandsConTablet = styled.div`
  width: 768px;
  h2 {
    color: var(--blue, #09035d);
    font-family: 'SeoulHangang', sans-serif;
    font-size: 36px;
    font-style: normal;
    font-weight: 400;
    line-height: 100.023%;
    margin-bottom: 60px;
    margin-right: auto;
    margin-left: 20px;
  }
  @media screen and (min-width: 1200px) {
    display: none;
  }
`;

export const ImgLineBall = styled.img`
  width: 772px;
  /* @media screen and (max-width: 1199px) {
    display: none;
  } */
`;

export const ImgLineBallTablet = styled.img`
  width: 561px;
  margin-left: auto;
  display: flex;
  @media screen and (min-width: 1200px) {
    display: none;
  }
`;

export const ImgLineBallTabletTwo = styled.img`
  width: 405px;
  margin-top: 90px;
  @media screen and (min-width: 1200px) {
    display: none;
  }
`;

export const ContainerLine = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  h3 {
    color: var(--black, #0f0f10);
    font-family: 'Post No Bills Colombo', sans-serif;
    font-size: 16px;
    font-weight: 600;
  }
  span {
    color: var(--black, #0f0f10);
    font-family: SeoulHangang, sans-serif;
    font-size: 40px;
    font-weight: 400;
    margin-left: 15px;
  }
  h4 {
    color: var(--black, #0f0f10);
    font-family: 'Post No Bills Colombo', sans-serif;
    font-size: 16px;
    font-weight: 600;
    margin-left: auto;
  }
  @media screen and (max-width: 1199px) {
    span {
      margin-left: 15px;
      margin: auto;
      margin-bottom: -13px;
    }
  }
`;

export const ListComands = styled.ul`
  display: flex;
  gap: 21px;
  margin-left: 42px;
  p {
    color: var(--blue, #09035d);
    font-family: 'Post No Bills Colombo', sans-serif;
    font-size: 24px;
    font-weight: 400;
  }
  li {
    width: 282px;
    display: flex;
    align-items: flex-end;
  }

  @media screen and (max-width: 1199px) {
    gap: 4px;
    margin-left: 212px;
  }
`;

export const ListComandsSecond = styled.ul`
  display: flex;
  gap: 127px;
  margin-left: 147px;
  align-items: flex-start;
  p {
    color: var(--blue, #09035d);
    font-family: 'Post No Bills Colombo', sans-serif;
    font-size: 24px;
    font-weight: 400;
  }
  li {
    width: 175px;
    display: flex;
    align-items: flex-end;
  }
  span {
    font-size: 16px;
  }
  @media screen and (max-width: 1199px) {
    gap: 10px;
    margin-left: 20px;
    margin-top: 20px;
  }
`;

// eighth section

export const EighthSection = styled.section`
  padding: 80px 0;
`;

export const ListQuestion = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 19px;
  width: 802px;
`;

export const Question = styled.span`
  cursor: pointer;
  font-weight: bold;
  color: var(--blue, #09035d);
  font-family: 'Post No Bills Colombo', sans-serif;
  font-size: 24px;
  font-weight: 400;
  width: 740px;
  display: flex;
  justify-content: space-between;
`;

export const Answer = styled.div`
  display: ${props => (props.isopen ? 'block' : 'none')};
  color: var(--black, #0f0f10);
  font-family: 'Post No Bills Colombo', sans-serif;
  font-size: 18px;
  font-weight: 400;
  margin-top: 10px;
`;

export const ArrowClosed = styled.img`
  transform: rotate(${props => (props.isopen ? '0deg' : '180deg')});
  transition: transform 0.3s ease;
`;
