import React from "react";
import Logo from "../images/logo2.jpg"
import "./navbar.css"
import { CartWidget } from "./CartWidget";
import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <header className="header">
            <div className="logo">
                <Link to="/"> <img className="header__logo" src= { Logo } alt="logo de la tienda"/>
                <h2 className="header__nombre" style={{display:"inline-block"}}>Runners Riot</h2></Link>
            </div>
            <ul className="header__navegacion">
                <Link to="./Inicio" style={{textDecoration:"none"}}><li className="header__links">Inicio</li></Link>
                <Link to="./category/Jordan" style={{textDecoration:"none"}}><li className="header__links">Air Jordans</li></Link>
                <Link to="./category/Yeezy" style={{textDecoration:"none"}}><li className="header__links">Yeezys</li></Link>
                <Link to="./category/Converse" style={{textDecoration:"none"}}><li className="header__links">Converse</li></Link>
                <Link to="./Carrito" style={{textDecoration:"none"}}><li className="header__links"> Mi Carrito</li></Link>
                <CartWidget itemsEnCarrito = { 0 }/>
            </ul>
        </header>
    )
}