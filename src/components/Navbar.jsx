import React from "react";
import Logo from "../images/logo2.jpg";
import styles from "./Navbar.module.css";
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
  const closeNavbar = () => {
    setNavbarOpen(false);
  }
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to="/" onClick={closeNavbar}>
          <img
            className={styles.header__logo}
            src={Logo}
            alt="logo de la tienda"
          />
          <h2
            className={styles.header__nombre}
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
            ? `${styles.header__navegacion} ${styles.expanded}`
            : `${styles.header__navegacion} ${styles.reduced}`
        }
      >
        <Link to="./Inicio" >
          <li
            className={styles.header__links}
            onClick={closeNavbar}
          >
            Inicio
          </li>
        </Link>
        <Link to="./category/jordan">
          <li
            className={styles.header__links}
            onClick={closeNavbar}
          >
            Jordans
          </li>
        </Link>
        <Link to="./category/yeezy">
          <li className={styles.header__links}
          onClick={closeNavbar}>Yeezys</li>
        </Link>
        <Link to="./category/converse">
          <li className={styles.header__links}
          onClick={closeNavbar}>Converse</li>
        </Link>
        <Link to="./Carrito">
          <li className={`${styles.header__links} ${styles.header__linksLast}`}
          onClick={closeNavbar}>
            Mi Carrito
            <CartWidget />
          </li>
        </Link>
      </ul>
    </header>
  );
};
