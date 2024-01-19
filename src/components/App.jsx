import React, { useState } from 'react';
import Header from './header/header';
import Footer from './footer/footer';
import Form from './form/Form';
import HoneImg from '../images/Home.png';
import HoneTabletImg from '../images/HomeTablet.png';
import HomeMoblie from '../images/HomeMoblie.png';

import ArrayReason from './helpers/arrayReason';
import Line from '../images/SVG/line.svg';
import LineTablet from '../images/SVG/LineTablet.svg';
import LeftLineBall from '../images/LeftLineBall.png';
import RightLineBall from '../images/RightLineBall.png';

import LineBall from '../images/lineBall.png';
import LineBallTablet from '../images/lineBallTablet.png';
import LineBallTabletTwo from '../images/lineBallTabletTwo.png';

import ArrowClose from '../images/SVG/arrowClose.svg';

import {
  FirstSection,
  SecondSection,
  GeneralContainer,
  HomeContainer,
  HomeContent,
  ImgDog,
  ImgTabletDog,
  ImgMobileDog,
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
  AnswerListReviewed,
  ShortLi,
  SpecailShortLi,
  LongerLi,
  SpecialSpan,
  SpecialP,
  // fifth section
  Fifthsection,
  FifthsectionContainer,
  ListTrainingFirst,
  LineImg,
  LineImgTablet,
  ListTrainingSecond,
  SpecialLi,
  TitleContainer,
  // sixth section
  SixthSection,
  // seven section
  SevenSection,
  TitleCommandsCon,
  TitleCommandsConTablet,
  ContainerLine,
  LeftLineBallImg,
  ImgLineBall,
  ImgLineBallTablet,
  ListComands,
  ListComandsSecond,
  ContainerWordsMobile,
  ContainerWordsMobileSecond,
  // eighth section
  EighthSection,
  Question,
  Answer,
  ArrowClosed,
  ListQuestion,
  ImgLineBallTabletTwo,
} from './app.styled';

const App = () => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);

  const handleToggle = index => {
    switch (index) {
      case 1:
        setIsOpen1(!isOpen1);
        break;
      case 2:
        setIsOpen2(!isOpen2);
        break;
      case 3:
        setIsOpen3(!isOpen3);
        break;
      case 4:
        setIsOpen4(!isOpen4);
        break;
      case 5:
        setIsOpen5(!isOpen5);
        break;
      default:
        break;
    }
  };

  const scrollToSection = sectionId => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
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
              <button onClick={() => scrollToSection('form')}>
                Стати вчителем четвероного друга
              </button>
            </HomeContent>
          </HomeContainer>
          <ImgDog src={HoneImg} alt="" />
          <ImgTabletDog src={HoneTabletImg} alt="" />
          <ImgMobileDog src={HomeMoblie} alt="HomeMoblie" />
        </GeneralContainer>
      </FirstSection>

      <SecondSection id="reasons">
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
                <ReasonInfo>
                  <img src={imgSrc} alt={imgAlt} />
                  <p>{content}</p>
                </ReasonInfo>
              </ReasonListLi>
            ))}
          </ul>
        </ReasonContainer>
      </SecondSection>

      <ThirdSection id="withKynolog">
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

      <FourthSection id="whyI">
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
            <SpecailShortLi>
              <h3>Досвід роботи</h3>
              <p>
                <span>200</span> дресованих собак, які отримали <span>350</span>
                 нагород на різних змаганнях{' '}
              </p>
              <SpecialP>
                <span>100</span> людей навчилися правильно дресирувати і
                спілкуватися зі своїми вихованцями
              </SpecialP>
              <SpecialP>
                <span> 2600</span> годин спільних занять та зустрічей
              </SpecialP>
            </SpecailShortLi>
          </AnswerList>
        </div>
      </FourthSection>

      <Fifthsection id="etaps">
        <FifthsectionContainer>
          <TitleContainer>
            <h2>Етапи дресирування</h2>
          </TitleContainer>
          <ListTrainingFirst>
            <li>
              <h2>01</h2>
              <p>Скликаний за телефоном або спілкування онлайн</p>
            </li>
            <SpecialLi>
              <h2>02</h2>
              <p>Розмовляємо про собаку</p>
            </SpecialLi>
            <li>
              <h2>03</h2>
              <p>Дізнаюсь причини звернення</p>
            </li>
            <SpecialLi>
              <h2>04</h2>
              <p>Дізнаюся зручний час занять</p>
            </SpecialLi>
          </ListTrainingFirst>
          <LineImg width="100%" src={Line} alt="Line" />
          <LineImgTablet width="100%" src={LineTablet} alt="Line" />

          <ListTrainingSecond>
            <li>
              <h2>05</h2>
              <p>Створюю графік занять</p>
            </li>
            <SpecialLi>
              <h2>06</h2>
              <p>Скидаю всю інформацію, з якою потрібно ознайомитись</p>
            </SpecialLi>
            <li>
              <h2>07</h2>
              <p>Знайомство із собакою.</p>
            </li>
            <SpecialLi>
              <h2>08</h2>
              <p>Навчання командам</p>
            </SpecialLi>
          </ListTrainingSecond>
        </FifthsectionContainer>
      </Fifthsection>

      <section id="form">
        <Form />
      </section>

      <SixthSection id="reviews">
        <div>
          <TitleAnswer>Відгуки</TitleAnswer>
          <AnswerListReviewed>
            <ShortLi>
              <p>
                Я хочу сказати велике спасибі вам! Ви були з нами в
                найскладніший момент і тільки завдяки вам ми змогли подолати всі
                труднощі.
              </p>
              <h4>Леонід Петрович</h4>
            </ShortLi>
            <ShortLi>
              <p>
                Добридень. Я хочу поділитися щирими емоціями після занять з моїм
                улюбленим кінологом. Вона вчить розуміти, і отримувати
                задоволення від життя з чотириногим другом.
              </p>
              <p>
                Дякую вам ще раз! Сподіваюся, що далі більше і ми з вами ще
                багато разом радітимемо успіхам Марі, яких би не було без вас!
              </p>
              <p>Вона той фахівець, якого я шукала кілька місяців.</p>
              <h4>Інна Муравйова</h4>
            </ShortLi>
            <SpecailShortLi>
              <p>Спасибо вам огромное</p>
              <h4>Олександр М.</h4>
            </SpecailShortLi>
          </AnswerListReviewed>
        </div>
      </SixthSection>

      <SevenSection id="teaching">
        <TitleCommandsCon>
          <h2>Чому навчаю</h2>

          <ListComands>
            <li>
              <p>«Перестань тягнути повідець»</p>
            </li>
            <li>
              <p>«Поруч»</p>
            </li>
            <li>
              <p>"ФАС"</p>
            </li>
          </ListComands>
          <ContainerLine>
            <h3>КОМАНДИ</h3>

            <ImgLineBall src={LineBall} alt="LineBall" />

            <span>4500₴</span>
          </ContainerLine>
          <ListComandsSecond>
            <li>
              <p>"До мене"</p>
            </li>
            <li>
              <p>
                «Тріо<span>: сидіти, стояти, лежати»</span>
              </p>
            </li>
            <li>
              <p>"ФУ"</p>
            </li>
          </ListComandsSecond>
        </TitleCommandsCon>
        <TitleCommandsConTablet>
          <h2>Чому навчаю</h2>

          <ListComands>
            <li>
              <p>«Перестань тягнути повідець»</p>
              <ContainerWordsMobile>
                <h3>КОМАНДИ</h3>
              </ContainerWordsMobile>
                <LeftLineBallImg src={LeftLineBall} alt="LeftLineBallImg" />
            </li>
            <li>
              <p>«Поруч»</p>
              <LeftLineBallImg src={LeftLineBall} alt="LeftLineBallImg" />
            </li>
            <li>
              <p>"ФАС"</p>
              <LeftLineBallImg src={LeftLineBall} alt="LeftLineBallImg" />
            </li>
          </ListComands>

          <ContainerLine>
            <h4>КОМАНДИ</h4>
            <ImgLineBallTablet
              src={LineBallTablet}
              teams
              alt="LineBallTablet"
            />
          </ContainerLine>

          <ContainerLine>
            <ImgLineBallTabletTwo
              src={LineBallTabletTwo}
              teams
              alt="LineBallTablet"
            />
            <span>4500₴</span>
          </ContainerLine>

          <ListComandsSecond>
            <li>
              <p>"До мене"</p>
              <LeftLineBallImg src={RightLineBall} alt="LeftLineBallImg" />
            </li>
            <li>
              <p>
                «Тріо<span>: сидіти, стояти, лежати»</span>
              </p>
              <LeftLineBallImg src={RightLineBall} alt="LeftLineBallImg" />
            </li>
            <li>
              <p>"ФУ"</p>
              <LeftLineBallImg src={RightLineBall} alt="LeftLineBallImg" />
              <ContainerWordsMobileSecond>
              <h3>4500₴</h3> 
              </ContainerWordsMobileSecond>
            </li>
          </ListComandsSecond>
        </TitleCommandsConTablet>
      </SevenSection>

      <Form />

      <EighthSection id="questions">
        <TitleCommandsCon>
          <h2>Відповіді на часті запитання</h2>
        </TitleCommandsCon>
        <ListQuestion>
          <li>
            <Question onClick={() => handleToggle(1)}>
              Чи можна онлайн навчити собаку?
              <ArrowClosed isopen={isOpen1 ? 1 : 0} src={ArrowClose} alt="" />
            </Question>
            <Answer isopen={isOpen1 ? 1 : 0}>
              Так можна,але ми рекомендую проводити навчання в очному форматі
            </Answer>
          </li>
          <li>
            <Question onClick={() => handleToggle(2)}>
              Як відбувається оплата?
              <ArrowClosed isopen={isOpen2 ? 1 : 0} src={ArrowClose} alt="" />
            </Question>
            <Answer isopen={isOpen2 ? 1 : 0}>
              Оплата можна здійснити як і готівкою як і через реквізити
            </Answer>
          </li>
          <li>
            <Question onClick={() => handleToggle(3)}>
              Чи буде подальше спілкування після занять?
              <ArrowClosed isopen={isOpen3 ? 1 : 0} src={ArrowClose} alt="" />
            </Question>
            <Answer isopen={isOpen3 ? 1 : 0}>
              Так буде. У мене є чат. Там все розмовляють, ставлять одне одному
              питання. Надсилають як вони займаються або повторюють все вдома.
            </Answer>
          </li>
          <li>
            <Question onClick={() => handleToggle(4)}>
              Що якщо не вийде?
              <ArrowClosed isopen={isOpen4 ? 1 : 0} src={ArrowClose} alt="" />
            </Question>
            <Answer isopen={isOpen4 ? 1 : 0}>
              Якщо тварина не зможе засвоїти тренування ми повернемо вам повну
              вартість курсу
            </Answer>
          </li>
          <li>
            <Question onClick={() => handleToggle(5)}>
              Що я отримаю в кінці?
              <ArrowClosed isopen={isOpen5 ? 1 : 0} src={ArrowClose} alt="" />
            </Question>
            <Answer isopen={isOpen5 ? 1 : 0}>
              Після закінчення ви отримаєте сертифікат про успішне закінчення
              курсу та навчену тварину
            </Answer>
          </li>
        </ListQuestion>
      </EighthSection>

      <Footer />
    </main>
  );
};

export default App;
