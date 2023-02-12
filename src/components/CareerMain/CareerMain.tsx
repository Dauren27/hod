import React from "react";
import Container from "../Container/Container";
import cl from "./CareerMain.module.scss";
import { ImCross } from "react-icons/im";
import { FaCircle } from "react-icons/fa";
import { BsFillTriangleFill } from "react-icons/bs";
const CareerMain = () => {
  return (
    <div className={cl.career}>
      <div className={cl.career__header}>
        <Container>
          <div className={cl.career__headerContent}>
            <h1 className={cl.career__title}>Поможем построить карьеру</h1>
            <p className={cl.career__subtitle}>
              Карьерный центр ХОД Future Academy
            </p>
            <button className={cl.career__button}>
              Задать вопрос о трудоустройстве
            </button>
          </div>
          <div className={cl.career__photos}>
            <img src="/images/photo1.png" alt="" />
            <img src="/images/photo2.png" alt="" />
            <img src="/images/photo3.png" alt="" />
          </div>
        </Container>
      </div>
      <div className={cl.career__about}>
        <Container>
          <div className={cl.career__items}>
            <div className={cl.career__item}>
              <ImCross />
              <h2>Загаловок</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                mi elit, egestas ut feugiat id, laoreet volutpat risus. Cras
                condimentum, ligula eget
              </p>
            </div>
            <div className={cl.career__item}>
              <FaCircle />
              <h2>Загаловок</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                mi elit, egestas ut feugiat id, laoreet volutpat risus. Cras
                condimentum, ligula eget
              </p>
            </div>
            <div className={cl.career__item}>
              <BsFillTriangleFill />
              <h2>Загаловок</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                mi elit, egestas ut feugiat id, laoreet volutpat risus. Cras
                condimentum, ligula eget
              </p>
            </div>
          </div>
          <div className={cl.career__info}>
            <h2>Почему вы точно найдете работу с ХОД Future Academy</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque quis tellus feugiat, posuere magna et, scelerisque
              leo. In scelerisque pulvinar sem, et gravida mi tincidunt nec.
              Suspendisse a ullamcorper nisi. Duis et mauris et ex posuere
              dignissim vitae a diam. Praesent vulputate nulla sapien, nec
              auctor nibh congue eu. Nulla lectus felis, luctus et sodales ac,
              convallis quis urna. Etiam id ultricies dolor, non efficitur
              tellus. Interdum et malesuada fames ac ante ipsum primis in
              faucibus.{" "}
            </p>
            <div className={cl.career__items}>
              <div className={cl.career__item}>
                <h1 className={cl.career__number}>600</h1>
                <p className={cl.career__subnumber}>Вакансий</p>
              </div>
              <div className={cl.career__item}>
                <h1 className={cl.career__number}>82%</h1>
                <p className={cl.career__subnumber}>
                  Трудоустроенных студентов
                </p>
              </div>
              <div className={cl.career__item}>
                <h1 className={cl.career__number}>98 795</h1>
                <p className={cl.career__subnumber}>
                  Средняя зарплата наших выпускников
                </p>
              </div>
            </div>
          </div>
        </Container>
        <div className={cl.career__plan}>
          <Container>
            <div className={cl.career__wrapper}>
              <h1>Ваш путь к трудоустройству</h1>
              <div className={cl.career__items}>
                <div className={cl.career__item}>
                  <ImCross />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque quis tellus feugiat, posuere magna et,
                    scelerisque leo. In scelerisque pulvinar sem, et gravida mi
                    tincidunt nec.
                  </p>
                </div>
                <div className={cl.career__item}>
                  <FaCircle />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque quis tellus feugiat, posuere magna et,
                    scelerisque leo. In scelerisque pulvinar sem, et gravida mi
                    tincidunt nec.
                  </p>
                </div>
                <div className={cl.career__item}>
                  <BsFillTriangleFill />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque quis tellus feugiat, posuere magna et,
                    scelerisque leo. In scelerisque pulvinar sem, et gravida mi
                    tincidunt nec.
                  </p>
                </div>
              </div>
              <button className={cl.career__button}>
                Задать вопрос о трудоустройстве
              </button>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default CareerMain;
