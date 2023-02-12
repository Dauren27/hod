import React, { useState } from "react";
import Choose from "../Choose/Choose";
import Container from "../Container/Container";
import cl from "./CoursesMain.module.scss";
import { FaRegCircle } from "react-icons/fa";
import Program from "../Program/Program";
import { BsRecordCircle } from "react-icons/bs";
import FillColorCircleSvg from "../../icons/FillColorCircleSvg";
const CoursesMain = () => {
  const [active, setActive] = useState(0);
  const [activeTwo, setActiveTwo] = useState(0);
  return (
    <div className={cl.courses}>
      <Container>
        <h1 className={cl.courses__title}>Все программы обучения</h1>
        <div className={cl.courses__body}>
          <div className={cl.courses__filter}>
            <div className={cl.courses__params}>
              <div className={cl.scroll__line} />
              <h2 className={cl.courses__paramsTitle}>Уровень сложности</h2>
              <ul className={cl.courses__paramsChoice}>
                <li
                  className={active == 0 && cl.active}
                  onClick={() => setActive(0)}
                >
                  {active == 0 ? <FillColorCircleSvg /> : <FaRegCircle />}
                  <span>Новичок</span>
                </li>
                <li
                  className={active == 1 && cl.active}
                  onClick={() => setActive(1)}
                >
                  {active == 1 ? <FillColorCircleSvg /> : <FaRegCircle />}
                  <span>Пользователь</span>
                </li>
                <li
                  className={active == 2 && cl.active}
                  onClick={() => setActive(2)}
                >
                  {active == 2 ? <FillColorCircleSvg /> : <FaRegCircle />}
                  <span>Профессионал</span>
                </li>
                <li
                  className={active == 3 && cl.active}
                  onClick={() => setActive(3)}
                >
                  {active == 3 ? <FillColorCircleSvg /> : <FaRegCircle />}
                  <span>Читер</span>
                </li>
              </ul>
              <div className={cl.scroll__line} />
            </div>
            <div className={cl.courses__params}>
              <h2 className={cl.courses__paramsTitle}>Тип обучения</h2>
              <ul className={cl.courses__paramsChoice}>
                <li onClick={() => setActiveTwo(0)}>
                  {activeTwo == 0 ? <FillColorCircleSvg /> : <FaRegCircle />}
                  <span>Любой</span>
                </li>
                <li onClick={() => setActiveTwo(1)}>
                  {activeTwo == 1 ? <FillColorCircleSvg /> : <FaRegCircle />}
                  <span>Профессия</span>
                </li>
                <li onClick={() => setActiveTwo(2)}>
                  {activeTwo == 2 ? <FillColorCircleSvg /> : <FaRegCircle />}
                  <span>Курс</span>
                </li>
              </ul>
              <div className={cl.scroll__line} />
            </div>
          </div>
          <div className={cl.courses__content}>
            <Choose />
            <div className={cl.course__programs}>
              <Program background={"#c7eeff"} />
              <Program background={"#FFCE94"} />
              <Program background={"#FFE38E"} />
              <Program background={"#DDDDFF"} />
              <Program background={"#B8EFCF"} />
              <Program background={"#c7eeff"} />
              <Program background={"#C5DDFF"} />
              <Program background={"#FFE9A8"} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CoursesMain;
