import React from "react";
import Logo from "../images/logo2.jpg"
import "./navbar.css"
import { CartWidget } from "./CartWidget";

export const Navbar = () => {
    return (
        <header className="header">
            <div className="logo">
                    <img className="header__logo" src= { Logo } alt="logo de la tienda" />
                    <h2 className="header__nombre">Runners Riot</h2>
            </div>
            <ul className="header__navegacion">
                <li className="header__links">Inicio</li>
                <li className="header__links">Tienda</li>
                <li className="header__links">Mi Carrito</li>
                <CartWidget />
            </ul>
        </header>
    )
}