import React from "react";
import cl from "./HelpForm.module.scss";
const HelpForm = () => {
  return (
    <div className={cl.form}>
      <div className={cl.form__wrapper}>
        <div className={cl.form__message}>
          <div className={cl.form__images}>
            <img src="/images/Сова.png" alt="" className={cl.form__owl} />
            <img
              src="/images/union2.png"
              alt=""
              className={cl.form__messageImage}
            />
          </div>
          <div className={cl.form__textContainer}>
            <p className={cl.form__text}>Помочь с выбором?</p>
            <p className={cl.form__text}>
              Оставьте заявку и наши специалисты свяжутся с вами, ответят на все
              вопросы и подберут подходящий вариант обучения.
            </p>
          </div>
        </div>
        <div className={cl.form__form}>
          <input
            type="text"
            className={cl.form__input}
            placeholder="Ваше имя"
          />
          <div className={cl.form__flex}>
            <input
              type="text"
              className={cl.form__input}
              placeholder="Ваш телефон"
            />
            <input
              type="text"
              className={cl.form__input}
              placeholder="Ваш e-mail"
            />
          </div>
          <div className={cl.form__flex}>
            <p className={cl.form__text}>
              Нажимая на кнопку, я соглашаюсь на обработку персональных данных и
              с правилами пользования Платформой
            </p>
            <button className={cl.form__button}>Отправить</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpForm;
