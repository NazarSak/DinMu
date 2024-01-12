import styled from 'styled-components';

export const FirstSection = styled.section`
  background: var(--violet, #edebfc);
  padding: 40px 0 80px;
`;

export const SecondSection = styled.section``;

export const GeneralContainer = styled.div`
  display: flex;
`;

export const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 520px;
  border-radius: 93px 0 0 0;
  background-color: white;
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
  }
`;

export const ImgDog = styled.img`
  width: 698px;
  height: 500px;
`;
// second Section
export const InfoContainer = styled.div`
  width: 802px;
  height: 142px;
  margin-top: 90px;
`;

export const InfoList = styled.ul`
  display: flex;
  gap: 30px;
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
`;

export const ReasonListLi = styled.li`
  background: var(--wight, #fff);
  box-shadow: 4px 4px 20px 0px rgba(120, 113, 222, 0.1),
    -4px -4px 20px 0px rgba(120, 113, 222, 0.1);
  transition: all 3s ease;
  :hover {
    border-radius: 4px;
    background: var(--wight, #fff);
    box-shadow: 4px 4px 20px 0px rgba(120, 113, 222, 0.2),
      -4px -4px 20px 0px rgba(120, 113, 222, 0.2);
  }
`;

export const ReasonInfo = styled.div`
  display: flex;
  width: 282px;
  height: 112px;
  /* padding: 20px 20px 28px 20px; */
  justify-content: center;
  align-items: center;
  gap: 20px;
  border-radius: 4px;
  background: var(--wight, #fff);
  :hover {
    background: var(--wight, #fff);
  }
`;

// third section

export const ThirdSection = styled.section`
  background-color: var(--dark-violet, #7871de);
  padding: 60px 0 45px;
  margin: 80px 0;
`;

export const ContainerWrapper = styled.div``;

export const TitleThird = styled.h2`
  color: var(--wight, #fff);
  font-family: 'SeoulHangang', sans-serif;
  font-size: 36px;
  font-weight: 400;
  line-height: 100.023%;
  margin-left: -105px;
`;

export const ExperienceContainer = styled.div`
  width: 1010px;
  height: 207px;
`;

export const ExperienceList = styled.ul`
  display: flex;
  gap: 50px;
  margin-top: 50px;
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
`;

// Fourth Section

export const FourthSection = styled.section`
  width: 1218px;
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
`;

export const SpecialSpan = styled.span`
  margin-right: auto;
  margin-bottom: 10px;
  font-family: 'Post No Bills Colombo', sans-serif;
  font-weight: 600;
`;

export const SpecialP = styled.p`
  margin-top: 10px;
`;
