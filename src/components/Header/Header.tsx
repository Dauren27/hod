import React from "react";
import StarSvg from "../../icons/StarSvg";
import Navbar from "../Navbar/Navbar";
import TriangleSvg from "../../icons/TriangleSvg";
import cl from "./Header.module.scss";
import ArrowSvg from "../../icons/ArrowSvg";
import ContactsSvg from "../../icons/ContactsSvg";
import LoacationSvg from "../../icons/LocationSvg";
import { FaTelegramPlane, FaFacebook } from "react-icons/fa";
import { AiOutlineInstagram, AiFillYoutube } from "react-icons/ai";
import WhiteLogoSvg from "../../icons/WhiteLogoSvg";
import RectangleSvg from "../../icons/RectangleSvg";
import { RootState } from "../../store/reducers/index";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom"
interface headerProps {
  content?: boolean;
  blue: boolean;
}
const Header = ({ content = false ,blue=false }) => {
  const open = useSelector((state: RootState) => state.sidebarReducer.open);
  return (
    <div className={cl.header}>
      <Navbar blue={blue}/>
      {content && (
        <div className={cl.header__content}>
          <div className={cl.header__first}>
            <div className={cl.header__description}>
              <h1 className={cl.header__title}>Образовательная платформа</h1>
              <h1 className={`${cl.header__title} ${cl.title__second}`}>
                ХОД Future Academy
              </h1>
              <h3 className={cl.header__subtitle}>
                Актуальные знания для новичков и профессионалов
              </h3>
              <div className={cl.header__svg}>
                <StarSvg />
                <TriangleSvg />
              </div>
            </div>
          </div>
          <div className={cl.header__second}></div>
        </div>
      )}
      <div
        className={`${cl.header__sidebar} ${
          open && cl.header__sidebar__active
        }`}
      >
        <ul className={cl.header__links}>
          <li>
            <RectangleSvg />
            <Link to="/courses">Все курсы</Link>
          </li>
          <li>
            <Link to="/">Об академии</Link>
          </li>
          <li>
            <Link to="/events">Мероприятия</Link>
          </li>
          <li>
            <Link to="/">База знаний</Link>
          </li>
          <li>
            <Link to="/career">Карьера</Link>
          </li>
          <li>
            <Link to="/contacts">Контакты</Link>
          </li>
        </ul>
        <ul className={cl.header__info}>
          <li>
            <LoacationSvg />
            <a>Нижний новгород</a>
            <ArrowSvg />
          </li>
          <li>
            <ContactsSvg />
            <Link to="/login">Войти</Link>
          </li>
        </ul>
        <div className={cl.header__footer}>
          <WhiteLogoSvg />
          <a className={cl.header__title}>8 800 950-33-98 </a>
          <a className={cl.header__link}>г. Москва, ул. Ленина, д. 50</a>
          <a className={cl.header__link}>info@hodfutureacademy.ru</a>
          <div className={cl.header__socialNet}>
            <AiOutlineInstagram />
            <FaFacebook />
            <AiFillYoutube />
            <FaTelegramPlane />
          </div>
          <p>© ХОД, Future Academy</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
