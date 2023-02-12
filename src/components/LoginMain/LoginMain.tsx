import React, { useState } from "react";
import Container from "../Container/Container";
import cl from "./LoginMain.module.scss";
const LoginMain = () => {
  const [active, setActive] = useState(true);
  return (
    <div className={cl.login}>
      <Container>
        <div className={cl.login__body}>
          <div className={cl.login__choose}>
            <h1 className={cl.login__signin} onClick={() => setActive(true)}>
              Вход
            </h1>
            <div className={active && cl.active} />
            <h1 className={cl.login__signup} onClick={() => setActive(false)}>
              Регистрация
            </h1>
            <div className={!active && cl.active} />
          </div>
          {active ? (
            <div className={cl.login__form}>
              <input type="text" placeholder="Введите логин" />
              <input type="text" placeholder="Введите пароль" />
              <button>Войти</button>
            </div>
          ) : (
            <div className={cl.login__form}>
              <input type="text" placeholder="Введите имя пользователя" />
              <input type="text" placeholder="Введите email" />
              <input type="text" placeholder="Введите пароль" />
              <button>Войти</button>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default LoginMain;
