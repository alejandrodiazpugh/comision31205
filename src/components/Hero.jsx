import React from 'react'
import heroImg from '../images/hero.jpg'
import { Button } from 'react-bootstrap'

export function Hero() {

    const imgStyle = {
        objectFit: 'contain',
        backgroundPosition: 'center',
        width: '100vw', 
        height: '100vh',
        backgroundImage: `url(${ heroImg })`,
        overflowX: 'hidden'
    }
    const overlayStyle = {
        width: "100vw",
        height: "100vh",
        position: "absolute",
        zIndex: "10",
        backgroundColor: "rgba(0,0,0,.5)",
        display: 'flex',
        flexDirection: "column",
        gap: "5rem",
        alignItems: 'center',
        justifyContent: "center"
    }
    
    const clickToScroll = (e) => {
        window.scrollTo({
            top: 600,
            behavior: 'smooth'
        })
    }
    const mouseEnter = (e) => {
        e.target.style.background = 'hsla(38, 95%, 75%, 0.840)'
    }
    const mouseLeave = (e) => {
        e.target.style.background = '#fcce80'
    }

  return (
    <>
    <div style={overlayStyle}>
    <h1 style={{color: '#90d4e4'}}> Let your Riot begin</h1>
    <Button size="lg" style={{backgroundColor: "#fcce80", border: "none", color: "#495057"}} onClick={clickToScroll} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>Ver Productos</Button>
    </div>
    <div style={imgStyle}>
    </div>
    </>
  )
}
