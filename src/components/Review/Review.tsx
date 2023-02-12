import React, { useState } from "react";
import cl from "./Review.module.scss";
import { AiFillStar } from "react-icons/ai";
const Review = () => {
  const [users, setUsers] = useState([1, 2, 3, 4, 5,3,1,5]);
  return (
    <div className={cl.review}>
      <h1 className={cl.review__title}>Отзывы наших студентов</h1>
      <div className={cl.review__container}>
        {users.map((item,index) => (
          <div className={cl.review__item} key={index+1}>
            <div className={cl.review__header}>
              <img src={`/images/users/${item}.png`} alt="" />
              <div className={cl.review__flex}>
                <h2 className={cl.review__name}>Имя Фамилия</h2>
                <p className={cl.review__subtitle}>
                  Студент курса "WEB- разработчик"
                </p>
              </div>
            </div>
            <div className={cl.review__text}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita saepe, corrupti eum sint necessitatibus, fuga similique sunt laborum iusto suscipit vero est asperiores possimus quia dolorem id? Saepe earum officiis laborum ratione aperiam, numquam ducimus?
              </p>
            </div>
            <div className={cl.review__mark}>
              <AiFillStar /> <span>4,87/5</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;
