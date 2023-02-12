import React from "react";
import Container from "../Container/Container";
import cl from "./EventsMain.module.scss";
import cl2 from "../Card/Card.module.scss";
import Program from "../Program/Program";
const EventsMain = () => {
  const upperText = "Встреча";
  const title = "Заголовок мероприятия";
  const text =
    "Краткий анонс мероприятия в нескольких предложениях. Текст, который будет заинтересовывать пользователя";
  const lowerText = "16 ноября 2021";
  return (
    <div className={cl.events}>
      <Container>
        <h1 className={cl.events__title}>Все мероприятия</h1>
        <div className={cl.events__body}>
          <div className={cl.events__mainEvent}>
            <div className={cl.events__flex}>
              <div className={cl.events__date}>
                <h2 className={cl.events__day}>25</h2>
                <h3 className={cl.events__month}>ноября</h3>
              </div>
              <div className={cl.events__info}>
                <h2 className={`${cl.events__title}`}>День открытых дверей</h2>
                <p className={`${cl.events__subtitle}`}>
                  Приглашаем всех желающих на бесплатную экскурсию в мир
                  востребованных профессий и полезных навыков
                </p>
              </div>
            </div>
            <button className={`${cl.events__button}`}>Записаться</button>
          </div>
          <div className={cl.events__events}>
            <Program
              background={"#C7EEFF"}
              title={title}
              upperText={upperText}
              text={text}
              lowerText={lowerText}
              width={"350px"}
            />
            <Program
              background={"#FFE38E"}
              title={title}
              upperText={upperText}
              text={text}
              lowerText={lowerText}
              width={"350px"}

            />
            <Program
              background={"#DDDDFF"}
              title={title}
              upperText={upperText}
              text={text}
              lowerText={lowerText}
              width={"350px"}

            />
            <Program
              background={"#C5DDFF"}
              title={title}
              upperText={upperText}
              text={text}
              lowerText={lowerText}
              width={"350px"}

            />
            <Program
              background={"#FFEEF6"}
              title={title}
              upperText={upperText}
              text={text}
              lowerText={lowerText}
              width={"350px"}

            />
            <Program
              background={"#FFCE94"}
              title={title}
              upperText={upperText}
              text={text}
              lowerText={lowerText}
              width={"350px"}

            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default EventsMain;
