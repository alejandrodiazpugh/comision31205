import React from "react";
import "./navbar.css"
import Logo from "../images/logo2.jpg" 
export const Navbar = () => {
    return (
        <header className="header">
            <div className="logo">
                    <img className="header__logo" src= { Logo } alt="logo de la tienda" />
                    <h2 className="header__nombre">Runners Riot</h2>
            </div>
            <ul className="header__navegacion">
                <li><a className="header__links" href="#">Inicio</a></li>
                <li><a className="header__links" href="#">Tienda</a></li>
                <li><a className="header__links" href="#">Mi Carrito</a></li>
            </ul>
        </header>
    )
}