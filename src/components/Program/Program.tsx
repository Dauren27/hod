import React from "react";
import ProgramSvg from "../../icons/ProgramSvg";
import cl from "./Program.module.scss";
interface programProps {
  background: string;
  upperText?: string;
  title?: string;
  text?: string;
  lowerText?: string;
  width?: string;
}
const Program: React.FC<programProps> = ({
  background,
  upperText = "Программа",
  title = "«Разработка мобильных приложений»",
  text = "Разработчик мобильных приложений создаёт приложения, которыми люди ежедневно пользуются на смартфонах, умных часах и планшетах.",
  lowerText = "24 месяца",
  width="400px"
}) => {
  return (
    <div className={cl.program} style={{ backgroundColor: background, width: width}}>
      <p className={cl.program__text}>{upperText}</p>
      <div className={cl.program__title}>
        <ProgramSvg />
        <h1>{title}</h1>
      </div>
      <p className={cl.program__text}>{text} </p>
      <p className={cl.program__text}>{lowerText}</p>
    </div>
  );
};

export default Program;
