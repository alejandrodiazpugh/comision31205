import React from "react";
import Logo from "../images/logo2.jpg";
import * as style from "./Navbar.module.css";
import { CartWidget } from "./CartWidget";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import { useState } from "react";

export const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen((prev) => !prev);
  };
  return (
    <header className={style.header}>
      <div className={style.logo}>
        <Link to="/" onClick={() => setNavbarOpen(false)}>
          <img
            className={style.header__logo}
            src={Logo}
            alt="logo de la tienda"
          />
          <h2
            className={style.header__nombre}
            style={{ display: "inline-block" }}
          >
            Runners Riot
          </h2>
        </Link>
      </div>
      <button onClick={handleToggle}>
        {navbarOpen ? <IoMdClose /> : <GiHamburgerMenu />}
      </button>
      <ul
        className={
          navbarOpen
            ? `${style.header__navegacion} ${style.expanded}`
            : `${style.header__navegacion} ${style.reduced}`
        }
      >
        <Link
          to="./Inicio"
          style={{ listStyle: "none", textDecoration: "none" }}
        >
          <li className={style.header__links} onClick={() => setNavbarOpen(false)}>Inicio</li>
        </Link>
        <Link
          to="./category/jordan"
          style={{ listStyle: "none", textDecoration: "none" }}
        >
          <li className={style.header__links} onClick={() => setNavbarOpen(false)}>Jordans</li>
        </Link>
        <Link
          to="./category/yeezy"
          style={{ listStyle: "none", textDecoration: "none" }}
        >
          <li className={style.header__links}>Yeezys</li>
        </Link>
        <Link
          to="./category/converse"
          style={{ listStyle: "none", textDecoration: "none" }}
        >
          <li className={style.header__links}>Converse</li>
        </Link>
        <Link
          to="./Carrito"
          style={{ listStyle: "none", textDecoration: "none" }}
        >
          <li className={style.header__links}>
            Mi Carrito
          </li>
          <CartWidget />
        </Link>
      </ul>
    </header>
  );
};
