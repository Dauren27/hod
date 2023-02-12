import React from "react";
import ColorLocationSvg from "../../icons/ColorLocationSvg";
import MessageSvg from "../../icons/MessageSvg";
import PhoneSvg from "../../icons/PhoneSvg";
import Container from "../Container/Container";
import cl from "./ContactsMain.module.scss";
import { FaTelegramPlane, FaFacebook } from "react-icons/fa";
import { AiOutlineInstagram, AiFillYoutube } from "react-icons/ai";

const ContactsMain = () => {
  return (
    <div className={cl.contacts}>
      <Container>
        <h1>Контакты</h1>
        <div className={cl.contacts__body}>
          <div className={cl.contacts__left}>
            <div className={cl.contacts__item}>
              <PhoneSvg />
              <h2>8 800 950-33-98</h2>
            </div>
            <div className={cl.contacts__item}>
              <MessageSvg />
              <p>info@hodfutureacademy.ru</p>
            </div>
            <div className={cl.contacts__item}>
              <ColorLocationSvg />
              <p>г. Москва, ул. Ленина, д. 50</p>
            </div>
            <div className={cl.contacts__socialNet}>
              <AiOutlineInstagram />
              <FaFacebook />
              <AiFillYoutube />
              <FaTelegramPlane />
            </div>
          </div>
          <img className={cl.contacts__right} src="/images/map.png"/>
        </div>
      </Container>
    </div>
  );
};

export default ContactsMain;
