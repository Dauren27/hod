import React, { useState } from "react";
import cl from "./Footer.module.scss";
import courses from "../../mixtures/courses";
import { FaTelegramPlane, FaFacebook } from "react-icons/fa";
import { AiOutlineInstagram, AiFillYoutube } from "react-icons/ai";
import WhiteLogoSvg from "../../icons/WhiteLogoSvg";
import Container from "../Container/Container";
import HelpForm from "../HelpForm/HelpForm";
const Footer = () => {
  console.log(Object.keys(courses));
  const [childCourses, setChildCourses] = useState(courses["Детям"]);
  const [teensCourses, setTeensCourses] = useState(courses["Подросткам"]);
  const [adultsCourses, setAdultsCourses] = useState(courses["Взрослым"]);

  return (
    <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
      <Container>
        <HelpForm/>
      </Container>
      <div className={cl.footer}>
        <div className={cl.footer__container}>
          <div className={cl.footer__firstColumn}>
            <WhiteLogoSvg />
            <a className={cl.footer__title}>8 800 950-33-98 </a>
            <a className={cl.footer__link}>г. Москва, ул. Ленина, д. 50</a>
            <a className={cl.footer__link}>info@hodfutureacademy.ru</a>
            <div className={cl.footer__socialNet}>
              <AiOutlineInstagram />
              <FaFacebook />
              <AiFillYoutube />
              <FaTelegramPlane />
            </div>
            <p>© ХОД, Future Academy</p>
          </div>
          <div className={cl.footer__column}>
            <h2 className={cl.footer__title}>Детям</h2>
            <ul className={cl.footer__ul}>
              {childCourses.map((course: string) => (
                <li key={course}>
                  <a>{course}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className={cl.footer__column}>
            <h2 className={cl.footer__title}>Подросткам</h2>
            <ul className={cl.footer__ul}>
              {teensCourses.map((course: string) => (
                <li key={course}>
                  <a>{course}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className={cl.footer__column}>
            <h2 className={cl.footer__title}>Взрослым</h2>
            <ul className={cl.footer__ul}>
              {adultsCourses.map((course: string) => (
                <li key={course}>
                  <a>{course}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className={cl.footer__column}>
            <h2 className={cl.footer__title}>Информация</h2>
            <ul className={cl.footer__ul}>
              <li>
                <a>Об академии</a>
              </li>
              <li>
                <a>Мероприятия</a>
              </li>
              <li>
                <a>Новости</a>
              </li>
              <li>
                <a>База знаний</a>
              </li>
              <li>
                <a>Карьера</a>
              </li>
              <li>
                <a>Контакты</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
