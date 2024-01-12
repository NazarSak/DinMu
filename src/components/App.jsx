import React from 'react';
import Header from './header/header';
import HoneImg from '../images/Home.png';
import ArrayReason from './arrayReason';
import {
  FirstSection,
  SecondSection,
  GeneralContainer,
  HomeContainer,
  HomeContent,
  ImgDog,
  // second section
  InfoContainer,
  InfoList,
  ReasonContainer,
  ReasonInfo,
  ReasonListLi,
  // third section
  ThirdSection,
  ContainerWrapper,
  TitleThird,
  ExperienceContainer,
  ExperienceList,
  FirstExperienceCon,
  SecondExperienceCon,
  // fourth Section
  FourthSection,
  TitleAnswer,
  AnswerList,
  ShortLi,
  LongerLi,
  SpecialSpan,
  SpecialP,
} from './app.styled';

const App = () => {
  const stopPropagation = event => {
    event.stopPropagation();
  };

  return (
    <main>
      <FirstSection>
        <Header />
        <GeneralContainer>
          <HomeContainer>
            <HomeContent>
              <h2>
                <span>1 година</span> занять з улюбленцем, під керівництвом
                кінолога
              </h2>
              <p>Збережуть нервові клітини та порядок у будинку</p>
              <button>Стати вчителем четвероного друга</button>
            </HomeContent>
          </HomeContainer>
          <ImgDog src={HoneImg} alt="" />
        </GeneralContainer>
      </FirstSection>

      <SecondSection>
        <InfoContainer>
          <InfoList>
            <li>
              <h2>100 людей</h2> <p>Навчилися дресирувати своїх вихованців</p>
            </li>
            <li>
              <h2>200 собак</h2> <p>Почали розуміти команди</p>
            </li>
            <li>
              <h2>2600 годин</h2> <p>Спільних занять та спілкування</p>
            </li>
            <li>
              <h2>10 років</h2> <p>Присвятила собакам</p>
            </li>
          </InfoList>
        </InfoContainer>

        <ReasonContainer>
          <h2>Причини дресирування собак</h2>
          <ul>
            {ArrayReason.map(({ content, imgSrc, imgAlt }, index) => (
              <ReasonListLi key={index}>
                <ReasonInfo onFocus={stopPropagation}>
                  <img src={imgSrc} alt={imgAlt} />
                  <p>{content}</p>
                </ReasonInfo>
              </ReasonListLi>
            ))}
          </ul>
        </ReasonContainer>
      </SecondSection>

      <ThirdSection>
        <ContainerWrapper>
          <TitleThird>З кінологом краще</TitleThird>
          <ExperienceContainer>
            <ExperienceList>
              <FirstExperienceCon>
                <h3>Досвід роботи</h3>
                <p>
                  Завдяки багаторічному досвіду кінологи легко можуть помітити
                  недостатньо чіткі жести, суперечливі команди або несвоєчасне
                  підкріплення. Так ви ви не опинитеся в тупику, не знаючи, як
                  вирішити ту чи іншу ситуацію. Професіонал підкаже простий
                  вихід із неї.
                </p>
              </FirstExperienceCon>
              <SecondExperienceCon>
                <h3>Економія часу</h3>
                <p>
                  На пошуки потрібної інформації не йдуть тижня. 1 годину занять
                  і команда лежати вже вивчена.
                </p>
              </SecondExperienceCon>
            </ExperienceList>
          </ExperienceContainer>
        </ContainerWrapper>
      </ThirdSection>

      <FourthSection>
        <div>
          <TitleAnswer>Чому я</TitleAnswer>
          <AnswerList>
            <ShortLi>
              <h3>Навчаю всіх</h3>
              <SpecialSpan>Навчаю власників, та их вихованців</SpecialSpan>
              <p>
                Вік власників не важливий. Цуценят привчати починаю з 4 місяців
              </p>
            </ShortLi>
            <LongerLi>
              <h3>До кожного собаки свій підхід</h3>
              <SpecialSpan>Дізнаюся скільки вихованцю </SpecialSpan>
              <SpecialSpan>Були ли досвід у дресируванні</SpecialSpan>
              <p>
                Якщо був, то я обов'язково повинна знати як навчали.
                Так я розумію його умовні рефлекси, і які команди вихованець
                вже знає, які варто навчити або навіть заново пройти
                і зафіксувати результат.
              </p>
              <SpecialP>
                Якщо досвіду не було я складаю список команд з ваших побажань і
                причин.
              </SpecialP>
            </LongerLi>
            <ShortLi>
              <h3>Досвід роботи</h3>
              <p>
                <span>200</span> дресованих собак, які отримали <span>350</span>
                 нагород на різних змаганнях{' '}
                <SpecialP>
                  <span>100</span> людей навчилися правильно дресирувати і
                  спілкуватися зі своїми вихованцями
                </SpecialP>
                <SpecialP>
                  <span> 2600</span> годин спільних занять та зустрічей
                </SpecialP>
              </p>
            </ShortLi>
          </AnswerList>
        </div>
      </FourthSection>
    </main>
  );
};

export default App;
