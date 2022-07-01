import React from "react";
import Logo from "../images/logo2.jpg"
import "../css/main.css"
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
                <Link to="./category/jordan" style={{textDecoration:"none"}}><li className="header__links">Jordans</li></Link>
                <Link to="./category/yeezy" style={{textDecoration:"none"}}><li className="header__links">Yeezys</li></Link>
                <Link to="./category/converse" style={{textDecoration:"none"}}><li className="header__links">Converse</li></Link>
                <Link to="./Carrito" style={{textDecoration:"none"}}><li className="header__links"> Mi Carrito</li></Link>
                <Link to="./Carrito"> <CartWidget /> </Link>
            </ul>
        </header>
    )
}