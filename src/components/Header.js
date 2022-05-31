import React from "react";
import Logo from "./logo/Troll Face.png";

const Header = () => {
  return (
    <header className="header">
      <img src={Logo} alt="logo" className="header--image" />
      <h1 className="header--title">Мемо-Генератор</h1>
      <h3 className="header--project">React for Fun</h3>
    </header>
  );
};

export default Header;
