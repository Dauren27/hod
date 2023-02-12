import React, { useState } from "react";
import ArrowSvg from "../../icons/ArrowSvg";
import ContactsSvg from "../../icons/ContactsSvg";
import LoacationSvg from "../../icons/LocationSvg";
import LogoSvg from "../../icons/LogoSvg";
import WhiteLogoSvg from "../../icons/WhiteLogoSvg";
import RectangleSvg from "../../icons/RectangleSvg";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import cl from "./Navbar.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/reducers/index";
import { setSidebarAction } from "../../store/action-creators/sidebar";
import WhiteRectangleSvg from "../../icons/WhiteRectangleSvg";
import WhiteLocationSvg from "../../icons/WhiteLocationSvg";
import WhiteArrowSvg from "../../icons/WhiteArrowSvg";
import WhiteContactsSvg from "../../icons/WhiteContactsSvg";
import { Link } from "react-router-dom";
import FillColorCircleSvg from "../../icons/FillColorCircleSvg";
import { FaRegCircle } from "react-icons/fa";
interface navbarProps {
  blue?: boolean;
}
const Navbar: React.FC<navbarProps> = ({ blue = false }) => {
  //const { open } = useTypeSelector((state:any) => state.userReducer);
  const open = useSelector((state: RootState) => state.sidebarReducer.open);
  const [active, setActive] = useState(0);
  const [cityDiv, setCityDev] = useState(false);
  const dispatch = useDispatch();
  return (
      <div className={`${cl.navbar} ${blue && cl.navbar__blue}`}>
        <div className={cl.navbar__content}>
          <div className={cl.navbar__logo}>
            {blue ? <WhiteLogoSvg /> : <LogoSvg />}
          </div>
          <ul className={cl.navbar__links}>
            <li>
              {blue ? <WhiteRectangleSvg /> : <RectangleSvg />}
              <Link to="/courses">Все курсы</Link>
            </li>
            <li>
              <Link to="/events">Мероприятия</Link>
            </li>
            <li>
              <Link to="/">Базы знаний</Link>
            </li>
            <li>
              <Link to="/career">Карьера</Link>
            </li>
          </ul>
          <ul className={cl.navbar__info}>
            <li onClick={() => setCityDev(!cityDiv)}>
              {blue ? <WhiteLocationSvg /> : <LoacationSvg />}
              <a>Нижний новгород</a>
              {blue ? <WhiteArrowSvg /> : <ArrowSvg />}
            </li>
            <div
              className={cl.navbar__city}
              style={{ display: cityDiv ? "flex" : "none" }}
            >
              <span>
                {active ? <FillColorCircleSvg /> : <FaRegCircle />}
                <a>Дзержинск</a>
              </span>
              <span>
                {active ? <FillColorCircleSvg /> : <FaRegCircle />}
                <a>Нижний Новгород</a>
              </span>
              <span>
                {active ? <FillColorCircleSvg /> : <FaRegCircle />}
                <a>On-line</a>
              </span>
            </div>
            <li>
              <Link to="/contacts">8 800 950-33-98</Link>
            </li>
            <li>
              {blue ? <WhiteContactsSvg /> : <ContactsSvg />}
              <Link to="/login">Войти</Link>
            </li>
          </ul>
          <div className={`${cl.navbar__menu} ${blue && cl.navbar__blue}`}>
            {open ? (
              <AiOutlineClose
                onClick={() => dispatch(setSidebarAction(false))}
              />
            ) : (
              <GiHamburgerMenu
                onClick={() => dispatch(setSidebarAction(true))}
              />
            )}
          </div>
        </div>
      </div>
  );
};

export default Navbar;
