import React from "react";
import cl from "./Card.module.scss";

const Card = () => {
  return (
    <div className={cl.card}>
      <div className={cl.card__header}>
        <div className={cl.card__flex}>
          <div className={cl.card__date}>
            <h2 className={cl.card__day}>25</h2>
            <h3 className={cl.card__month}>ноября</h3>
          </div>
          <div className={cl.card__info}>
            <h2 className={`${cl.card__title} ${cl.title}`}>
              День открытых дверей
            </h2>
            <p className={`${cl.card__subtitle} ${cl.subtitle}`}>
              Приглашаем всех желающих на бесплатную экскурсию в мир
              востребованных профессий и полезных навыков
            </p>
          </div>
        </div>
        <button className={`${cl.card__button} ${cl.button}`}>
          Записаться
        </button>
      </div>
      <div className={cl.card__body}>
        <div className={cl.card__left}>
          <img src="/images/monitor.png" alt="" />
          <h2 className={`${cl.card__title} ${cl.title}`}>
            Программы обучения
          </h2>
          <p className={`${cl.card__subtitle} ${cl.subtitle}`}>
            В списке наших курсов вы сможете найти профессию и занятие по душе,
            изучить новое и получить практические знания, которые помогут
            получить работу мечты.
          </p>
          <button className={`${cl.card__button} ${cl.button}`}>
            Подробнее
          </button>
        </div>
        <div className={cl.card__right}>
          <div className={cl.card__upper}>
            <div className={cl.card__upperLeft}>
              <img src="/images/newspaper.png" alt="" />
              <h2 className={`${cl.card__title} ${cl.title}`}>
                Новости Академии
              </h2>
            </div>
            <div className={cl.card__upperRight}>
              <img src="/images/diagram.png" alt="" />
              <h2 className={`${cl.card__title} ${cl.title}`}>Мир IT</h2>
            </div>
          </div>
          <div className={cl.card__lower}>
            <img src="/images/try.png" alt="" />
            <div className={cl.card__info}>
              <h2 className={`${cl.card__title} ${cl.title}`}>Попробуй!</h2>
              <p className={`${cl.card__subtitle} ${cl.subtitle}`}>
                Пройдите тест и узнайте свои способности в сфере информационных
                технологий
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
