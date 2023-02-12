import React from "react";
import Card from "../Card/Card";
import Choose from "../Choose/Choose";
import Container from "../Container/Container";
import Review from "../Review/Review";
import cl from "./HomeMain.module.scss";


const HomeMain = () => {
  return (
    <div className={cl.homeMain}>
      <Container>
        <div className={cl.homeMain__select}>
          <div className={cl.homeMain__message}>
            <img
              src="/images/union.png"
              alt=""
              className={cl.homeMain__messageImage}
            />
            <div className={cl.homeMain__textContainer}>
              <p className={`${cl.homeMain__text} ${cl.homeMain__text__bold}`}>
                Кем вы хотите стать
              </p>
              <p className={cl.homeMain__text}>
                Кем вы хотите стать? Пора найти себя и выбрать подходящий курс
                :) Удачи!
              </p>
              <p className={`${cl.homeMain__text} ${cl.homeMain__text__lower}`}>
                Удачи!
              </p>
            </div>
            <img src="/images/Сова.png" alt="" className={cl.homeMain__owl} />
          </div>
          <Choose />
        </div>
        <div className={cl.homeMain__videoContainer}>
          <div className={cl.homeMain__video}>
            <img src="/images/play.png" alt="" />
          </div>
        </div>
        <div className={cl.homeMainAbout}>
          <h2 className={cl.homeMainAbout__title}>
            Актуальные знания от признанных экспертов рынка для новичков и
            практикующих специалистов.
          </h2>
          <div className={cl.homeMainAbout__stats}>
            <div className={cl.homeMainAbout__item}>
              <h1 className={cl.homeMainAbout__number}>600</h1>
              <p>Курсов</p>
            </div>
            <div className={cl.homeMainAbout__item}>
              <h1 className={cl.homeMainAbout__number}>82</h1>
              <p>Ведущих преподавателей</p>
            </div>
            <div className={cl.homeMainAbout__item}>
              <h1 className={cl.homeMainAbout__number}>14 795</h1>
              <p>Выпускников</p>
            </div>
          </div>
        </div>
        <Card />
      </Container>
      <Review />
      <Container>
        <div className={cl.homeMainInfo}>
          <h2 className={cl.homeMainInfo__title}>
            Добро пожаловать в Академию будущего ХОД
          </h2>
          <div className={cl.homeMainInfo__body}>
            <div className={cl.homeMainInfo__item}>
              <img src="/images/about1.png" alt="" />
              <p>Передовой подход к образовательному процессу</p>
            </div>
            <div className={cl.homeMainInfo__item}>
              <img src="/images/about2.png" alt="" />
              <p>Непрерывное усовершенствование и пополнение базы курсов</p>
            </div>
            <div className={cl.homeMainInfo__item}>
              <img src="/images/about3.png" alt="" />
              <p>Только практикующие преподаватели</p>
            </div>
            <div className={cl.homeMainInfo__item}>
              <img src="/images/about4.png" alt="" />
              <p>
                Сопровождение на всех этапах. От начала обучения до
                трудоустройства.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HomeMain;
