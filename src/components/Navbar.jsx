import React from "react";
import Logo from "../images/logo2.jpg"
import "./navbar.css"
import { CartWidget } from "./CartWidget";
import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <header className="header">
            <div className="logo">
                    <img className="header__logo" src= { Logo } alt="logo de la tienda"/>
                    <h2 className="header__nombre">Runners Riot</h2>
            </div>
            <ul className="header__navegacion">
                <li className="header__links"><Link to="./Inicio">Inicio</Link></li>
                <li className="header__links"><Link to="./Tienda">Tienda</Link></li>
                <li className="header__links"><Link to="./Carrito"> Mi Carrito</Link></li>
                <CartWidget itemsEnCarrito = { 0 }/>
            </ul>
        </header>
    )
}