import React, { useState } from "react";
import ChildsSvg from "../../icons/ChildsSvg";
import cl from "./Choose.module.scss";
import courses from "../../mixtures/courses";

const Choose = () => {
  const [active, setActive] = useState(2);
  return (
    <div className={cl.choose}>
      <div className={cl.choose__category}>
        <div className={cl.choose__item}>
          <ChildsSvg />
          <div className={cl.choose__description}>
            <h2 className={cl.choose__title} onClick={() => setActive(0)}>
              Дети
            </h2>
            <p className={cl.choose__subtitle}>8-14лет</p>
          </div>
        </div>
        <div
          className={`${cl.choose__underline} ${active == 0 && cl.active}`}
        />
        <div className={cl.choose__item}>
          <img src="/images/children.png" alt="" />
          <div className={cl.choose__description}>
            <h2 className={cl.choose__title} onClick={() => setActive(1)}>
              Подростки
            </h2>
            <p className={cl.choose__subtitle}>14-18 лет</p>
          </div>
        </div>
        <div
          className={`${cl.choose__underline} ${cl.two} ${
            active == 1 && cl.active
          }`}
        />
        <div className={cl.choose__item}>
          <img src="/images/family.png" alt="" />
          <div className={cl.choose__description}>
            <h2 className={cl.choose__title} onClick={() => setActive(2)}>
              Взрослые
            </h2>
            <p className={cl.choose__subtitle}>18 - ∞</p>
          </div>
        </div>
        <div
          className={`${cl.choose__underline} ${active == 2 && cl.active}`}
        />
      </div>
      <div className={cl.choose__programs}>
        {active == 0
          ? courses["Детям"].map((course: string) => (
              <div className={cl.choose__item}>
                <div className={cl.choose__wrapper}>
                  <p>{course}</p>
                </div>
              </div>
            ))
          : active == 1
          ? courses["Подросткам"].map((course: string) => (
              <div className={cl.choose__item}>
                <div className={cl.choose__wrapper}>
                  <p>{course}</p>
                </div>
              </div>
            ))
          : courses["Взрослым"].map((course: string) => (
              <div className={cl.choose__item}>
                <div className={cl.choose__wrapper}>
                  <p>{course}</p>
                </div>
              </div>
            ))}
        {/* <div className={cl.choose__item}>
          <div className={cl.choose__wrapper}>
            <p>Робототехника</p>
          </div>
        </div>
        <div className={cl.choose__item}>
          <div className={cl.choose__wrapper}>
            <p>Создание игр</p>
          </div>
        </div>
        <div className={cl.choose__item}>
          <div className={cl.choose__wrapper}>
            <p>Web-разработка</p>
          </div>
        </div>
        <div className={cl.choose__item}>
          <div className={cl.choose__wrapper}>
            <p>Мультимедиа</p>
          </div>
        </div>
        <div className={cl.choose__item}>
          <div className={cl.choose__wrapper}>
            <p>Шахматы</p>
          </div>
        </div>
        <div className={cl.choose__item}>
          <div className={cl.choose__wrapper}>
            <p>3D-моделирование и дизайн</p>
          </div>
        </div>
        <div className={cl.choose__item}>
          <div className={cl.choose__wrapper}>
            <p>Английский язык</p>
          </div>
        </div>
        <div className={cl.choose__item}>
          <div className={cl.choose__wrapper}>
            <p>Блогинг</p>
          </div>
        </div>
        <div className={cl.choose__item}>
          <div className={cl.choose__wrapper}>
            <p>Soft skills</p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Choose;
